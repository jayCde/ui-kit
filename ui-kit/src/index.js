import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import App from "./App";
import test from "./components/test";
import reportWebVitals from "./reportWebVitals";

const PageLayout = React.lazy(() => import("./components/PageLayout"));

ReactDOM.render(
  <React.StrictMode>
    <Suspense>
      <Router>
        <Switch>
          <Route path="/" exact component={App} />
          <Router path="/kit" component={PageLayout}></Router>
          <Route path="/hi" component={test}></Route>
        </Switch>
      </Router>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
