import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import { useState } from "react";

function DefaultLayout({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div>
      <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div>
        <SideBar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <div>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
