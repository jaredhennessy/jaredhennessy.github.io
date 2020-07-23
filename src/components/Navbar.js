/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <nav
      className="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          Jared Hennessy
        </a>
        {/* navbar burger displayed at < 1024px */}
        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasic"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      {/* navbar menu displayed at >= 1024px  */}
      <div id="navbarBasic" className="navbar-menu">
        <div className="navbar-end">
          <a
            className={
              location.pathname === "/"
                ? "navbar-item is-tab hidden"
                : "navbar-item is-tab"
            }
            href="/"
          >
            About Me
          </a>
          <a
            className={
              location.pathname === "/portfolio"
                ? "navbar-item is-tab hidden"
                : "navbar-item is-tab"
            }
            href="/portfolio"
          >
            Portfolio
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
