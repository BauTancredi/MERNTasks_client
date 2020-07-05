import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AlertContext from "../../context/alerts/alertContext";
import AuthContext from "../../context/auth/authContext";

const NewAccount = (props) => {
  const alertContext = useContext(AlertContext);
  const { alert, showAlert } = alertContext;

  const authContext = useContext(AuthContext);
  const { registerUser, message, authenticated } = authContext;

  // In case the user has been authenicated or its duplicated
  useEffect(() => {
    if (authenticated) props.history.push("/projects");

    if (message) showAlert(message.msg, message.category);
  }, [message, authenticated, props.history]);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const { name, email, password, confirm } = user;
  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    //No empty fields
    if (
      name.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      confirm.trim() === ""
    ) {
      showAlert("All fields are mandatory", "alerta-error");
      return;
    }

    //Password 6 charecter minimun
    if (password.length < 6) {
      showAlert("Password must be at least 6 characters", "alerta-error");
      return;
    }

    //Two passwods equals
    if (password !== confirm) {
      showAlert("Passwords must be equals", "alerta-error");
      return;
    }

    //Action
    registerUser({
      name,
      email,
      password,
    });
  };

  return (
    <div className="form-usuario">
      {alert ? (
        <div className={`alerta ${alert.category}`}>{alert.message}</div>
      ) : null}
      <div className="contenedor-form sombra-dark">
        <h1>Register account</h1>

        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={name}
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="confirmr">Confirm Password</label>
            <input
              type="password"
              name="confirm"
              id="confirm"
              placeholder="Confirm Password"
              value={confirm}
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Register"
            />
          </div>
        </form>

        <Link to="/" className="enlace-cuenta">
          Login
        </Link>
      </div>
    </div>
  );
};

export default NewAccount;
