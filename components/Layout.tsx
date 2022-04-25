import Navbar from "./Navbar";
import Header from "./Header";
import React  from "react";

const Layout = ({ children }:any) => {
  return (
    <>
      <Header />
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
