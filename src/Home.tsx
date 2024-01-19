import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { categories } from "./utils/questions";
import Navbar from "./Shared/Navbar/Navbar";
import Category from "./Shared/Category";
import QuestionContainer from "./Shared/QuestionContainer";
import MainContainer from "./Shared/MainContainer";
import MainHeading from "./Shared/MainHeading";
import SmallHeading from "./Shared/SmallHeading";
import OptionsContainer from "./Shared/OptionsContainer";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <MainContainer>
        <QuestionContainer>
          <MainHeading
            {...{ lightH: "Welcome to the", mediumH: "Frontend Quiz!" }}
          />
          <SmallHeading text={`Pick a subject to get started.`} />
        </QuestionContainer>
        <OptionsContainer>
          <ul className="flex flex-col gap-6">
            {categories.map((cat) => (
              <motion.li
                key={cat}
                onClick={() => navigate(`/${cat}`)}
                className="cursor-pointer flex gap-8 items-center p-5 shadow-choice-shadow rounded-3xl bg-white dark:bg-navy [&>figure]:hover:border-purple"
              >
                <Category {...{ cat }} />
              </motion.li>
            ))}
          </ul>
        </OptionsContainer>
      </MainContainer>
    </>
  );
}

export default Home;
