import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import "./DarkToggle.css";

const DarkToggle = () => {
  const [dark, setDark] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className={`toggle-switch ${dark ? "dark-mode" : ""}`}
      aria-label="Toggle Dark Mode"
    >
      <div className="toggle-icon">
        {dark ? <FaMoon size={14} /> : <FaSun size={14} />}
      </div>
    </button>
  );
};

export default DarkToggle;
