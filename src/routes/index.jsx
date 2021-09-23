import { Route, Switch } from "react-router-dom";
import Home from "../pages/home";
import Loggin from "../pages/login";
import Register from "../pages/register";
const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/loggin">
          <Loggin />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
