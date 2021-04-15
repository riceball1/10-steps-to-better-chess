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
    return typeof value == "number" ? <StepPage value={value} /> : null;
  },
};

function App() {
  const routeResult = useRoutes(routes);
  console.log("routeResult", routeResult);

  return routeResult || <NotFoundPage />;
}

export default App;
