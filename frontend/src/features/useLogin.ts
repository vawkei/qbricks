import { useMutation } from "@tanstack/react-query";
import { login } from "../apis/auth-api";
import type { UserProps } from "../interface/interface";

export const useLogin = () => {
  return useMutation({
    mutationFn: (userData: UserProps) => login(userData),
    onSuccess: (data) => {
      console.log("responseFromServer:", data);
    },
    onError: (error) => {
      const message =
        error instanceof Error ? error.message : "something went wrong";
      console.log("loginError:", message);
    },
  });
};
