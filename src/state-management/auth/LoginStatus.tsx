import useAuthStore from "./store";

const LoginStatus = () => {
  const {user, login, logout} = useAuthStore();

  if (user.length)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => logout()} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a onClick={() => login("noel.dasco")} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
