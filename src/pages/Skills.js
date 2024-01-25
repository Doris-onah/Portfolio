import React from "react";
import "./Skills.css";
import html from "..//images/html.jpeg";
import css from "..//images/css3.png";
import javascript from "..//images/javascriptt.jpeg";
import firebase from "..//images/firebase.png";
import vue from "..//images/vue.jpeg";
// import firebase from "..//images/firebase.svg";
import logo from "..//images/logo.svg";

export default function Skills() {
  return (
    <div className="skill">
      <div className="skill_content">
        <div>
          <img src={html} alt="html" width="100%" height="100%" />
        </div>

        <div>
          <img src={css} alt="css" width="100%" height="100%" />
        </div>
        <div>
          <img src={javascript} alt="js" width="100%" height="100%" />
        </div>
        <div>
          <img src={logo} alt="react" width="100%" height="100%" />
        </div>
        <div className="vue">
          <img src={vue} alt="vue" width="100%" height="100%" />
        </div>
        <div>
          <img src={firebase} alt="firebase" width="100%" height="100%" />
        </div>
      </div>
    </div>
  );
}
