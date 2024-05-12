import { useState } from "react";
import { NavLinks, FootersLink } from "../constants";
import { logo, darkLogo, sun, moon1 } from "../assets";
import PropTypes from "prop-types";
import { FaBars, FaTimes } from "react-icons/fa";
import { section } from "../style";
import { Link } from "react-router-dom";

function NavBar({ handleClick, darkMode }) {
  // toggle state handler
  const [toggle, setToggle] = useState(false);

  //function for changing toggle state
  const handleModal = () => {
    setToggle((prev) => !prev);
  };
  return (
    <nav
      className={`flex items-center ${section.padding} ${
        toggle ? "fixed left-0 right-0 z-50 bg-[#ffffff] dark:bg-deep-blue" : ""
      }`}
    >
      {/* logo image */}
      <div>
        <img src={darkMode ? logo : darkLogo} alt="Triple Logo" />
      </div>
      <div className="flex items-center gap-3 ml-auto sm:gap-7">
        {/* desktop navbar */}
        <ul className="flex-col hidden gap-4 font-bold sm:flex text-deep-blue dark:text-gray font-quicksand sm:flex-row">
          {NavLinks.map((navLink) => (
            <li key={navLink.id}>
              <a href={`/${navLink.link}`}>{navLink.title}</a>
            </li>
          ))}
        </ul>
        {/* darkMode Toggle */}
        <label
          htmlFor="mode-switch"
          className="relative block w-10 h-5 shadow-inner bg-deep-blue dark:bg-gray rounded-xl dark:before:bg-deep-blue label"
          onClick={handleClick}
        >
          <img
            src={darkMode ? moon1 : sun}
            alt=""
            className={`absolute ${
              darkMode ? "right-1" : "left-1"
            } w-3 top-0 bottom-0 m-auto`}
          />
        </label>
        <input
          type="checkbox"
          name="mode-switch"
          id="mode-switch"
          className="w-0 h-0 hidden"
        />
        {/* rendering Bar Icon with toggle condition */}
        {!toggle && (
          <FaBars
            className="text-2xl cursor-pointer sm:hidden text-deep-blue dark:text-gray "
            onClick={handleModal}
          />
        )}
        {/* rendering Times Icon with toggle condition */}
        {toggle && (
          <FaTimes
            className="text-2xl cursor-pointer sm:hidden text-deep-blue dark:text-gray "
            onClick={handleModal}
          />
        )}
      </div>
      {/* mobile navbar with toggle condition*/}
      {toggle && (
        <div className="fixed left-0 z-20 w-full min-h-full text-2xl font-bold text-center text-gray-100 dark:text-deep-blue font-quicksand top-20 sidebar bg-deep-blue dark:bg-gray">
          <ul>
            {NavLinks.map((navLink) => (
              <li key={navLink.id} className="my-10">
                <a href={navLink.link} onClick={handleModal}>
                  {navLink.title}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex justify-center gap-10 mt-20">
            {FootersLink.map((FooterLink) => {
              return (
                <a
                  key={FooterLink.id}
                  href={FooterLink.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xl sm:text-2xl"
                >
                  {FooterLink.icon}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}

NavBar.propTypes = {
  handleClick: PropTypes.func,
  darkMode: PropTypes.bool,
};

export default NavBar;
