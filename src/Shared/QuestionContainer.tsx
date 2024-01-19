import { ReactNode } from "react";
import { motion } from "framer-motion";
const QuestionContainer = ({ children }: { children: ReactNode }) => {
  return (
    <aside className="flex flex-col gap-7 max-sm:gap-3 max-w-[465px] w-full md:h-[452px]">
      {children}
    </aside>
  );
};

export default QuestionContainer;

const QuestionHeader = ({ text }: { text: string }) => {
  return (
    <motion.h2
      variants={{
        hidden: { opacity: 0, x: -20 },
        show: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.5 },
        },
      }}
      {...{ initial: "hidden", animate: "show" }}
      className="text-[20px] sm:text-heading-md font-rubik font-medium text-dark-navy dark:text-white"
    >
      {text}
    </motion.h2>
  );
};

QuestionContainer.Question = QuestionHeader;
