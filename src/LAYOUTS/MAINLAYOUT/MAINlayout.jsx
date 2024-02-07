import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import CopyRight from "../../components/CopyRight/CopyRight";
import Footer from "../../components/Footer/Footer";

export default function MAINlayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <CopyRight />
    </>
  );
}
