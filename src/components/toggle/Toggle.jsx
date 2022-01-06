import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../context";
import "./toggle.css";
import Sun from "../../img/sun.svg";
import Moon from "../../img/moon.png";

const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });

    document.querySelector(".toggle-button").classList.toggle("active");
  };
  return (
    <div className="toggle">
      <img src={Sun} alt="" className="toggle-icon" />
      <img src={Moon} alt="" className="toggle-icon" />
      <div className="toggle-button" onClick={handleClick}></div>
    </div>
  );
};

export default Toggle;
