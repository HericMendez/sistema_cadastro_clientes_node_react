
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";


const App = () => {
  return (
    <div className="wrapper">

      <BrowserRouter>
          <Dashboard />
      </BrowserRouter>
    </div>
  );

  

};

export default App;

