import React, { Dispatch } from "react";
import { authAction } from "./AuthProvider";

interface AuthenticationContextType{
    username: string;
    dispatch: Dispatch<authAction>
}

const AuthenticationContext = React.createContext<AuthenticationContextType>({} as AuthenticationContextType);

export default AuthenticationContext;