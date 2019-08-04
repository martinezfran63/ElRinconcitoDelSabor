import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./Home.jsx";
import Menu_One from "./Menu_One.jsx";
import Menu_Two from "./Menu_Two.jsx";
import Menu_Three from "./Menu_Three.jsx";
import Lost from "./Lost.jsx";


class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch> 
          <Route path="/" exact component={Home} />
          <Route path="/menu_one" component={Menu_One} />
          <Route path="/menu_two" component={Menu_Two} />
          <Route path="/menu_three" component={Menu_Three} />
          <Route component={Lost} />
        </Switch>
      </Router>


    );
  }
}

export default App;
