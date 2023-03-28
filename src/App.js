import { useState } from "react";
import Header from "./Components/Header";
import Input from "./Components/Input";
// import Project from "./Components/Project";
import ProjectList from "./Components/ProjectList";

function App() {
  const [inputText, setInputText] = useState("");
  const [descriptionText, setDescriptionText] = useState("");
  const [projectType, setProjectType] = useState("select type");
  const [projects, setProjects] = useState([]);

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
        />
      </section>
      <ProjectList projects={projects} setProjects={setProjects} />
    </div>
  );
}

export default App;
