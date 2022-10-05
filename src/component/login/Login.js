import React, { useState } from "react";
//redux import
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { alertAction } from "../../store/Alert";
import { credentialAction } from "../../store/Credential";
//Components import
import { CustomInput, PasswordInput } from "../../layout/form/input/Input";
import { PrimaryButton } from "../../layout/form/button/Button";
//api import
import { POST_API } from "../../core/services/api";
import "./Login.scss";

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState();
  const [formError, setFormError] = useState({
    usernameError: "",
    passwordError: "",
  });
  const [userCredential, setUserCredential] = useState({
    username: "",
    password: "",
  });
  const checkValidation = () => {
    let array = {
      ...formError,
      ...(userCredential.username === "" &&
        formError.usernameError === "" && {
          usernameError: "Username field is required",
        }),
      ...(userCredential.password === "" &&
        formError.passwordError === "" && {
          passwordError: "Password field is required",
        }),
    };

    setFormError(array);

    return Object.values(array).every((item) => item === "");
  };
  const handleLogin = () => {
    if (checkValidation()) {
      setLoading(true);
      POST_API("auth/signin", userCredential).then((res) => {
        if (res.request.status === 201) {
          dispatch(
            credentialAction.setCredential({
              token: res?.data.accessToken,
            })
          );
          localStorage.setItem("token", res?.data.accessToken);
          navigate("/dashboard");
        } else {
          dispatch(
            alertAction.show({
              visible: true,
              text: "Invalid username or password",
              type: "error",
            })
          );
        }
        setLoading(false);
      });
    }
  };
  return (
    <div className="login-container">
      <div className="login-form prime-container">
        <div className="login-header">
          <h3>Login</h3>
        </div>
        <div className="login-body">
          <CustomInput
            value={userCredential.username}
            label="User Name"
            onChange={(e) => {
              setUserCredential({
                ...userCredential,
                username: e.target.value,
              });
              setFormError({ ...formError, usernameError: "" });
            }}
            error={formError.usernameError}
          />
          <PasswordInput
            onChange={(e) => {
              setUserCredential({
                ...userCredential,
                password: e.target.value,
              });
              setFormError({ ...formError, passwordError: "" });
            }}
            label="Password"
            type="password"
            error={formError.passwordError}
          />
        </div>
        <div className="login-footer">
          <PrimaryButton
            onClick={handleLogin}
            text="Login"
            loading={loading}
            type="button"
          />
        </div>
      </div>
    </div>
  );
}
