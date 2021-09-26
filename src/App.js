import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import TeamDetail from "./components/TeamDetail/TeamDetail";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/team/:id">
            <TeamDetail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
