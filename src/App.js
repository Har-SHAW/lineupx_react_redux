import React from "react";
import { Provider } from "react-redux";
import HomeLogin from "./component/login";
import HomeSignUp from "./component/signup";
import HomeEmployer from "./component/employeLogin/home";
import HomeCandidate from "./component/candidate/home";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import store from "./redux/store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/signin" component={withRouter(HomeLogin)} />
          <Route exact path="/signup" component={withRouter(HomeSignUp)} />
          <Route
            exact
            path="/employer/home"
            component={withRouter(HomeEmployer)}
          />
          <Route
            exact
            path="/candidate/home"
            component={withRouter(HomeCandidate)}
          />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
