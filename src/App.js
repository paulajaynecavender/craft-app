import { useState, useEffect, useCallback } from "react";
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
      if (projects.length > 0) {
        localStorage.setItem("projects", JSON.stringify(projects));
      }
    };
    saveLocalProjects();
  }, [projects, status]);

  const getLocalProjects = () => {
    const dataFromDisk = JSON.parse(localStorage.getItem("projects"));

    setProjects(dataFromDisk ? dataFromDisk : []);
  };

  const updateCount = useCallback(
    (countId, newCount) => {
      console.log("countId:", countId, "newCount:", newCount);
      setProjects(
        projects.map((item) => {
          if (item.id === countId) {
            return {
              ...item,
              count: newCount,
            };
          }
          return item;
        })
      );
    },
    [projects]
  );

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
        updateCount={updateCount}
      />
    </div>
  );
}

export default App;
