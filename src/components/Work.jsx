import React from "react";
import { useState } from "react";
import { work } from "./data";
import WorkCard from "./WorkCard";

const Work = () => {
  const [mywork, setMyWork] = useState(work);

  const filterItem = (category) => {
    const updatedData = mywork.filter((curElem) => {
      return curElem.category === category;
    });
    console.log(updatedData);
    setMyWork(updatedData);
  };

  return (
    <>
      <div className="work_navbar section-padding" id="work">
        <h2 className="intro text-center">Recent Work</h2>
        <div className="container">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href={false} className="nav-link" onClick={() => filterItem()}>
                All
              </a>
            </li>
            <li className="nav-item">
              <a
                href={false}
                className="nav-link"
                onClick={() => filterItem("development")}
              >
                Developement
              </a>
            </li>
            <li className="nav-item">
              <a
                href={false}
                className="nav-link"
                onClick={() => filterItem("design")}
              >
                Design
              </a>
            </li>
            <li className="nav-item">
              <a
                href={false}
                className="nav-link"
                onClick={() => filterItem("photography")}
              >
                Photography
              </a>
            </li>
            <li className="nav-item">
              <a
                href={false}
                className="nav-link"
                onClick={() => filterItem("branding")}
              >
                Branding
              </a>
            </li>
            <li className="nav-item">
              <a
                href={false}
                className="nav-link"
                onClick={() => filterItem("video")}
              >
                Video
              </a>
            </li>
          </ul>
      <WorkCard mywork={mywork} />
        </div>
      </div>
    </>
  );
};

export default Work;
