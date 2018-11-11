import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { store } from "./store/configureStore";
// import WeatherForecast from "./components/screens/weatherForecast";
import HeadPanel from "./components/controls/headPanel";
import WorldСhoice from "./components/screens/worldСhoice";
import World from "./components/screens/world";
import AdminPanel from "./components/screens/adminPanel";


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <HeadPanel />
        <Route path="/" exact component={WorldСhoice} />
        <Route path="/world/" component={World} />
        <Route path="/admin/" component={AdminPanel} /> 
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);
