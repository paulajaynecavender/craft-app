import Header from "./Components/Header";
import Input from "./Components/Input";
import ProjectList from "./Components/ProjectList";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { selectProject, selectFilter } from "./Features/craftSlice";

function App() {
  const [filteredState, setFilteredState] = useState([]);
  const projects = useSelector(selectProject);
  const filterStatus = useSelector(selectFilter);

  //// FILTER ////////////////
  useEffect(() => {
    const filterHandler = () => {
      switch (filterStatus) {
        case "completed":
          setFilteredState(
            projects.filter((project) => project.completed === true)
          );
          break;
        case "uncompleted":
          setFilteredState(
            projects.filter((project) => project.completed === false)
          );
          break;
        default:
          setFilteredState(projects);
          break;
      }
    };
    filterHandler();
  }, [projects, filterStatus]);

  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <section>
        <Input />
      </section>
      <ProjectList filteredState={filteredState} />
    </div>
  );
}

export default App;
