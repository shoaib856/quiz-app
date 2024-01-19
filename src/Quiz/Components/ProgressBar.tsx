const ProgressBar = ({
  selectedQ,
  questionsLen,
}: {
  selectedQ: number;
  questionsLen: number;
}) => {
  return (
    <div
      className={`!w-full max-sm:p-1 bg-white dark:bg-navy h-4 rounded-full mt-auto overflow-hidden transition`}
    >
      <div
        style={{
          width: `${((selectedQ + 1) / questionsLen) * 100}%`,
        }}
        className={`bg-purple h-full max-sm:rounded-full`}
      ></div>
    </div>
  );
};

export default ProgressBar;
