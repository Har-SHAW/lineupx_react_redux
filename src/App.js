import React from "react";
import HomeLogin from "./component/login";
import HomeSignUp from "./component/signup"
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Route path="/signin" component={HomeLogin} />
      <Route path="/signup" component={HomeSignUp} />
    </Router>
  );
}

export default App;
