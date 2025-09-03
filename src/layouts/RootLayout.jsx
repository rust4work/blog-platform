import React from "react";
import NavBarFrame from "../components/helpers/NavBarFrame";
import { Outlet } from "react-router";
function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <NavBarFrame></NavBarFrame>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
