import * as React from "react";
import { container, heading } from "./layout.module.css";
import SiteNav from "./SiteNav";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <SiteNav />
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
