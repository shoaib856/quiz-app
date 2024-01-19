import sunDark from "../../../assets/images/icon-sun-dark.svg";
import sunLight from "../../../assets/images/icon-sun-light.svg";
import moonDark from "../../../assets/images/icon-moon-dark.svg";
import moonLight from "../../../assets/images/icon-moon-light.svg";
import { motion } from "framer-motion";
import useTheme from "../../../hooks/ThemeHook";
import ThemeIcon from "./ThemeIcon";

const ThemeSwitcher = () => {
  const { dark, handleDarkMode, handleLightMode, handleSwitch } = useTheme();

  return (
    <div className="flex items-center gap-4">
      <ThemeIcon
        {...{
          onClick: handleLightMode,
          darkIcon: sunDark,
          LightIcon: sunLight,
        }}
      />

      <button
        type="button"
        title="switch"
        onClick={handleSwitch}
        className={`bg-purple p-1 rounded-full w-12 h-7 flex items-center justify-start data-[dark="true"]:justify-end`}
        data-dark={dark}
      >
        <motion.div
          layout
          transition={{
            type: "spring",
            stiffness: 700,
            damping: 30,
          }}
          className={`w-5 h-5 rounded-full bg-white`}
        ></motion.div>
      </button>

      <ThemeIcon
        {...{
          onClick: handleDarkMode,
          darkIcon: moonDark,
          LightIcon: moonLight,
        }}
      />
    </div>
  );
};

export default ThemeSwitcher;
