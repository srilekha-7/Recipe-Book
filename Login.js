import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./Firebase";
// import { HistoryRouterProps } from "react-router-dom";
// import { onAuthStateChanged } from "firebase/auth";

import "./index.css";
import { signInWithEmailAndPassword } from "firebase/auth";
function Login() {
  const [userName, setUserName] = useState("");
  const [values, setValues] = useState({ email: "", password: "" });

  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  const onClickLogin = () => {
    if (!values.email || !values.password) {
      setErrorMsg("*Fill all fields");
      return;
    }
    setErrorMsg("");
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(async (res) => {
        // console.log(res);
        navigate("/home", { replace: true });
      })
      .catch((err) => {
        setErrorMsg(err.message);
        // console.log(err);
      });
  };

  return (
    <div>
      <div className="login-container">
        <img
          src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?w=740&t=st=1687929314~exp=1687929914~hmac=916b4dccb069b8eab40424842ed52a5d0902b783b424a2cb9a73f7ff57fcde13"
          alt=""
        />

        <div className="login-card-container">
          {userName ? (
            <h2>{`Login ${userName}`}</h2>
          ) : (
            <>
              <h2>Login</h2>
            </>
          )}

          <div className="form-container">
            <label className="label">E-mail</label>
            <input
              className="input-el"
              placeholder="email"
              value={values.email}
              onChange={(e) =>
                setValues((prev) => ({ ...prev, email: e.target.value }))
              }
            />
            <label className="label">Password</label>
            <input
              placeholder="password"
              type="password"
              className="input-el"
              value={values.password}
              onChange={(e) =>
                setValues((prev) => ({ ...prev, password: e.target.value }))
              }
            />
            <button
              className="submit-button"
              type="submit"
              onClick={onClickLogin}
            >
              Login
            </button>
            <p className="error-msg">{errorMsg}</p>
          </div>

          <p className="label, new-user">
            New User?
            <Link to="/sign-up">
              <span className="sign-up-text">Sign Up</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
