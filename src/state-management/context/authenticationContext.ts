import React, { Dispatch } from "react";
import { authAction } from "../reducers/authenticationReducer";

interface AuthenticationContextType{
    username: string;
    authDispatch: Dispatch<authAction>
}

const AuthenticationContext = React.createContext<AuthenticationContextType>({} as AuthenticationContextType);

export default AuthenticationContext;