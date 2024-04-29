const darkMode = () => {
  const themeToggleBtns = document.querySelectorAll("#theme-toggle");
  const themeClass = document.body.classList;

  // State
  const theme = localStorage.getItem("theme");

  // On mount
  theme && document.body.classList.add(theme);

  // Handlers
  const handleThemeToggle = () => {
    document.body.classList.toggle("light-mode");
    localStorage.setItem("theme", themeClass);
  };

  // Events
  themeToggleBtns.forEach((btn) =>
    btn.addEventListener("click", handleThemeToggle),
  );
};

export default darkMode;
