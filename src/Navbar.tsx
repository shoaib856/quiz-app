import { useState } from "react";
import sun from "./assets/images/icon-sun-dark.svg";
import moon from "./assets/images/icon-moon-dark.svg";
import { motion } from "framer-motion";
import Category from "./Category";

const Navbar = ({ cat }: { cat?: string }) => {
  const [dark, setDark] = useState<boolean>(false);

  const handleLightMode = () => setDark(false);
  const handleDarkMode = () => setDark(true);
  const handleSwitch = () => setDark(!dark);

  return (
    <nav
      className="container mx-auto flex justify-end items-center data-[startQuiz]:justify-between"
      data-startquiz={cat}
    >
      {cat && (
        <div className="flex items-center gap-6">
          <Category {...{ cat }} />
        </div>
      )}
      <div className="flex items-center gap-4">
        <button onClick={handleLightMode}>
          <img src={sun} alt="sun-dark" />
        </button>
        <button
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
        <button onClick={handleDarkMode}>
          <img src={moon} alt="moon-dark" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
