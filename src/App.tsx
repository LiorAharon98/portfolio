import Header from "./components/header/Header";
import Homepage from "./pages/homepage/Homepage";
import Skills from "./pages/skills/Skills";
import Projects from "./pages/projects/Projects";
import Experience from "./pages/experience/Experience";
import About from "./pages/about/About";
import { HashRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <HashRouter basename="/">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/experience" element={<Experience />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
