import { useContext } from "react";
import AuthenticationContext from "./authenticationContext";

const useAuth = () => useContext(AuthenticationContext);

export default useAuth;