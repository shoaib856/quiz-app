import { MouseEventHandler, RefObject, useState } from "react";
import iconCorrect from "../assets/images/icon-correct.svg";
import iconIncorrect from "../assets/images/icon-incorrect.svg";

const useSubmit = (
  listRef: RefObject<HTMLUListElement>,
  questions: { answer: string; options: string[] }[]
) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedOp, setSelectedOp] = useState<string | null>(null);
  const [selectedQ, setSelectedQ] = useState(0);
  const [isNotSelectedAns, setIsNotSelectedAns] = useState(false);
  const [correctAnsNum, setCorrectAnsNum] = useState(0);

  const handleSelectOption: MouseEventHandler<HTMLLIElement> | undefined = (
    e
  ) => {
    const i = e.currentTarget.getAttribute("data-index");
    if (!isSubmitted) setSelectedOp(i);
  };

  const endOfQuiz = () => selectedQ + 1 === questions.length;

  const handleSubmit = () => {
    try {
      const rightOptionIndex = questions[selectedQ].options.indexOf(
        questions[selectedQ].answer
      );
      const rightAnswerEle =
        listRef?.current?.querySelectorAll("li")[rightOptionIndex];

      const selectedEle = listRef?.current?.querySelector(
        "[aria-selected='true']"
      ) as HTMLLIElement;

      const answer =
        rightAnswerEle?.getAttribute("data-index") ===
        selectedEle.getAttribute("data-index");

      selectedEle?.classList.add(
        "[&>span:first-of-type]:data-[answer='true']:bg-green",
        "[&>span:first-of-type]:data-[answer='true']:text-white",
        "data-[answer='true']:border-green",
        "[&>span:first-of-type]:data-[answer='false']:bg-red",
        "[&>span:first-of-type]:data-[answer='false']:text-white",
        "data-[answer='false']:border-red"
      );

      selectedEle?.setAttribute("data-answer", `${answer}`);

      const img = document.createElement("img");
      const correctChoiceIco = document.createElement("img");

      correctChoiceIco.src = iconCorrect;
      img.src = answer ? iconCorrect : iconIncorrect;
      correctChoiceIco.className = "ml-auto";
      img.className = "ml-auto";

      if (answer) {
        selectedEle?.append(img);
        setCorrectAnsNum((prev) => ++prev);
      } else {
        rightAnswerEle?.append(correctChoiceIco);
        selectedEle?.append(img);
      }
      setIsSubmitted(true);
      setIsNotSelectedAns(false);
    } catch (error) {
      setIsNotSelectedAns(true);
    }
  };
  const handleNextQuestion = () => {
    const selectedEle = listRef?.current?.querySelector(
      "[aria-selected='true']"
    ) as HTMLLIElement;
    const imgs = listRef?.current?.querySelectorAll("img");
    imgs?.forEach((img) => {
      img.remove();
    });
    setSelectedOp(null);
    setSelectedQ((prev) => ++prev);
    setIsSubmitted(false);
    selectedEle?.classList.remove(
      "[&>span:first-of-type]:data-[answer='true']:bg-green",
      "[&>span:first-of-type]:data-[answer='true']:text-white",
      "data-[answer='true']:border-green",
      "[&>span:first-of-type]:data-[answer='false']:bg-red",
      "[&>span:first-of-type]:data-[answer='false']:text-white",
      "data-[answer='false']:border-red"
    );
  };

  return {
    correctAnsNum,
    isNotSelectedAns,
    handleNextQuestion,
    handleSubmit,
    handleSelectOption,
    endOfQuiz,
    selectedOp,
    questionsLen: questions.length,
    isSubmitted,
    selectedQ,
  };
};

export default useSubmit;
