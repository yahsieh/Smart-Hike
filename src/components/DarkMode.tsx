import "../css/DarkMode.css";
import { ChangeEventHandler } from "react";
import React, { useState, useEffect } from "react";

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

//maintain theme persistence
const storedTheme = localStorage.getItem("theme");

const prefersDark =
  matchMedia && matchMedia("(prefers-color-scheme: dark)").matches;

const defaultDark = storedTheme === "dark" || (storedTheme === null && prefersDark);

if (defaultDark) {
  setDark();
}

const toggleTheme: ChangeEventHandler<HTMLInputElement> = (e) => {
  if (e.target.checked) {
    setDark();
  } else {
    setLight();
  }
};

const DarkMode = () => {
  const getTheme = () => {
    const theme = localStorage.getItem('theme')
    const element = document.getElementById('checkbox') as HTMLInputElement
    if (element != null) {
      if (theme === 'dark') {
        element.checked = true
        setDark()
      } else {
        element.checked = false
        setLight()
      }
    }
  }
  // Update the value of the checkbox when the component is mounted
  useEffect(() => {
    getTheme()
  }, [])

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