import { useFormik } from "formik";
import React from "react";

export default function Contact() {
  const Formic = useFormik({
    initialValues: {
      Name: "",
      Age: "",
      Email: "",
      Password: "",
    },
  });
  return (
    <>
      <div className="my-5 vh-100">
        <div className="container pt-5">
          <h1 className="text-center main-clr fw-bolder pt-4">
            CONATCT SECTION
          </h1>
          <div className="d-flex align-items-center justify-content-center my-3 mb-5">
            <div className="line me-3 main-bg"></div>
            <i className="fa-solid fa-star main-clr"></i>
            <div className="line ms-3  main-bg"></div>
          </div>
          <div className="d-flex flex-column ">
            <div className="d-flex flex-column justify-content-center align-items-center py-5">
              <input
                type="text"
                placeholder="userName"
                className="form-control w-50 border-bottom p-3  my-3"
              />
              <input
                type="text"
                placeholder="userAge"
                className="form-control w-50 border-bottom p-3 my-3"
              />
              <input
                type="text"
                placeholder="userEmail"
                className="form-control w-50 border-bottom p-3 my-3"
              />
              <input
                type="text"
                placeholder="userName"
                className="form-control w-50 border-bottom p-3 my-3"
              />
              <input
                type="button"
                value="send Message"
                className="btn second-bg text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
