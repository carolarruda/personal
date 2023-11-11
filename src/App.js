import "./index.css";
import Main from "@pages/Main";
import { Routes, Route } from "react-router-dom";
import AboutMe from "./pages/AboutMe";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
