import "./App.css";
import Home from "./pages/home";
import { Switch, Route } from "react-router-dom";
import Customer from "./pages/customer";
import Company from "./pages/company";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/customer/:id">
            <Customer />
          </Route>

          <Route exact path="/company/:id">
            <Company />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
