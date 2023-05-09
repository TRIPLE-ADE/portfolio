import { useState } from "react";
import { NavBar, Hero, About, Project, Contact } from "./components";
import { section } from "./style";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const handleClick = () => {
    setDarkMode((prev) => !prev);
  };
  return (
    <div className={`${darkMode ? "dark" : ""}`} id="home">
      <div className="dark:bg-deep-blue bg-gray-100  transition-all duration-1000 text-gray font-poppins">
        <header className={`${section.padding}`}>
          <NavBar handleClick={handleClick} darkMode={darkMode} />
        </header>
        <main className={`${section.padding}`}>
          <Hero />
          <About />
          <Project />
          <Contact />
        </main>
        <footer className={`${section.padding}`}>
          
        </footer>
      </div>
    </div>
  );
}

export default App;
