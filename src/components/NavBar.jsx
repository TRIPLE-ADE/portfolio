// import { navLinks } from "../constants";
import { logo, darkLogo, sun, moon1 } from "../assets";
import PropTypes from "prop-types";

function NavBar({ handleClick, darkMode }) {
  return (
    <nav className={`flex items-center`}>
      <div>
        <img src={darkMode ? logo : darkLogo} alt="Triple Logo" />
      </div>
      <div className="flex ml-auto items-center gap-7">
        {/* <ul className='flex gap-4 text-deep-blue  dark:text-gray font-quicksand font-bold'>
                {navLinks.map(navLink => (<li key={navLink.id}><a href={navLink.link} >{navLink.title}</a></li>))}
            </ul> */}
        <input
          type="checkbox"
          name="mode-switch"
          id="mode-switch"
          className="w-0 h-0"
        />
        <label
          htmlFor="mode-switch"
          className="bg-deep-blue dark:bg-gray w-10 h-5 block relative shadow-inner rounded-xl dark:before:bg-deep-blue label"
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
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  handleClick: PropTypes.func,
  darkMode: PropTypes.bool,
};

export default NavBar;
