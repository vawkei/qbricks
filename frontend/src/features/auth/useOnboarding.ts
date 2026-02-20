import { useNavigate } from "react-router-dom";
import { onboarding } from "../../apis/auth-api";
import { useMutation } from "@tanstack/react-query";

export const useOnboarding = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: () => onboarding(),
    onSuccess: (data) => {
      console.log("responseFromServer:", data);
      if (data.msg === "user successfully onboarded") {
        navigate("/dashboard");
      }
    },
    onError: (error) => {
      const message =
        error instanceof Error ? error.message : "something went wrong";
      console.log("logoutError:", message);
    },
  });
};
