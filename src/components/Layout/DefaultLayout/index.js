import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div>
        <SideBar />
        <div>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
