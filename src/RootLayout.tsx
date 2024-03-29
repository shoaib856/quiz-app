import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "./Loader/Loader";

const RootLayout = () => {
  return (
    <main className="flex flex-col gap-[85px] py-[83px] min-h-screen justify-center">
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default RootLayout;
