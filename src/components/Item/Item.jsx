import React, { useRef } from "react";

export default function Item(props) {
  return (
    <>
      <div
        data-index={props.index}
        key={props.index}
        onClick={(e) => {
          props.ch(e);
        }}
        className="col-md-4 position-relative rounded-3 overflow-hidden  "
      >
        <img
          data-index={props.index}
          className="w-100 rounded-3"
          src={props.Url}
          alt=""
        />
        <div
          data-index={props.index}
          className="overlay position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center rounded-3 mx-4 second-bg"
        >
          <i
            data-index={props.index}
            className="text-white fa-solid fa-plus fa-6x"
          ></i>
        </div>
      </div>
    </>
  );
}
