import React from "react";
import "./ModernNav.css";

const ModernNav = () => {
  

  return (
    <nav className="d-flex">
      <button
        className="btn btn-light nav-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasWithBothOptions"
        aria-controls="offcanvasWithBothOptions"
      >
        <i className="fa-solid fa-bars"></i>
      </button>
      
      <div
        className="offcanvas offcanvas-start modernNav"
        data-bs-scroll="true"
        tabIndex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <a href="#home">
              <i className="fa-solid fa-link" aria-hidden="true"></i>
              Home
            </a>

            <a href="#link1">
              <i className="fa-solid fa-link" aria-hidden="true"></i>
              Link 1
            </a>
            <a href="#link2">
              <i className="fa-solid fa-link" aria-hidden="true"></i>
              Link 2
            </a>
            <a href="#link3">
              <i className="fa-solid fa-link" aria-hidden="true"></i>
              Link 3
            </a>
            <a href="#link4">
              <i className="fa-solid fa-link" aria-hidden="true"></i>
              Link 4
            </a>
            <a href="#link5">
              <i className="fa-solid fa-link" aria-hidden="true"></i>
              Link 5
            </a>
     
        </div>
     
    </nav>
  );
};

export default ModernNav;
