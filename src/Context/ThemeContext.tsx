import { createContext, useState } from "react";

export interface DarkThemeContextProps {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DarkThemeContext = createContext<DarkThemeContextProps>({
  dark: false,
  setDark: () => {},
});

const ThemeProvider = (props: { children: React.ReactNode }) => {
  const [dark, setDark] = useState(false);
  return (
    <DarkThemeContext.Provider
      value={{
        dark,
        setDark,
      }}
    >
      {props.children}
    </DarkThemeContext.Provider>
  );
};

export default ThemeProvider;
