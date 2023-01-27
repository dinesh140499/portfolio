import React from "react";
import ClientCarousel from "./ClientCarousel";

const MyClients = () => {
  return (
    <div className="clients section-padding">
      <div className="container">
        <div className="row text-center">
          <h2 className="intro">What My Clients Say</h2>
        </div>
            <ClientCarousel />
      </div>
    </div>
  );
};

export default MyClients;
