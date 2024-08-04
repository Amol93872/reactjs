import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      <nav>
        <ul>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About us</li>
          </Link>
          <Link to="/login">
            <li>Contact Me</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};
export default Nav;
