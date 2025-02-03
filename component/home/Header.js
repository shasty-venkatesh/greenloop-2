import React from "react";
import { Link, useLocation } from "react-router-dom";
import logoImg from "../../image/logo.png";
import "../../style/header.css";

function Header() {
  const location = useLocation();

  return (
    <div className="headerbar">
      <header>
        <img src={logoImg} alt="logo" />
        <nav>
          <ul>
            <li>
              <Link
                className={location.pathname === "/why" ? "active" : "link"}
                to="/why"
              >
                Why us?
              </Link>
            </li>
            <li>
              <Link
                className={
                  location.pathname === "/scraprate" ? "active" : "link"
                }
                to="/scraprate"
              >
                Scrap Rates
              </Link>
            </li>
            <li>
              <Link
                className={
                  location.pathname === "/workeradd" ? "active" : "link"
                }
                to="/workeradd"
              >
                Get Hired
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
