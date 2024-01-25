import React from "react";
import "./Project.css";
import All_project from "../Assets/All_project";
// import { useContext } from "react";
// import ProjectContext from "../ProjectContext/ProjectContext";

export default function Project() {
  // const { All_project } = useContext(ProjectContext);
  // console.log(All_project);

  return (
    <div className="project">
      <div className="box">
        {All_project.map((p) => (
          <div className="project-card">
            <div className="project_box">
              {" "}
              <h2 className="project_name">{p.project_name}</h2>
              <div className="project_img">
                <img src="" alt="img" />
              </div>
              <br />
              <div className="project_aim">{p.aim}</div>
              <br />
              <span className="project_links">
                <div className="project_live_box">
                  {" "}
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project_live"
                  >
                    Live
                  </a>
                </div>
                <div className="project_live_box">
                  {" "}
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project_live"
                  >
                    github
                  </a>
                </div>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
