// import { Greet } from "./components/Greet/Greet";
// import { Table } from "./components/Table/Table";
// import { Skills } from "./components/Skills/Skills";
import { Counter } from "./components/Counter/Counter";

function App() {
  const skills = ["HTML", "CSS", "JS"];
  return (
    <div className="App">
      {/* <Greet />
      <Greet name="sriram" /> */}
      {/* <Table /> */}
      {/* <Skills skills={skills} /> */}
      <Counter />
    </div>
  );
}

export default App;
