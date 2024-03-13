import useAuth from "./hooks/useAuth";

const LoginStatus = () => {
  const {username, dispatch} = useAuth();

  if (username.length)
    return (
      <>
        <div>
          <span className="mx-2">{username}</span>
          <a onClick={() => dispatch({type: "LOGOUT" })} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a onClick={() => dispatch({type: "LOGIN", username: "noel.dasco" })} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
