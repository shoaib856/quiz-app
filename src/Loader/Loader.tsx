import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className="h-screen fixed top-0 w-full bg-white/10 backdrop-blur-sm flex justify-center items-center">
      <div className={styles["spinner"]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
