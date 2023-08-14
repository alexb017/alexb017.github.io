import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./Home";
import "./App.css";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(
    () => localStorage.getItem("isDarkTheme") === "true"
  );

  useEffect(() => {
    localStorage.setItem("isDarkTheme", String(isDarkTheme));

    if (isDarkTheme) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkTheme]);

  function handleThemeClick() {
    setIsDarkTheme(!isDarkTheme);
  }
  return (
    <BrowserRouter>
      <main className="main">
        <button
          type="button"
          className="btn-dark-mode"
          onClick={handleThemeClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 256 256"
          >
            <path
              fill="currentColor"
              d="M236.37 139.4a12 12 0 0 0-12-3A84.07 84.07 0 0 1 119.6 31.59a12 12 0 0 0-15-15a108.86 108.86 0 0 0-54.91 38.48A108 108 0 0 0 136 228a107.09 107.09 0 0 0 64.93-21.69a108.86 108.86 0 0 0 38.44-54.94a12 12 0 0 0-3-11.97Zm-49.88 47.74A84 84 0 0 1 68.86 69.51a84.93 84.93 0 0 1 23.41-21.22Q92 52.13 92 56a108.12 108.12 0 0 0 108 108q3.87 0 7.71-.27a84.79 84.79 0 0 1-21.22 23.41Z"
            />
          </svg>
          Dark Mode
        </button>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;