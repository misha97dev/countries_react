import "./header.css";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import moonIco from "./../../assets/icons/moon.svg";
import sunIco from "./../../assets/icons/sun.svg";
const Header = () => {
  const [darkTheme, setDarkTheme] = useState("false");
  const handleTheme = () => {
    setDarkTheme(!darkTheme);

    let mainContainer = document.querySelector(".main-container");
    mainContainer.classList.toggle("dark");
  };
  return (
    <>
      <header className="header">
        <h1>Where in the world?</h1>
        {darkTheme ? (
          <div className="theme-checker hidden" onClick={handleTheme}>
            <img src={moonIco} alt="" />
            <p>Dark Theme</p>
          </div>
        ) : (
          <div className="theme-checker" onClick={handleTheme}>
            <img src={sunIco} alt="" />
            <p>Light Theme</p>
          </div>
        )}
      </header>
      <Outlet />
    </>
  );
};

export default Header;
