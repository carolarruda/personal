import "./index.css";
import Main from "@pages/Main";
import { Routes, Route } from "react-router-dom";
import AboutMe from "@pages/AboutMe";
import Carls from "@pages/Carls";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/carls" element={<Carls/>}/>
      </Routes>
    </div>
  );
}

export default App;
