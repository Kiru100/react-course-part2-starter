import { ReactNode, useReducer } from 'react';
import AuthenticationContext from './authenticationContext';

interface LoginAction{
    type: "LOGIN" 
    username: string;
}

interface LogoutAction{
    type: "LOGOUT"
}

export type authAction = LoginAction | LogoutAction;

const AuthenticationReducer = (username: string, action: authAction): string =>{
    switch(action.type){
        case "LOGIN":
            return action.username;
        case "LOGOUT":
            return "";
    }
}

interface Props{
    children: ReactNode
}

const AuthProvider = ({children}: Props) => {
    const [username, dispatch]  = useReducer(AuthenticationReducer, "");

    return (
        <AuthenticationContext.Provider value={{username, dispatch}}>
            {children}
        </AuthenticationContext.Provider>        
    )
}

export default AuthProvider;