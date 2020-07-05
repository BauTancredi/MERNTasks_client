import React, { useContext, useEffect } from "react";

import AuthContext from "../../context/auth/authContext";

const NavBar = () => {
  const authContext = useContext(AuthContext);
  const { authenticatedUser, user, userLogout } = authContext;

  useEffect(() => {
    authenticatedUser();
  }, []);

  return (
    <header className="app-header">
      {user ? (
        <p className="nombre-usuario">
          Hi <span>{user.name}</span>
        </p>
      ) : null}

      <nav className="nav-principal">
        <button
          className="btn btn-blank cerrar-sesion"
          onClick={() => userLogout()}
        >
          Log out
        </button>
      </nav>
    </header>
  );
};

export default NavBar;
