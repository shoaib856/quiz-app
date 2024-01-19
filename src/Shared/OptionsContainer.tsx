import { ReactNode, RefObject, forwardRef } from "react";
import { motion } from "framer-motion";

const OptionsContainer = ({ children }: { children: ReactNode }) => {
  return (
    <motion.aside
      variants={{
        hidden: { opacity: 0, x: 20 },
        show: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.5 },
        },
      }}
      {...{ initial: "hidden", animate: "show" }}
      className={`max-w-[564px] w-full flex-col flex gap-6 max-sm:gap-3`}
    >
      {children}
    </motion.aside>
  );
};

export default OptionsContainer;

const List = forwardRef(({ children }: { children: ReactNode }, ref) => {
  return (
    <ul
      ref={ref as RefObject<HTMLUListElement>}
      className="flex flex-col gap-6 max-sm:gap-3"
    >
      {children}
    </ul>
  );
});

OptionsContainer.List = List;
