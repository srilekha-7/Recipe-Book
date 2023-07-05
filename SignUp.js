import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { createUserWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { HistoryRouterProps } from "react-router-dom";
import { auth } from "./Firebase";
import "./index.css";
function Login(p) {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    password: "",
    email: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  // console.log(values);

  const onClickSignUp = () => {
    if (!values.username || !values.email || !values.password) {
      setErrorMsg("*Fill all fields");
      return;
    }
    setErrorMsg("");
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(async (res) => {
        const user = res.user;
        await updateProfile(user, {
          displayName: values.username,
        });
        console.log(res);
        navigate("/", { replace: true });
      })
      .catch((err) => {
        setErrorMsg(err.message);
        // console.log(err);
      });
  };
  return (
    <div>
      <div className="login-container">
        <div className="login-card-container">
          <div className="form-container">
            <label className="label">Username</label>
            <input
              className="input-el"
              placeholder="username"
              value={values.username}
              onChange={(e) =>
                setValues((prev) => ({ ...prev, username: e.target.value }))
              }
            />
            <label className="label">Email</label>
            <input
              className="input-el"
              placeholder="Email"
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
            <p className="error-msg">{errorMsg}</p>
            <button
              className="submit-button"
              type="submit"
              onClick={onClickSignUp}
            >
              Sign up
            </button>
          </div>

          <p className="label, new-user">
            Already have an account?
            <Link to="/">
              <span className="sign-up-text"> Login</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
