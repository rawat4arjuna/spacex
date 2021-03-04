import "./App.css";
import React from "react";
import { Provider } from "react-redux";
import store from "./Redux/store";
import Login from "./Page/Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact component={Login} path="/" />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
