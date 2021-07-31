import React from "react";
import Nav from "./Nav";
import CalculatorList from "./pages/CalculatorList";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../styles/App.scss";

// @ts-ignore
import data from "../data.yml";
import Unfinished from "./pages/Unfinished";
import Index from "./pages/Index";
import EhpCalculator from "./pages/calculators/EhpCalculator";

export { data };

function App() {
  return (
    <div className="App">
      <Nav />

      <div className="content">
        <Router>
          <Route exact path="/">
            <Index />
          </Route>
          
          <Route path="/unfinished">
            <Unfinished />
          </Route>

          <Route path="/calc-list">
            <CalculatorList />
          </Route>

          <Route path="/calculators/ehp">
            <EhpCalculator />
          </Route>
        </Router>
      </div>
    </div>
  );
}

export default App;
