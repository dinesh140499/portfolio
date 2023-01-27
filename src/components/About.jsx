import React from "react";

const About = () => {
  return (
    <div id="about" className="about section-padding">
      <div className="container">
        <div className="row ">
          <div className="col-sm-12 col-lg-6 about-left">
            <img src="./images/profile.jpg" alt="" className="about-img img-fluid" />
          </div>
          <div className="col-sm-12 col-lg-6 about-right">
            <h2>Hello, I Am Easton</h2>
            <h4>Web Developer from Dubai</h4>
            <p>
              Cultivated who resolution connection motionless did occasional.
              Journey promise if it colonel. Can all mirth abode nor hills
              added. Them men does for body pure. Far end not horses remain
              sister. Mr parish is to he answer roused piqued afford sussex. It
              abode words began enjoy years no do ﻿no. Tried spoil as heart
              visit blush or. Boy possible blessing sensible set but margaret
              interest. Off tears are day blind smile alone had. Able an hope of
              body. Any nay shyness article matters own removal nothing his
              forming. Gay own additions education satisfied the perpetual. If
              he cause manor happy.
            </p>

            <div className="social-icons">
              <a href="/#" className="social-icon">
                <i class="fa-brands fa-facebook-f"></i>
              </a>
              <a href="/#" className="social-icon">
                <i class="fa-brands fa-twitter"></i>
              </a>
              <a href="/#" className="social-icon">
                <i class="fa-brands fa-behance"></i>
              </a>
              <a href="/#" className="social-icon">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="/#" className="social-icon">
                <i class="fa-brands fa-pinterest"></i>
              </a>
            </div>
            <div className="about-btn">
              <a href="/#" className="btn btn-blue">Download CV</a>
              <a href="/#" className="btn btn-dark">Hire Me</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
