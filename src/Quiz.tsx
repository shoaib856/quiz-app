import { useParams } from "react-router-dom";
import { categoryQuestions } from "./utils/questions";
import Navbar from "./Navbar";
import { MouseEventHandler, useRef, useState } from "react";
import iconCorrect from "./assets/images/icon-correct.svg";
import iconIncorrect from "./assets/images/icon-incorrect.svg";

const Quiz = () => {
  const { cat } = useParams();
  const questions = categoryQuestions(cat);
  const listRef = useRef<HTMLUListElement>(null);
  const [selectedQ, setSelectedQ] = useState(0);
  const [nextQ, setNextQ] = useState(false);
  const [selectedOp, setSelectedOp] = useState<string | null>(null);
  const onClick: MouseEventHandler<HTMLLIElement> | undefined = (e) => {
    const i = e.currentTarget.getAttribute("data-index");
    setSelectedOp(i);
  };

  const handleSubmit = () => {
    const rightOptionIndex = questions[selectedQ].correctOption;
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
    } else {
      rightAnswerEle?.append(correctChoiceIco);
      selectedEle?.append(img);
    }
    setNextQ(true);
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
    setNextQ(false);
    selectedEle?.classList.remove(
      "[&>span:first-of-type]:data-[answer='true']:bg-green",
      "[&>span:first-of-type]:data-[answer='true']:text-white",
      "data-[answer='true']:border-green",
      "[&>span:first-of-type]:data-[answer='false']:bg-red",
      "[&>span:first-of-type]:data-[answer='false']:text-white",
      "data-[answer='false']:border-red"
    );
  };

  return (
    <>
      <Navbar {...{ cat }} />
      <section className="flex justify-between gap-16 container mx-auto">
        <section className="flex flex-col gap-7 max-w-md h-[452px]">
          <small className="text-body font-rubik-italic leading-normal text-grey-navy">
            Question {selectedQ + 1} of {questions.length}
          </small>
          <h2 className="text-heading-md font-rubik font-medium text-dark-navy">
            {questions[selectedQ].question}
          </h2>
          <div className="w-full bg-white h-4 rounded-full mt-auto overflow-hidden">
            <div
              style={{
                width: `${((selectedQ + 1) / questions.length) * 100}%`,
              }}
              className="bg-purple h-full"
            ></div>
          </div>
        </section>
        <section className="max-w-[564px] w-full flex-col flex gap-6">
          <ul ref={listRef} className="flex flex-col gap-6">
            {questions[selectedQ].options.map((option, i) => (
              <li
                key={i}
                {...{ onClick }}
                data-index={i}
                title={option}
                aria-selected={selectedOp === `${i}` ? "true" : "false"}
                className="h-[92px] font-rubik text-heading-sm font-medium cursor-pointer flex gap-8 items-center px-5 py-4 shadow-choice-shadow rounded-3xl bg-white [&>span:first-of-type]:hover:text-purple [&>span:first-of-type]:hover:bg-light-purple aria-selected:border-purple  border-[3px] border-transparent [&>span:first-of-type]:aria-selected:bg-purple [&>span:first-of-type]:aria-selected:text-white transition"
              >
                <span className="transition flex-shrink-0 bg-light-grey w-14 h-14 flex justify-center items-center text-grey-navy rounded-md">
                  {String.fromCharCode("A".charCodeAt(0) + i)}
                </span>
                <span className="text-dark-navy truncate">{option}</span>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => (nextQ ? handleNextQuestion() : handleSubmit())}
            className="h-[92px] font-rubik text-heading-sm font-medium text-white bg-purple rounded-3xl leading-none"
          >
            {nextQ ? "Next Question" : "Submit Answer"}
          </button>
        </section>
      </section>
    </>
  );
};

export default Quiz;
