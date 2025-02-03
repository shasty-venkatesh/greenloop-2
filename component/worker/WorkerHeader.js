import React from "react";
import { Link, useLocation } from "react-router-dom";
import logoImg from "../../image/logo.png";
import "../../style/header.css";

function WorkerHeader() {
  const location = useLocation();

  return (
    <div className="workerheaderbar">
      <header>
        <img src={logoImg} alt="logo" />
        <nav>
          <ul>
            <li>
              <Link
                className={location.pathname === "/worker" ? "active" : "link"}
                to="/worker"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={location.pathname === "/checkstatus" ? "active" : "link"}
                to="/workerstatus"
              >
                Status
              </Link>
            </li>
            <li>
              <Link
                className={location.pathname === "/sellingproduct" ? "active" : "link"}
                to="/sellingproduct"
              >
                Selling
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default WorkerHeader;
