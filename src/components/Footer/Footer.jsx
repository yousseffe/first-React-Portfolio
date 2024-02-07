import React from "react";

export default function Footer() {
  return (
    <>
      <div className="main-bg row p-5 text-white">
        <div className="col-md-4 text-center p-5">
          <h3>LOCATION</h3>
          <p>2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>
        </div>
        <div className="col-md-4 text-center p-5">
          <h3>AROUND THE WEB</h3>
          <div className="d-flex  justify-content-center align-items-center ">
            <div className="d-flex justify-content-center align-items-center p-2 border rounded-5 m-2">
              <i className="fa-brands fa-facebook  "></i>
            </div>
            <div className="d-flex justify-content-center align-items-center p-2 border rounded-5 m-2">
              <i className="fa-brands fa-twitter "></i>
            </div>
            <div className="d-flex justify-content-center align-items-center p-2 border rounded-5 m-2">
              <i className="fa-brands fa-linkedin-in  "></i>
            </div>
            <div className="d-flex justify-content-center align-items-center p-2 border rounded-5 m-2">
              <i className="fa-solid fa-globe  "></i>
            </div>
          </div>
        </div>
        <div className="col-md-4 text-center p-5">
          <h3>ABOUT FREELANCER</h3>
          <p>
            Freelance is a free to use, licensed Bootstrap theme created by
            Route
          </p>
        </div>
      </div>
    </>
  );
}
