import React from "react";
import Header from "./Header";

const Layout = ({ children, handleAside }) => {
  return (
    <>
      <Header handleAside={handleAside} />
      {children}
    </>
  );
};

export default Layout;
