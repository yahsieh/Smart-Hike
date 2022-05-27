import "../css/DarkMode.css";
import { ChangeEventHandler } from "react";
import React, {useState, useEffect} from "react";

//set dark
const setDark = () => {
  localStorage.setItem("theme", "dark");
  document.documentElement.setAttribute("data-theme", "dark");
};

//set light
const setLight = () => {
  localStorage.setItem("theme", "light");
  document.documentElement.setAttribute("data-theme", "light");
};

//maintain persistence
let storedTheme = localStorage.getItem("theme");

function prefersDark() {
  return storedTheme == "dark";
}

function setTheme(){
  if(storedTheme == "dark"){
    setDark()
  }
  else{
    setLight()
  }
}

// 5
const toggleTheme: ChangeEventHandler<HTMLInputElement> = (e) => {
  if (e.target.checked) {
    setDark();
  } else {
    setLight();
  }
};

const DarkMode = () => {

  return (
    <div className="toggle-theme-wrapper">
      <span>☀️</span>
      <label className="toggle-theme" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          onChange={toggleTheme}
        />
        <div className="slider round"></div>
      </label>
      <span>🌒</span>
    </div>
  );
};

export default DarkMode;