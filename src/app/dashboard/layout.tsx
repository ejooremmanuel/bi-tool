import React from "react";
import AutoLogout from "../components/AutoLogout";

const Layout = ({ children }: { children: React.ReactNode }) => {

  return (
    <div>
      <AutoLogout>{children}</AutoLogout>
    </div>
  );
};

export default Layout;
