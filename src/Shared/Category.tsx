import { ICONS } from "../utils/icons";

const Category = ({ cat }: { cat?: string }) => {
  return (
    <>
      <figure
        className="p-1.5 rounded-lg border-2 border-transparent transition"
        style={{
          background: ICONS.filter((ico) => ico[0] === cat)[0][1],
        }}
      >
        <img className="max-sm:size-10" src={ICONS.filter((ico) => ico[0] === cat)[0][2]} alt="icon" />
      </figure>
      <span className="leading-none text-heading-sm text-dark-navy dark:text-white font-medium">
        {cat}
      </span>
    </>
  );
};

export default Category;
