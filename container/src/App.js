import React from "react";
import MarketingApp from "./components/MarketingApp";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import AuthApp from "./components/AuthApp";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <MarketingApp />
      <Switch>
        <Route path="/auth/*" component={AuthApp} />
        <Route exact path="/" component={MarketingApp} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
