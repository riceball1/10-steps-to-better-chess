/**
 * App - main file to start page
 */
import { useState } from "react";
import Home from "./pages/Home";
import StepPage from "./pages/StepPage";
import "./App.css";

function App() {
  const [changePage, setChangePage] = useState(null);

  const handleChangePage = (page) => {
    setChangePage(page);
  };
  switch (changePage) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
      return <StepPage value={changePage} onPageChange={handleChangePage} />;
    default:
      return <Home onPageChange={handleChangePage} />;
  }
}

export default App;
