import React from "react";
import { Link } from "react-router-dom";
import { ContentColor } from "../../interfaces";
import { NavContent } from "../../components";
import { navLinks } from "../../data";

function Navigation(props: ContentColor) {
  return (
    <NavContent isLightBg={props.isLightBg}>
      <ul>
        {navLinks.map((item) => {
          const { id, title, to } = item;

          return (
            <li key={id}>
              <Link to={to}>{title}</Link>
            </li>
          )
        })}
      </ul>
    </NavContent>
  )
}

export default Navigation;