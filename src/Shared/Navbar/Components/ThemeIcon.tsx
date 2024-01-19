const ThemeIcon = ({
  onClick,
  darkIcon,
  LightIcon,
}: {
  onClick: () => void;
  darkIcon: string;
  LightIcon: string;
}) => {
  return (
    <button type="button" onClick={onClick}>
      <img src={darkIcon} className="block dark:hidden" alt="sun-dark" />
      <img src={LightIcon} className="hidden dark:block" alt="sun-Light" />
    </button>
  );
};

export default ThemeIcon;
