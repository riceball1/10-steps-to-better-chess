/**
 * App - main file to start page
 */
import { useRoutes } from "hookrouter";
import NotFoundPage from "./pages/NotFoundPage";
import Home from "./pages/Home";
import StepPage from "./pages/StepPage";
import "./App.css";

const routes = {
  "/10-steps-to-better-chess": () => <Home />,
  "/10-steps-to-better-chess/:value": ({ value }) => {
    const num = Number(value);
    return typeof num == "number" ? <StepPage value={num} /> : <NotFoundPage />;
  },
};

function App() {
  const routeResult = useRoutes(routes);
  return routeResult || <NotFoundPage />;
}

export default App;
