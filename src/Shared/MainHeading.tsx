import { motion } from "framer-motion";

const MainHeading = ({
  lightH,
  mediumH,
}: {
  lightH: string;
  mediumH: string;
}) => {
  return (
    <motion.h1
      variants={{
        hidden: { y: -20, opacity: 0 },
        show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
      }}
      {...{ initial: "hidden", animate: "show" }}
      className="text-[40px] sm:text-heading-lg font-light leading-none text-dark-navy dark:text-white mb-12"
    >
      {lightH}
      <strong className="block font-medium">{mediumH}</strong>
    </motion.h1>
  );
};

export default MainHeading;
