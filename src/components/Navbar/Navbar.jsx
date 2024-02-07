import React from "react";
import { useState, useEffect } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  const [navbarShrink, setNavbarShrink] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 66) {
        setNavbarShrink(true);
      } else {
        setNavbarShrink(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <nav
        className={`" navbar navbar1 navbar-expand-lg fixed-top main-bg navbar-dark ${
          navbarShrink ? "navbar-shrink" : ""
        }`}
      >
        <div className="container">
          <NavLink
            to={"/"}
            className="text-decoration-none text-white fs-2 fw-bolder py-4 navbar-brand"
          >
            START FRAMEWORK
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link  fw-bolder text-decoration-none text-white px-2 mx-2"
                  aria-current="page"
                  to={"About"}
                >
                  ABOUT
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link  fw-bolder text-decoration-none text-white px-2 mx-2"
                  aria-current="page"
                  to={"Portfolio"}
                >
                  PORTFOLIO
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link  fw-bolder text-decoration-none text-white px-2 mx-2"
                  aria-current="page"
                  to={"Contact"}
                >
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
