import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { types } from "../../types";
import { AuthContext } from "./../../auth/authContext";

export const NavBar = () => {
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);

  const { name } = user;
  const handleLogOut = () => {
    const action = {
      type: types.logout,
      payload: {
        logged: false,
      },
    };
    dispatch(action);
    navigate("/login", {
      replace: true,
    });
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Asociaciones
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink
                to="/marvel"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
              >
                Marvel
              </NavLink>
              <NavLink
                to="/dc"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
              >
                DC
              </NavLink>
              <NavLink
                to="/search"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
              >
                Search
              </NavLink>
            </div>
          </div>
          <div className="collapse navbar-collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
            <ul className="navbar-nav ml-auto">
              <span className="nav-item nav-link text-info">{name}</span>
              <button className="nav-item nav-link btn" onClick={handleLogOut}>
                Logout
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
