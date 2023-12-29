import { lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";

const Home = lazy(() => import("./Home"));
const Quiz = lazy(() => import("./Quiz"));

const AppRouter = () => {
  const routes = createBrowserRouter([
    {
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/:cat",
          element: <Quiz />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
};

export default AppRouter;
