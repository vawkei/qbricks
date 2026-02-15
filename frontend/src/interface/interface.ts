export interface UserProps{
    first_name?:string;
    last_name?:string
    email:string;
    password:string;
    confirmedPassword?:string
};

export interface AuthState{
    isLoggedIn: boolean;
    isSuccess:boolean;
    message:string;
    user:null
};