(function () {
  try {
    var stored = localStorage.getItem("atlaps-theme");
    var prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
    var theme = stored === "light" || stored === "dark" ? stored : prefers ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
  } catch {}
})();
