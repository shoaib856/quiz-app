import { motion } from "framer-motion";
const SmallHeading = ({ text }: { text: string }) => {
  return (
    <motion.small
      variants={{
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 0.5 } },
      }}
      {...{ initial: "hidden", animate: "show" }}
      className="text-body-sm font-rubik-italic leading-normal text-grey-navy dark:text-light-bluish"
    >
      {text}
    </motion.small>
  );
};

export default SmallHeading;
