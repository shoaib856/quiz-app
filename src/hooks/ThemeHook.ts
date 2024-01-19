import { useContext, useEffect } from "react";
import {
  DarkThemeContext,
  DarkThemeContextProps,
} from "../Context/ThemeContext";

const useTheme = () => {
  const { dark, setDark } = useContext<DarkThemeContextProps>(DarkThemeContext);

  const handleLightMode = () => setDark(false);
  const handleDarkMode = () => setDark(true);
  const handleSwitch = () => setDark(!dark);

  useEffect(() => {
    if (dark) document.body.classList.add("dark");
    else document.body.classList.remove("dark");
  }, [dark]);

  return { dark, handleDarkMode, handleLightMode, handleSwitch };
};

export default useTheme;
