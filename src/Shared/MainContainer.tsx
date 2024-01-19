import React from "react";

const MainContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <section
      className={`flex max-md:flex-col max-md:items-center gap-16 items-start font-rubik justify-between max-w-[1536px] w-full px-36 max-md:px-16 max-sm:px-6 max-sm:pt-8`}
    >
      {children}
    </section>
  );
};

export default MainContainer;
