import React, { useReducer } from "react";

import authReducer from "./authReducer";
import authContext from "./authContext";
import clientAxios from "../../config/axios";

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
    if (token) {
    }
    try {
      const response = await clientAxios.get("/api/auth");
    } catch (error) {
      dispatch({
        type: LOGIN_ERROR,
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
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default AuthState;
