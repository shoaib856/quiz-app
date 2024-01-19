import { MouseEventHandler } from "react";

const QuizOption = ({
  handleSelectOption: onClick,
  option,
  i,
  selectedOp,
  isSubmitted,
}: {
  handleSelectOption: MouseEventHandler<HTMLLIElement> | undefined;
  option: string;
  i: number;
  selectedOp: string | null;
  isSubmitted: boolean;
}) => {
  return (
    <li
      {...{ onClick }}
      data-index={i}
      title={option}
      aria-selected={selectedOp === `${i}` ? "true" : "false"}
      aria-checked={isSubmitted}
      className={`aria-checked:cursor-not-allowed
      [&>span:first-of-type]:hover:text-purple [&>span:first-of-type]:hover:bg-light-purple
        sm:min-h-[92px] font-rubik text-lg sm:text-heading-sm font-medium cursor-pointer flex gap-8 items-center px-5 py-4 shadow-choice-shadow rounded-xl sm:rounded-3xl bg-white dark:bg-navy aria-selected:border-purple border-[3px] 
        border-transparent [&>span:first-of-type]:aria-selected:bg-purple [&>span:first-of-type]:aria-selected:text-white transition`}
    >
      <span
        className={`transition flex-shrink-0 bg-light-grey size-10 md:size-14 flex justify-center items-center text-grey-navy rounded-md`}
      >
        {String.fromCharCode("A".charCodeAt(0) + i)}
      </span>
      <span className={`text-dark-navy dark:text-white`}>{option}</span>
    </li>
  );
};

export default QuizOption;
