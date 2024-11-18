import React from "react";
import { ModeToggle } from "./mode-toggle";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-5 py-3 border border-b top-0 z-20">
      <div className="text-2xl font-bold">GitReciept</div>
      <ModeToggle />
    </header>
  );
};

export default Header;
