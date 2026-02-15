import { useMutation } from "@tanstack/react-query";
import { logout } from "../../apis/auth-api";
import { useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import type { AddDispatch } from "../../store/store";
import { SET_LOGGEDOUT_USER } from "../../store/authStore/authIndex";

export const useLogout = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch<AddDispatch>()


  return useMutation({
    mutationFn: () => logout(),
    onSuccess: (data) => {
      if (data.msg === "user logged out successfully...") {
        dispatch(SET_LOGGEDOUT_USER(data))
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
