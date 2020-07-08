import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import AlertContext from "../../context/alerts/alertContext";
import AuthContext from "../../context/auth/authContext";

const Login = (props) => {
  const alertContext = useContext(AlertContext);
  const { alert, showAlert } = alertContext;

  const authContext = useContext(AuthContext);
  const { userLogin, message, authenticated } = authContext;

  // In case the email or password not exists
  useEffect(() => {
    if (authenticated) props.history.push("/projects");

    if (message) showAlert(message.msg, message.category);
    // eslint-disable-next-line
  }, [message, authenticated, props.history]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;
  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === "" || password.trim() === "")
      showAlert("All fields are mandatory", "alerta-error");

    userLogin({ email, password });
  };
  return (
    <div className="form-usuario">
      {alert ? (
        <div className={`alerta ${alert.category}`}>{alert.message}</div>
      ) : null}
      <div className="contenedor-form sombra-dark">
        <h1>Login</h1>

        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              placeholder="Email"
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              placeholder="Password"
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Login"
            />
          </div>
        </form>

        <Link to="/new-account" className="enlace-cuenta">
          Obtain account
        </Link>
      </div>
    </div>
  );
};

export default Login;
