import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Card from "./components/Card";
import List from "./components/List";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={List} />
            <Route path="/payments/:id" component={Card} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
