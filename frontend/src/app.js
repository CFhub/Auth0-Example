import React from "react";
import { Route, Switch } from "react-router-dom";

import { NavBar } from "./components";
import { Home, Profile, ExternalApi } from "./views";

import "./app.css";
import ProtectedRoute from './auth/ProtectedRoute'


const App = () => {
  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <div className="container flex-grow-1">
        <div className="mt-5">
          <Switch>
            <Route path="/" exact component={Home} />
            <ProtectedRoute path="/profile" component={Profile} />
            <ProtectedRoute path="/external-api" component={ExternalApi} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default App;
