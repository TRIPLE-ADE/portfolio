import { useState } from "react";
import { NavBar, Hero, About, Project, Contact, Footer } from "./components";
import { section } from "./style";

function App() {
  //darkMode state handler
  const [darkMode, setDarkMode] = useState(true);

  //function for changing darkMode state
  const handleClick = () => {
    setDarkMode((prev) => !prev);
  };
  return (
    <div className={`${darkMode ? "dark" : ""} relative`} id="home">
      <div className="transition-all duration-1000 dark:bg-deep-blue text-gray font-poppins">
        <header>
          <NavBar handleClick={handleClick} darkMode={darkMode} />
        </header>
        <main className={`${section.padding}`}>
          <Hero />
          <About />
          <Project />
          <Contact />
        </main>
        <footer>
          <hr />
          <Footer/>
        </footer>
      </div>
    </div>
  );
}

export default App;
