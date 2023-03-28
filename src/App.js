import { useState } from "react";
import Header from "./Components/Header";
import Input from "./Components/Input";

function App() {
  const [inputText, setInputText] = useState("");
  const [descriptionText, setDescriptionText] = useState("");
  const [projectType, setProjectType] = useState("select type");
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
        />
      </section>
    </div>
  );
}

export default App;
