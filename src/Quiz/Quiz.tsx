import { useParams } from "react-router-dom";
import { categoryQuestions } from "../utils/questions";
import Navbar from "../Shared/Navbar/Navbar";
import { useRef } from "react";
import QuizOption from "./Components/QuizOption";
import NotSelectedAnswer from "./Components/NotSelectedAnswer";
import SubmitButton from "./Components/SubmitButton";
import ProgressBar from "./Components/ProgressBar";
import EndOfQuiz from "./Components/EndOfQuiz";
import QuestionContainer from "../Shared/QuestionContainer";
import OptionsContainer from "../Shared/OptionsContainer";
import MainContainer from "../Shared/MainContainer";
import MainHeading from "../Shared/MainHeading";
import SmallHeading from "../Shared/SmallHeading";
import useSubmit from "../hooks/SubmitAnswerHook";

const Quiz = () => {
  const { cat } = useParams();
  const quizzes = categoryQuestions(cat);
  
  const listRef = useRef<HTMLUListElement>(null);
  const {
    correctAnsNum,
    endOfQuiz,
    handleNextQuestion,
    handleSubmit,
    isNotSelectedAns,
    handleSelectOption,
    selectedOp,
    questionsLen,
    isSubmitted,
    selectedQ,
  } = useSubmit(listRef, quizzes);

  return (
    <>
      <Navbar {...{ cat }} />
      <MainContainer>
        <QuestionContainer>
          {endOfQuiz() && isSubmitted ? (
            <MainHeading
              {...{ lightH: "Quiz completed", mediumH: "You scored..." }}
            />
          ) : (
            <>
              <SmallHeading
                text={`Question ${selectedQ + 1} of ${quizzes.length}`}
              />
              <QuestionContainer.Question
                text={quizzes[selectedQ].question}
              />
              <ProgressBar {...{ questionsLen, selectedQ }} />
            </>
          )}
        </QuestionContainer>
        <OptionsContainer>
          {endOfQuiz() && isSubmitted ? (
            <EndOfQuiz {...{ cat, correctAnsNum, questionsLen }} />
          ) : (
            <OptionsContainer.List ref={listRef}>
              {quizzes[selectedQ].options.map((option, i) => (
                <QuizOption
                  key={i}
                  {...{
                    option,
                    i,
                    handleSelectOption,
                    selectedOp,
                    isSubmitted,
                  }}
                />
              ))}
            </OptionsContainer.List>
          )}
          <SubmitButton
            {...{ isSubmitted, handleNextQuestion, handleSubmit, endOfQuiz }}
          />
          {isNotSelectedAns && <NotSelectedAnswer />}
        </OptionsContainer>
      </MainContainer>
    </>
  );
};

export default Quiz;
