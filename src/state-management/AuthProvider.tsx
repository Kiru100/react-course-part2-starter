import { ReactNode, useReducer } from 'react';
import AuthenticationContext from './context/authenticationContext';
import authenticationReducer from './reducers/authenticationReducer';

interface Props{
    children: ReactNode
}

const AuthProvider = ({children}: Props) => {
    const [username, dispatch]  = useReducer(authenticationReducer, "");

    return (
        <AuthenticationContext.Provider value={{username, dispatch}}>
            {children}
        </AuthenticationContext.Provider>        
    )
}

export default AuthProvider;