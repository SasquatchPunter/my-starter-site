import * as React from "react";
import { Link } from "gatsby";
import { navLinks, navLinkItem, navLinkText } from "./site-nav.module.css";

function SiteNav() {
  return (
    <nav>
      <ul className={navLinks}>
        <li className={navLinkItem}>
          <Link className={navLinkText} to="/">
            Home
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link className={navLinkText} to="/about">
            About
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link className={navLinkText} to="/blog">
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default SiteNav;
