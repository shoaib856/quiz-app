import { useNavigate } from "react-router-dom";

const SubmitButton = ({
  isSubmitted,
  handleNextQuestion,
  handleSubmit,
  endOfQuiz,
}: {
  isSubmitted: boolean;
  handleNextQuestion: () => void;
  handleSubmit: () => void;
  endOfQuiz: () => boolean;
}) => {
  const navigate = useNavigate();
  const onClick = () =>
    isSubmitted
      ? endOfQuiz()
        ? navigate("/")
        : handleNextQuestion()
      : handleSubmit();

  return (
    <button
      type="button"
      {...{ onClick }}
      className={`bg-gradient-to-r hover:from-white/50 hover:to-white/50 bg-purple h-14 sm:h-[92px] font-rubik text-lg sm:text-heading-sm font-medium text-white rounded-xl sm:rounded-3xl leading-none`}
    >
      {isSubmitted
        ? endOfQuiz()
          ? "Play Again"
          : "Next Question"
        : "Submit Answer"}
    </button>
  );
};

export default SubmitButton;
