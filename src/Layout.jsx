import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

function Layout() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default Layout;
