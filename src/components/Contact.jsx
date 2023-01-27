import React from "react";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="container-fluid">
        <div className="row">
          <h2 className="intro text-center section-padding">Contact Me</h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-7 col-offset-2 contact-form">
            <form>
              <div className="mb-3">
                
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email*"
                />
              </div>
              <div className="mb-3">
               <textarea rows="8" className="form-control" placeholder="Message"></textarea>
              </div>
             
              <button type="submit" className="btn btn-blue">
                Send Message <i class="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
