import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    const storeTheme = window.localStorage.getItem("theme");
    if (storeTheme) {
      setTheme(JSON.parse(storeTheme));
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    window.localStorage.setItem("theme", JSON.stringify(newTheme));
  };

  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "20px",
      }}
    >
      <h1>Current Theme: {theme}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ThemeToggle;
