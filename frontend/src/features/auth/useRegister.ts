import { useMutation, useQueryClient } from "@tanstack/react-query";
import { register } from "../../apis/auth-api";
import type { UserProps } from "../../interface/interface";

export const useRegister = () => {

    const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (userData: UserProps) => register(userData),
    onSuccess: (data) => {
      console.log("responseFromServer:", data);
      if(data.msg==="new user registered"){
        queryClient.invalidateQueries({queryKey:["users"]})
      }
    },
    onError: (error) => {
      const message =
        error instanceof Error ? error.message : "something went wrong";
      console.log("registerError:", message);
    },
  });
};
