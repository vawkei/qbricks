import type { CredentialDataProps, UserProps } from "../../interface/interface";
import Button from "../ui/button/Button";
import Card from "../ui/card/Card";
import classes from "./Auth.module.scss";
import React, { useState } from "react";
import { useRegister } from "../../features/auth/useRegister";
import { useLogin } from "../../features/auth/useLogin";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SET_LOGGEDIN_USER } from "../../store/authStore/authIndex";
import type { AddDispatch } from "../../store/store";
// import { FcGoogle } from "react-icons/fc";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useGoogleLogin } from "../../features/auth/useGoogleLogin";

const Auth = () => {
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [haveAccount, setHaveAccount] = useState(false);

  const { mutateAsync: registerUser, isPending: isRegistering } = useRegister();
  const { mutateAsync: loginUser, isPending: isLoggingIn } = useLogin();
  const { mutateAsync: googleLoginUser } = useGoogleLogin();

  const navigate = useNavigate();
  const dispatch = useDispatch<AddDispatch>();

  const switchAuthModeHandler = () => {
    setHaveAccount((currState) => !currState);
  };

  //    const onSubmitHandler = async (event: React.FormEvent) => {
  const onSubmitHandler = async (event: React.ChangeEvent) => {
    event.preventDefault();

    if (haveAccount) {
      //👇👇 =========================== Logging===============================👇👇
      if (
        enteredEmail.trim().length === 0 ||
        enteredPassword.trim().length < 6
      ) {
        return console.log("fill inputs accordingly");
      }

      const userData: UserProps = {
        email: enteredEmail,
        password: enteredPassword,
      };

      console.log(userData);

      await loginUser(userData, {
        onSuccess: (data) => {
          console.log("responseFromServer:", data);
          if (data.msg === "user loggedIn successfully...") {
            dispatch(SET_LOGGEDIN_USER(data));
            navigate("/onboarding");
          }
        },
        onError: (error) => {
          const message =
            error instanceof Error ? error.message : "something went wrong";
          console.log("loginError:", message);
        },
      });
    } else {
      //👇👇 =================Register=============================👇👇
      if (enteredFirstName.trim().length < 3) {
        return console.log("first name should be at least 3 characters long");
      }
      if (enteredLastName.trim().length < 3) {
        return console.log("last name should be at least 3 characters long");
      }
      if (enteredEmail.trim().length === 0) {
        return console.log("please enter valid email address");
      }
      if (!enteredEmail.includes("@")) {
        return console.log("please enter valid email address");
      }
      if (enteredPassword.trim().length < 6) {
        return console.log("password must be at least 6 characters long");
      }

      const userData: UserProps = {
        first_name: enteredFirstName,
        last_name: enteredLastName,
        email: enteredEmail,
        password: enteredPassword,
        confirmedPassword: confirmedPassword,
      };
      console.log(userData);
      await registerUser(userData, {
        onSuccess: (data) => {
          console.log("responseFromServer:", data);
          if (data.msg === "new user registered successfully") {
            setHaveAccount(true);
          }
        },
        onError: (error) => {
          const message =
            error instanceof Error ? error.message : "something went wrong";
          console.log("registerError:", message);
        },
      });
    }
  };

  return (
    <div className={classes["auth-form-container"]}>
      <Card className={classes.cardClass}>
        {isRegistering || (isLoggingIn && <p>Please wait...</p>)}
        <h2>{haveAccount ? "Login" : "Register"}</h2>
        <form action="" onSubmit={onSubmitHandler}>
          {haveAccount ? (
            ""
          ) : (
            <>
              <div className={classes.control}>
                <input
                  type="text"
                  value={enteredFirstName}
                  onChange={(e) => setEnteredFirstName(e.target.value)}
                  placeholder="First Name"
                />
              </div>
              <div className={classes.control}>
                <input
                  type="text"
                  value={enteredLastName}
                  onChange={(e) => setEnteredLastName(e.target.value)}
                  placeholder="Last Name"
                />
              </div>
            </>
          )}
          <div className={classes.control}>
            <input
              type="text"
              value={enteredEmail}
              onChange={(e) => setEnteredEmail(e.target.value)}
              placeholder="Email"
            />
          </div>
          <div className={classes.control}>
            <input
              type="password"
              value={enteredPassword}
              onChange={(e) => setEnteredPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <div className={classes.control}>
            {haveAccount ? (
              ""
            ) : (
              <input
                type="password"
                value={confirmedPassword}
                onChange={(e) => setConfirmedPassword(e.target.value)}
                placeholder="Confirm Password"
              />
            )}
          </div>

          <div className={classes.action}>
            <Button type="submit" className={classes.btn}>
              {haveAccount ? "Login" : "Register"}
            </Button>

            <div className={classes.google}>
              <p>or Continue with</p>
              {/* <Button type="submit" className={classes.btn} >
                Continue with Google <FcGoogle />
              </Button> */}
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  console.log("credentialResponse:", credentialResponse);
                  if (credentialResponse.credential) {
                    const decoded = jwtDecode<CredentialDataProps>(
                      credentialResponse.credential,
                    );
                    console.log("credentialResponse2:", decoded);
                    console.log("email:", decoded.email, "name:", decoded.name);
                    googleLoginUser(
                      { credential: credentialResponse.credential },
                      {
                        onSuccess: (data) => {
                          if (data.msg === "user loggedIn successfully...") {
                            dispatch(SET_LOGGEDIN_USER(data));
                            navigate("/onboarding");
                          }
                        },
                        onError: (error) => {
                          const message =
                            error instanceof Error
                              ? error.message
                              : "something went wrong";
                          console.log("googleLoginError:", message);
                        },
                      },
                    );
                  }
                }}
                onError={() => {
                  console.log("login Failed...");
                }}
              />
            </div>

            <div className={classes.switch} onClick={switchAuthModeHandler}>
              {haveAccount
                ? "Don't have an account? Register"
                : "Have an account? Login"}
            </div>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Auth;
