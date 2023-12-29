import { ICONS } from "./utils/icons";

const Category = ({ cat }: { cat: string }) => {
  return (
    <>
      <figure
        className="p-1.5 rounded-lg border-2 border-transparent transition"
        style={{
          background: ICONS.filter((ico) => ico[0] === cat)[0][1],
        }}
      >
        <img src={ICONS.filter((ico) => ico[0] === cat)[0][2]} alt="icon" />
      </figure>
      <span className="leading-none text-heading-sm text-dark-navy font-medium">
        {cat}
      </span>
    </>
  );
};

export default Category;
