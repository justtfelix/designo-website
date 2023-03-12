import React from "react";
import { Link } from "react-router-dom";
import { NavContent } from "../../components";

function Navigation() {
  return (
    <NavContent>
      <ul>
        <li>
          <Link to="about">our company</Link>
        </li>
        <li>
          <Link to="locations">locations</Link>
        </li>
        <li>
          <Link to="contact">contact</Link>
        </li>
      </ul>
    </NavContent>
  )
}

export default Navigation;