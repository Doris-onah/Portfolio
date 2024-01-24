import React from "react";
import "./Home.css";
import TypeWriterEffect from "react-typewriter-effect";
import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
export default function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <div className="text">
          <h1>Hi there, I'm Doris</h1>
          <TypeWriterEffect
            textStyle={{
              color: "wheat",
              fontSize: "15px",
            }}
            startDelay={100}
            cursorColor="black"
            text="I am a frontend developer based in oxford,united kingdom. I love creating experience and building mobile-responsive and user friendly frontend web sites."
            typeSpeed={100}
          />{" "}
        </div>

        <div className="icons">
          <a
            href="https://www.linkedin.com/in/doris-ene-onah-0b1b1b1b9/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn">
              <AiFillLinkedin />
            </button>
          </a>
          <a
            href="https://github.com/Doris-onah"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn">
              <BsGithub />
            </button>
          </a>
          <a
            href="https://twitter.com/DorisOnah"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn">
              <AiFillTwitterCircle />
            </button>
          </a>
          <a
            href="mailto:onahdorisene@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn">
              <MdEmail />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
