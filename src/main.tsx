import { StrictMode, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRouter from "./AppRouter.tsx";
import Loader from "./Loader/Loader.tsx";
import ThemeProvider from "./Context/ThemeContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <ThemeProvider>
      <Suspense fallback={<Loader />}>
        <AppRouter />
      </Suspense>
    </ThemeProvider>
  </StrictMode>
);
