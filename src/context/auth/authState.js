import React, { useReducer } from "react";

import authReducer from "./authReducer";
import authContext from "./authContext";
import clientAxios from "../../config/axios";
import authToken from "../../config/authToken";

import {
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  OBTAIN_USER,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGN_OUT,
} from "../../types";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    authenticated: null,
    user: null,
    message: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Register user
  const registerUser = async (data) => {
    try {
      const response = await clientAxios.post("/api/users", data);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: response.data,
      });

      authenticatedUser();
    } catch (error) {
      const alert = {
        msg: error.response.data.msg,
        category: "alerta-error",
      };

      dispatch({
        type: REGISTER_ERROR,
        payload: alert,
      });
    }
  };

  //Return authenticated user
  const authenticatedUser = async () => {
    const token = localStorage.getItem("token");

    if (token) authToken(token);

    try {
      const response = await clientAxios.get("/api/auth");

      dispatch({
        type: OBTAIN_USER,
        payload: response.data.user,
      });
    } catch (error) {
      dispatch({
        type: LOGIN_ERROR,
      });
    }
  };

  // User login
  const userLogin = async (data) => {
    try {
      const response = await clientAxios.post("/api/auth", data);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data,
      });

      authenticatedUser();
    } catch (error) {
      const alert = {
        msg: error.response.data.msg,
        category: "alerta-error",
      };

      dispatch({
        type: LOGIN_ERROR,
        payload: alert,
      });
    }
  };

  return (
    <authContext.Provider
      value={{
        token: state.token,
        authenticated: state.authenticated,
        user: state.user,
        message: state.message,
        registerUser,
        userLogin,
        authenticatedUser,
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default AuthState;
