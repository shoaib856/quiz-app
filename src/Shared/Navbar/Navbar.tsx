import Category from "../Category";
import ThemeSwitcher from "./Components/ThemeSwitcher";

const Navbar = ({ cat }: { cat?: string }) => {
  return (
    <nav
      className="mx-auto px-36 max-md:px-16 max-sm:px-6 py-4 bg-white/20 backdrop-blur dark:bg-navy/20 max-w-[1536px] w-full max-sm:fixed max-sm:top-0 max-sm:left-0 max-sm:w-full flex justify-end items-center data-[start-quiz]:justify-between"
      data-start-quiz={cat}
    >
      {cat && (
        <div className="flex items-center gap-6">
          <Category {...{ cat }} />
        </div>
      )}
      <ThemeSwitcher />
    </nav>
  );
};

export default Navbar;
