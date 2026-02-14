import { useMutation } from "@tanstack/react-query";
import { logout } from "../../apis/auth-api";
import { useQueryClient } from "@tanstack/react-query";

export const useLogout = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => logout(),
    onSuccess: (data) => {
      if (data.msg === "user loggedout successfully") {
        queryClient.clear();
      }
    },
    onError: (error) => {
      const message =
        error instanceof Error ? error.message : "something went wrong";
      console.log("logoutError:", message);
    },
  });
};
