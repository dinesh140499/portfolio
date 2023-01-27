import React, { useEffect } from "react";

const Navbar = () => {
  const scrollNavbar = () => {
    let navbar = document.querySelector(".navbar");
    let collapse=document.querySelector('.navbar-collapse')
    let heigth = 200;

    if (window.scrollY > heigth && collapse) {
      navbar.classList.add("active-scroll");
      collapse.classList.remove('show')
    } else {
      navbar.classList.remove("active-scroll");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollNavbar);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="/#">
          <img src="./images/logo.png" alt="" className="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#experiences">
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#work">
                Work
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#blog">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
