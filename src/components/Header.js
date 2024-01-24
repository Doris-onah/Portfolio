import React from "react";
import { Link } from "react-router-dom";
import iconmenu from "..//images/icon-hamburger.svg";
import menuclose from "..//images/icon-close.svg";

import "./Header.css";
export default function Header() {
  const [menu, setMenu] = React.useState(true);

  const handle = () => {
    setMenu(!menu);
  };

  return (
    <div className="header">
      <div className="header-con">
        <div className="header__left">
          {" "}
          <div className="Resume_icon">
            <a
              href="https://docs.google.com/document/d/1OdfGuYoK7FwSPv32nCF5XjzFzowbf1zZJqM7aPVQYMg/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="view_resume"> _resume</div>
            </a>
          </div>
        </div>

        <div className="nav">
          <div onClick={handle}>
            {menu ? (
              <img
                src={iconmenu}
                alt="iconmenu"
                className="menu-icon"
                title="iconmenu"
                width="32px"
                height="31px"
              />
            ) : (
              <img
                src={menuclose}
                alt="iconmenu"
                className="menu-icon "
                title="iconmenu"
                width="32px"
                height="31"
              />
            )}
          </div>
          <ul className={menu ? "" : "nav-active"}>
            <li>
              {" "}
              <Link to="/" onClick={() => setMenu(!menu)}>
                Home
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/about" onClick={() => setMenu(!menu)}>
                about
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/project" onClick={() => setMenu(!menu)}>
                project
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/skills" onClick={() => setMenu(!menu)}>
                skills
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/contact" onClick={() => setMenu(!menu)}>
                contact
              </Link>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
