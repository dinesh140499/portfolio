import React from "react";
import { address } from "./data";

const Address = () => {
  return (
    <div className="address section-padding" id="contact">
      <div className="container">
        <div className="row">
          {address.map((curElem) => {
            return <div className="col-md-4" key={curElem.id}>
                <i className={curElem.icon_1}></i>
                <i className={curElem.icon_2}></i>

                <h4>{curElem.heading}</h4>
                <p>{curElem.address}</p>
                <p>{curElem.mail_1}</p>
                <p>{curElem.mail_2}</p>
                <p>{curElem.phone_1}</p>
                <p>{curElem.phone_2}</p>

            </div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Address;
