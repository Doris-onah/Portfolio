import { createContext } from "react";
import All_project from "../Assets/All_project";

const ProjectContext = createContext();

function ProjectContextProvider() {
  const value = { All_project };

  return <ProjectContext.Provider value={value}></ProjectContext.Provider>;
}
export default ProjectContextProvider;
