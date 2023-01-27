import React from "react";

const Counter = () => {
  return (
    <div className="section-padding counter" id="counter">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-6 col-lg-3 counter-card">
            <i className="fa-solid fa-code"></i>
            <h3 className="count">1679</h3>
            <h4>Lines of code</h4>
          </div>
          <div className="col-md-6 col-lg-3 counter-card">
            <i className="fa-regular fa-face-smile"></i>
            <h3 className="count">1679</h3>
            <h4>Happy Clients</h4>
          </div>
          <div className="col-md-6 col-lg-3 counter-card">
            <i className="fa-regular fa-clock"></i>
            <h3 className="count">1679</h3>
            <h4>Days of work</h4>
          </div>
          <div className="col-md-6 col-lg-3 counter-card">
            <i className="fa fa-coffee"></i>
            <h3 className="count">1679</h3>
            <h4>Cups of Coffee</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
