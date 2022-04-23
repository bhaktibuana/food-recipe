import React, { useContext, useEffect, useState } from "react";
import { NavigationStateContext } from "../../../App";
import { useNavigate } from "react-router-dom";
import {
  MdDoubleArrow,
  MdDashboard,
  MdLogin,
  MdPersonAddAlt1,
  MdOutlineLogout,
  MdNoteAdd,
} from "react-icons/md";

import "./style.scss";

const safeDocument = typeof document !== "undefined" ? document : {};

const SideNavbar = () => {
  const sideNavbarState = useContext(NavigationStateContext);
  const navigate = useNavigate();

  const handleSideNavbar = () => {
    sideNavbarState[1](false);
  };

  const handleNavigate = (event, path) => {
    event.preventDefault();
    navigate(path);
  };

  useEffect(() => {
    const html = safeDocument.documentElement;
    if (sideNavbarState[0]) {
      html.style.overflow = "hidden";
    } else {
      html.style.overflow = "";
    }
  }, [sideNavbarState]);

  return (
    <>
      <div
        className={
          sideNavbarState[0]
            ? "side-navbar-container open"
            : "side-navbar-container"
        }
      >
        <div className="backdrop" onClick={handleSideNavbar}></div>

        <div className="content">
          <div className="toggle-container">
            <button className="btn-close" onClick={handleSideNavbar}>
              <MdDoubleArrow size={24} />
            </button>
          </div>

          <div className="content-title">
            <a
              href="/"
              className="title"
              onClick={(e) => handleNavigate(e, "/")}
            >
              MealMe
            </a>
          </div>

          <div className="content-line"></div>

          <div className="content-items">
            <a
              href="/"
              className="item"
              onClick={(e) => handleNavigate(e, "/")}
            >
              <MdDashboard size={24} />
              <p>Home</p>
            </a>

            {localStorage.getItem("access_token") ? (
              <>
                <a
                  href="/"
                  className="item"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  <MdNoteAdd size={24} />
                  <p>Create</p>
                </a>

                <a
                  href="/"
                  className="item"
                  onClick={(e) => {
                    e.preventDefault();
                    localStorage.removeItem("access_token");
                    window.location.reload();
                  }}
                >
                  <MdOutlineLogout size={24} />
                  <p>Logout</p>
                </a>
              </>
            ) : (
              <>
                {window.location.pathname === "/login" ? (
                  <a
                    href="/register"
                    className="item"
                    onClick={(e) => handleNavigate(e, "/register")}
                  >
                    <MdPersonAddAlt1 size={24} />
                    <p>Register</p>
                  </a>
                ) : (
                  <a
                    href="/login"
                    className="item"
                    onClick={(e) => handleNavigate(e, "/login")}
                  >
                    <MdLogin size={24} />
                    <p>Login</p>
                  </a>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNavbar;