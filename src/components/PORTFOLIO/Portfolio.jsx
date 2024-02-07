import React, { useEffect, useRef, useState } from "react";
import Item from "../Item/Item";

export default function Portfolio() {
  const handleEscKey = (event) => {
    if (event.key === "Escape") {
      setDis("none");
    }
  };
  useEffect(() => {
    const MouseDown = (e) => {
      if (!e.target.src) {
        if (Dis != "flex") {
          setDis("none");
        }
      }
    };
    const escKey = (e) => {
      handleEscKey(e);
    };
    document.addEventListener("keydown", (e) => {
      handleEscKey(e);
    });
    document.addEventListener("mousedown", MouseDown);
    return () => {
      document.removeEventListener("mousedown", MouseDown);
      document.removeEventListener("keydown", escKey);
    };
  }, []);
  let Urls = [
    "https://routeegy.github.io/startFramework/assets/images/poert1.png",
    "https://routeegy.github.io/startFramework/assets/images/port2.png",
    "https://routeegy.github.io/startFramework/assets/images/port3.png",
    "https://routeegy.github.io/startFramework/assets/images/poert1.png",
    "https://routeegy.github.io/startFramework/assets/images/port2.png",
    "https://routeegy.github.io/startFramework/assets/images/port3.png",
  ];
  const [Url, setUrl] = useState("");
  const [Dis, setDis] = useState("none");
  
  function ch(e) {
    setUrl(String(Urls[+e.target.getAttribute("data-index")]));
    setDis("flex");
  }

  return (
    <>
      <div className=" my-5 ">
        <div className="container pt-5">
          <h1 className="text-center main-clr fw-bolder pt-4">
            PORTFOLIO COMPONENT
          </h1>
          <div className="d-flex align-items-center justify-content-center my-3">
            <div className="line me-3 main-bg"></div>
            <i className="fa-solid fa-star main-clr"></i>
            <div className="line ms-3  main-bg"></div>
          </div>
          <div className="row g-5">
            {Urls.map((value, index) => {
              return <Item ch={ch} index={index} Url={value} key={index} />;
            })}
          </div>
        </div>
      </div>
      <div className="my-5">
        <div className="container pt-5">
          <div
            style={{ display: `${Dis}` }}
            className={`layer-bg  align-items-center position-fixed vh-100 top-0 justify-content-center start-0 end-0 bottom-0 flex-column  z-1`}
          >
            <img src={Url} alt="" className="w-50" />
          </div>
        </div>
      </div>
    </>
  );
}
