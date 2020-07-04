import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import AlertContext from "../../context/alerts/alertContext";

const NewAccount = () => {
  const alertContext = useContext(AlertContext);
  const { alert, showAlert } = alertContext;

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
    )
      showAlert("All fields are mandatory", "alerta-error");

    //Password 6 charecter minimun

    //Two passwods equals

    //Action
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
