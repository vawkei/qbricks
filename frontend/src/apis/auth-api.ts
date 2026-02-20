import type {
  CredentialResponseCredentialProps,
  UserProps,
} from "../interface/interface";

const BACKEND_URL = "http://localhost:5000/api/v1/auth";

export const register = async (userData: UserProps) => {
  try {
    const response = await fetch(`${BACKEND_URL}/register`, {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    const data = await response.json();
    console.log("data:", data);

    if (!response.ok) {
      // throw new Error(data.msg || "request failed")
      throw new Error();
    }

    return data;
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "something went wrong";
    console.log("registerError:", message);
  }
};

export const login = async (userData: UserProps) => {
  try {
    const response = await fetch(`${BACKEND_URL}/login`, {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    const data = await response.json();
    console.log("data:", data);

    if (!response.ok) {
      throw new Error();
      // throw new Error (data.msg || "request failed")
    }

    return data;
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "something went wrong";
    console.log("loginError:", message);
  }
};

// export const googleLogin = async (decoded: CredentialDataProps) => {
export const googleLogin = async (
  credential: CredentialResponseCredentialProps,
) => {
  // console.log("credential:",credential)

  try {
    const response = await fetch(`${BACKEND_URL}/google`, {
      method: "POST",
      body: JSON.stringify(credential),
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.msg || "request failed");
    }

    console.log("data:", data);
    return data;
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "something went wrong";
    console.log("googleLoginError:", message);
  }
};

export const onboarding = async () => {
  try {
    const response = await fetch(`${BACKEND_URL}/onboarding`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      credentials: "include"
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.msg || "request failed");
    }
    console.log("data:", data);
    return data;
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "something went wrong";
    console.log("logoutError:", message);
  }
};

export const logout = async () => {
  try {
    const response = await fetch(`${BACKEND_URL}/logout`);
    const data = await response.json();
    console.log("data:", data);

    if (!response.ok) {
      throw new Error();
    }
    return data;
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "something went wrong";
    console.log("logoutError:", message);
  }
};
