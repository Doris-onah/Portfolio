import React from "react";
import Proj from "./Proj";
import "./Project.css";


export default function Project() {

    return (
        <div className="project">
            <div className="project-content">
                <h1>Projects</h1>
        <div className="box">
            <div className="project-card">
            <Proj img=""  />
            </div>
            <div className="project-card">
      <Proj name="Cahal" />
        </div>
        <div className="project-card">
      <Proj name="Edite" />
        </div>
        </div>
        </div>
        </div>


        
    );
    }
