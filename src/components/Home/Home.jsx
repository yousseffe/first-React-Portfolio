import React from "react";

export default function Home() {
  return (
    <>
      <div className="second-bg vh-100 d-flex justify-content-center align-items-center mt-5 text-white">
        <div className="text-center ">
          <img
            src="https://routeegy.github.io/startFramework/assets/images/avataaars.svg"
            className="w-75 m-4"
            alt=""
          />
          <h1>START FRAMEWORK</h1>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div className="line me-3 bg-white"></div>
            <i className="fa-solid fa-star"></i>
            <div className="line ms-3 bg-white"></div>
          </div>
          <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
    </>
  );
}
