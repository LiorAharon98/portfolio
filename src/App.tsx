import Header from "./components/header/Header";
import Homepage from "./pages/homepage/Homepage";
import Skills from "./pages/skills/Skills";
import Projects from "./pages/projects/Projects";
import { HashRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <HashRouter basename="/">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
