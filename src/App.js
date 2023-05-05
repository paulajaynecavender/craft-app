// import { useState, useEffect } from "react";
import Header from "./Components/Header";
import Input from "./Components/Input";
import ProjectList from "./Components/ProjectList";
// import { useSelector } from "react-redux";
// import { selectProject } from "./Features/craftSlice";

function App() {
  // const [filteredProjects, setfilteredProjects] = useState([]);

  // selectors
  // const projects = useSelector(selectProject);

  // useEffect(() => {
  //   getLocalProjects();
  // }, []);

  // ////// FILTER ////////////////
  // useEffect(() => {
  //   const filterHandler = () => {
  //     switch (status) {
  //       case "completed":
  //         setfilteredProjects(
  //           projects.filter((project) => project.completed === true)
  //         );
  //         break;
  //       case "uncompleted":
  //         setfilteredProjects(
  //           projects.filter((project) => project.completed === false)
  //         );
  //         break;
  //       default:
  //         setfilteredProjects(projects);
  //         break;
  //     }
  //   };
  //   filterHandler();
  //   const saveLocalProjects = () => {
  //     if (projects.length > 0) {
  //       localStorage.setItem("projects", JSON.stringify(projects));
  //     }
  //   };
  //   saveLocalProjects();
  // }, [projects, status]);

  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <section>
        <Input />
      </section>
      <ProjectList />
    </div>
  );
}

export default App;
