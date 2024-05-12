import { NavBar, Footer, Loader } from "../components";
import { section } from "../style";
import { useState, useEffect } from "react";

const MainLayout = ({ children }) => {
  //darkMode state handler
  const [darkMode, setDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   // initial loading delay
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1000); // 2-second delay (adjust as needed)
  // }, []);

  //function for changing darkMode state
  const handleClick = () => {
    setDarkMode((prev) => !prev);
  };
  return (
    <div
      className={`${darkMode ? "dark" : ""} relative overflow-hidden`}
      id="home"
    >
      {/* {isLoading ? (
        <Loader />
      ) : ( */}
      <div className="transition-all duration-1000 dark:bg-deep-blue text-gray font-poppins">
        <header>
          <NavBar handleClick={handleClick} darkMode={darkMode} />
        </header>
        <main className={`${section.padding}`}>{children}</main>
        <footer>
          <hr />
          <Footer />
        </footer>
      </div>
      {/* )} */}
    </div>
  );
};

export default MainLayout;
