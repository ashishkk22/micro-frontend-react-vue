import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
const Temp = () => {
  return (
    <div>
      Huui
      <div>
        <button onClick={() => {}}>Redirect to login</button>
      </div>
    </div>
  );
};
export default ({ history }) => {
  // const history = useHistory();
  return (
    <>
      <Router history={history}>
        <Switch>
          <Route path="/auth/signin" component={SignIn} />
          <Route path="/auth/signup" component={SignUp} />
        </Switch>
      </Router>
    </>
  );
};
