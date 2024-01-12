'use client';

import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "next-themes";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
      setTheme(theme === "dark" ? "dark" : "dark");
    };


  return (
    <div className="theme">
      <button onClick={toggleTheme}>
        {<FaMoon />}
      </button>
    </div>
  );
};
 export default ThemeSwitch;