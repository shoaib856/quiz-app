import Category from "../../Shared/Category";

const EndOfQuiz = ({
  cat,
  correctAnsNum,
  questionsLen,
}: {
  cat?: string;
  questionsLen: number;
  correctAnsNum: number;
}) => {
  return (
    <div className="bg-white dark:bg-navy p-12 gap-10 flex flex-col items-center rounded-3xl shadow-choice-shadow">
      <div className="flex items-center gap-6">
        <Category {...{ cat }} />
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-display-font text-dark-navy dark:text-white font-rubik font-medium leading-none">
          {correctAnsNum}
        </h2>
        <p className="text-grey-navy dark:text-light-bluish font-rubik text-body-md leading-normal font-normal">
          out of {questionsLen}
        </p>
      </div>
    </div>
  );
};

export default EndOfQuiz;
