import { login } from "actions/authApi";
import { LoginContext } from "context/LoginContext";
import { useContext, useRef } from "react";
import Cookies from "js-cookies";

/* eslint-disable react/react-in-jsx-scope */
const LoginPage = () => {
  const loginRef = useRef(null);
  const passwordRef = useRef(null);
  const { setLogin } = useContext(LoginContext);

  const loginHandle = () => {
    const data = {
      loginName: loginRef.current.value,
      password: passwordRef.current.value
    };

    const res = login(data);
    res.then(res => {
      if (res.data.result === "ok") {
        Cookies.setItem("login_check", res.data.data.token, {
          expires: 1,
          path: "/"
        });
        setLogin(true);
      }
    });
  };
  return (
    <div>
      <h2 style={{textAlign: "center"}}>Login</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
          flexDirection:"column"
        }}>
        <input ref={loginRef} type={"email"} defaultValue="ilovebioz@gmail.com"></input>
        <input ref={passwordRef} type={"password"} defaultValue="Love@123"></input>
        <button onClick={loginHandle}>Login</button>
      </div>
    </div>
  );
};

export default LoginPage;
