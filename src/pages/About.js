import React from "react";
import pic from "../images/alx-profile.jpg";
import TypeWriterEffect from 'react-typewriter-effect';

import "./About.css"
export default function About() {
    return (
        <div className="about">
            <div className="about-content">
            <div>
<h1>About me</h1>
<div className="about-con">
<div className="about-me">
<TypeWriterEffect
            textStyle={{
        fontsize: '25px',
        color: "white",
    textAlign: "center",
        }}
            startDelay={100}
            cursorColor="black"
            multiText={[
                'fashion designer',
                'hair stylist',
                'frontend developer'
               
              ]}
              multiTextDelay={1000}
            text="This is a single text"
            typeSpeed={100}

          />
<p>Front-end developer with a desire to learn and grow in a collaborative
 team environment.My goal is to become a full-stack developer and to work
 on projects that will help people.Primarily focused on web development 
 and also have practical knowledge of other technologies, practices, and principles. 
 Currently, I am mainly focused on working with HTML & CSS, Javascript, ReactJS and Vue.js..</p>
           </div>
           </div>
            </div>
            <div className="pic">
                <img src={pic} alt="alx" width="100%" height="100%"/>
            </div>
            </div>
        </div>
    );
    }
