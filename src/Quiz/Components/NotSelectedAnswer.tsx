import iconIncorrect from "../../assets/images/icon-incorrect.svg";

const NotSelectedAnswer = () => {
  return (
    <div
      className={`text-red flex justify-center items-center gap-2 text-body-md font-rubik`}
    >
      <img src={iconIncorrect} alt="invalid" />
      <span>Please select an answer</span>
    </div>
  );
};

export default NotSelectedAnswer;
