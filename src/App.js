import { useState, useEffect } from "react";
import Header from "./Components/Header";
import Input from "./Components/Input";
// import Project from "./Components/Project";
import ProjectList from "./Components/ProjectList";

function App() {
  const [inputText, setInputText] = useState("");
  const [descriptionText, setDescriptionText] = useState("");
  const [projectType, setProjectType] = useState("select type");
  const [projects, setProjects] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredProjects, setfilteredProjects] = useState([]);

  useEffect(() => {
    getLocalProjects();
  }, []);

  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case "completed":
          setfilteredProjects(
            projects.filter((project) => project.completed === true)
          );
          break;
        case "uncompleted":
          setfilteredProjects(
            projects.filter((project) => project.completed === false)
          );
          break;
        default:
          setfilteredProjects(projects);
          break;
      }
    };
    filterHandler();
    const saveLocalProjects = () => {
      localStorage.setItem("projects", JSON.stringify(projects));
    };
    saveLocalProjects();
  }, [projects, status]);

  const getLocalProjects = () => {
    if (localStorage.getItem("projects") === null) {
      localStorage.setItem("projects", JSON.stringify([]));
    } else {
      let projectLocal = JSON.parse(localStorage.getItem("projects"));
      if (projectLocal.length === 0) {
        return null;
      }
      setProjects(projectLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <section>
        <Input
          inputText={inputText}
          setInputText={setInputText}
          descriptionText={descriptionText}
          setDescriptionText={setDescriptionText}
          projectType={projectType}
          setProjectType={setProjectType}
          projects={projects}
          setProjects={setProjects}
          setStatus={setStatus}
        />
      </section>
      <ProjectList
        projects={projects}
        setProjects={setProjects}
        filteredProjects={filteredProjects}
      />
    </div>
  );
}

export default App;
