import { useMutation,useQueryClient } from "@tanstack/react-query";
import { postResult } from "../../apis/result-api";
import type { FinalReport } from "../../interface/interface";


export const usePostResult = ()=>{

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn:(resultData:FinalReport)=>postResult(resultData),
        onSuccess:(data)=>{
            console.log("responseFromServer:",data)
            queryClient.setQueryData(["finalResult"],data)
        },
        onError:(error)=>{
            const message = error instanceof Error?error.message:"something went wrong";
            console.log("postResultError:",message)
        }
    })
}