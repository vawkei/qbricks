import type { UserProps } from "../../interface/interface";
import Button from "../ui/button/Button";
import Card from "../ui/card/Card";
import classes from "./Auth.module.scss";
import React, { useState } from "react";

const Auth = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [haveAccount, setHaveAccount] = useState(false);

  const switchAuthModeHandler = () => {
    setHaveAccount((currState) => !currState);
  };

  //    const onSubmitHandler = async (event: React.FormEvent) => {
  const onSubmitHandler = (event: React.ChangeEvent) => {
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
    } else {
      //👇👇 =================Register=============================👇👇
      if (enteredName.trim().length < 3) {
        return console.log("name should be at least 3 characters long");
      }
      if (enteredEmail.trim().length === 0) {
        return console.log("please enter valid email address");
      }
        if(!enteredEmail.includes("@")){
            return console.log("please enter valid email address")
        }
      if (enteredPassword.trim().length < 6) {
        return console.log("password must be at least 6 characters long");
      }

      const userData: UserProps = {
        name: enteredName,
        email: enteredEmail,
        password: enteredPassword,
        confirmedPassword: confirmedPassword,
      };
      console.log(userData)
    }
  };

  return (
    <div className={classes["auth-form-container"]}>
      <Card className={classes.cardClass}>
        <h2>{haveAccount ? "Login" : "Register"}</h2>
        <form action="" onSubmit={onSubmitHandler}>
          {haveAccount ? (
            ""
          ) : (
            <div className={classes.control}>
              <input
                type="text"
                value={enteredName}
                onChange={(e) => setEnteredName(e.target.value)}
                placeholder="Name"
              />
            </div>
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
            <input
              type="password"
              value={confirmedPassword}
              onChange={(e) => setConfirmedPassword(e.target.value)}
              placeholder="Confirm Password"
            />
          </div>
          <div className={classes.action}>
            <Button type="submit" className={classes.btn}>
              {haveAccount ? "Login" : "Register"}
            </Button>
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
