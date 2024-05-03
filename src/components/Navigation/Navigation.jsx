import React from "react";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css"

const Navigation = () => {
  return (
    <div className={css.navList}>
      <NavLink
        className={({ isActive }) =>
          `${css.navLink} ${isActive ? css.active : ""}`
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `${css.navLink} ${isActive ? css.active : ""}`
        }
        to="/catalog"
      >
        Catalog
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `${css.navLink} ${isActive ? css.active : ""}`
        }
        to="/favorites"
      >
        Favorites
      </NavLink>
    </div>
  );
};

export default Navigation;
