import { ICONS } from "./utils/icons";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { categories } from "./utils/questions";
import Navbar from "./Navbar";
import Category from "./Category";

function Home() {
  const navigate = useNavigate();
  const animateVars = {
    initial: "hidden",
    animate: "show",
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto font-rubik flex items-center">
        <div className="flex items-start justify-between w-full">
          <div>
            <motion.h1
              variants={{
                hidden: { y: -20, opacity: 0 },
                show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
              }}
              {...animateVars}
              className="text-heading-lg leading-none text-dark-navy mb-12"
            >
              Welcome to the
              <strong className="block font-bold">Frontend Quiz!</strong>
            </motion.h1>
            <motion.small
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { duration: 0.5 } },
              }}
              {...animateVars}
              className="text-body font-rubik-italic leading-normal text-grey-navy"
            >
              Pick a subject to get started.
            </motion.small>
          </div>
          <motion.ul
            variants={{
              hidden: { opacity: 0, x: 20 },
              show: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.5 },
              },
            }}
            {...animateVars}
            className="flex flex-col gap-6 max-w-[564px] w-full"
          >
            {categories.map((cat) => (
              <motion.li
                key={cat}
                onClick={() => navigate(`/${cat}`)}
                whileHover={{
                  backgroundColor: ICONS.filter((ico) => ico[0] === cat)[0][1],
                }}
                className="cursor-pointer flex gap-8 items-center p-5 shadow-choice-shadow rounded-3xl bg-white [&>figure]:hover:border-purple"
              >
                <Category {...{ cat }} />
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </>
  );
}

export default Home;
