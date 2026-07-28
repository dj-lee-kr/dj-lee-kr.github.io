(() => {
  const storedTheme = localStorage.getItem("theme");
  const initialTheme = storedTheme === "dark" ? "dark" : "light";

  localStorage.setItem("theme", initialTheme);

  if (typeof determineThemeSetting === "function") {
    determineThemeSetting = () => (localStorage.getItem("theme") === "dark" ? "dark" : "light");
  }

  if (typeof toggleThemeSetting === "function" && typeof setThemeSetting === "function") {
    toggleThemeSetting = () => {
      const nextTheme = determineThemeSetting() === "dark" ? "light" : "dark";
      setThemeSetting(nextTheme);
    };

    setThemeSetting(initialTheme);
  }
})();
