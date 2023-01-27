import React from "react";
import { experience } from "./data";

const Experience = () => {
  return (
    <div className="experience section-padding" id="experiences">
      <div className="container">
        <div className="row">
          <h2 className="intro text-center">My Experience</h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-12">
              {experience.map((curElem) => {
                const {id,join,last,title,company,heading,desc_1,desc_2,desc_3}=curElem
                return (
                  <div className="row" key={id}>
                    <div className="col-6 exp-card-first">
                      <h4>{join}-{last}</h4>
                      <span>{title} {company}</span>
                    </div>
                    <div className="col-6 exp-card-two">
                      <h3>{heading}</h3>
                      <p>
                       {desc_1}
                      </p>
                      <p>
                       {desc_2}
                      </p>
                      <p>
                        {desc_3}
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
