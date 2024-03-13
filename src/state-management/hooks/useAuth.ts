import { useContext } from "react";
import AuthenticationContext from "../context/authenticationContext";

const useAuth = () => useContext(AuthenticationContext);

export default useAuth;