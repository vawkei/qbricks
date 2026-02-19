import { useMutation } from "@tanstack/react-query";
import { googleLogin } from "../../apis/auth-api";
import type { CredentialResponseCredentialProps } from "../../interface/interface";
// import type { CredentialDataProps, CredentialResponseCredentialProps } from "../../interface/interface";


export const useGoogleLogin =()=>{
    return useMutation({
        // mutationFn:(decoded:CredentialDataProps)=>googleLogin(decoded),
        mutationFn:(credential:CredentialResponseCredentialProps)=>googleLogin(credential),
        onSuccess:(data)=>{
            console.log("responseFromServer:",data)
        },
        onError:(error)=>{
            const message = error instanceof Error?error.message:"something went wrong";
            console.log("googleLoginError:",message)
        }
    })
}   