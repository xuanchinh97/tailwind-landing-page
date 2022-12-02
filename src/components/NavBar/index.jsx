import { useState } from "react";
import { BsSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { HiOutlineMenu } from "react-icons/hi";
import useDarkMode from "../../hooks/useDarkMode";

function NavBar({ isMobile }) {
  const [openMenu, setOpenMenu] = useState(false);
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const handleToggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav className="flex items-center">
      <div className="text-20 font-bold mr-2">NerdCard</div>
      {isDarkMode ? (
        <BsSunFill
          size={"24px"}
          color="#e9c46a"
          className="cursor-pointer"
          onClick={toggleDarkMode}
        />
      ) : (
        <FaMoon
          size={"24px"}
          color="#e9c46a"
          className="cursor-pointer"
          onClick={toggleDarkMode}
        />
      )}
      <ul className="md:flex md:gap-10 ml-auto text-16 font-semibold">
        {openMenu && isMobile ? (
          <MdOutlineClose
            size={"24px"}
            className="cursor-pointer"
            onClick={handleToggleMenu}
          />
        ) : !openMenu && isMobile ? (
          <HiOutlineMenu
            size={"24px"}
            className="cursor-pointer"
            onClick={handleToggleMenu}
          />
        ) : (
          <>
            <li className="btn-hover">Features</li>
            <li className="btn-hover">Menu </li>
            <li className="btn-hover">Our Story</li>
            <li className="btn-hover ml-28">Contact</li>
          </>
        )}
        {openMenu && (
          <div className="w-full text-20 py-5 px-20 absolute right-8 bg-white text-center z-10 text-black">
            <li className="btn-hover">Features</li>
            <li className="btn-hover">Menu </li>
            <li className="btn-hover">Our Story</li>
            <li className="btn-hover">Contact</li>
          </div>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
