import React from "react";
import { services } from "./data";

const Services = () => {
  return (
    <div id="services" className="services section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="intro text-center">My Services</h2>
          </div>
        </div>
        <div className="row gy-4">
          {services.map((curElem) => {
            const { id, icon, heading, desc } = curElem;
            return (
              <div className="col-md-6 col-lg-4 service" key={id}>
                <div className="service-card">
                  <i className={icon}></i>
                  <h4 className="service-heading">{heading}</h4>
                  <p className="desc">{desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
