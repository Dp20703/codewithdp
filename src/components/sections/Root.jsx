import { useEffect } from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import App from "../../App.jsx";

const Root = () => {
  const { theme } = useTheme();

  useEffect(() => {
    const html = document.documentElement;

    html.classList.remove("dark");

    if (theme === "dark") {
      html.classList.add("dark");
    }
  }, [theme]);

  return <App />;
};

export default Root;
