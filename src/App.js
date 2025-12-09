import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  const [activePage, setActivePage] = useState("about");

  return (
    <div className="App">
      <header className="site-header">
        <div className="logo">Portfolio</div>
        <div className="nav-buttons">
          <button
            className={`nav-button ${activePage === "about" ? "active" : ""}`}
            onClick={() => setActivePage("about")}
          >
            About Me
          </button>
          <button
            className={`nav-button ${
              activePage === "projects" ? "active" : ""
            }`}
            onClick={() => setActivePage("projects")}
          >
            Projects
          </button>
        </div>
      </header>

      <main>
        {activePage === "about" && <About />}
        {activePage === "projects" && <Projects />}
      </main>

      <footer className="site-footer">
        <p>Richie Eleazar Isjwara</p>
      </footer>
    </div>
  );
}

export default App;
