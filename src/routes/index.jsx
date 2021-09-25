import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";
const Routes = () => {
  const [authenticade, setAuthenticate] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("@KenzieHub:token");

    if (token) {
      return setAuthenticate(true);
    }
  }, [authenticade]);
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home authenticade={authenticade} />
        </Route>
        <Route path="/login">
          <Login
            authenticade={authenticade}
            setAuthenticate={setAuthenticate}
          />
        </Route>
        <Route path="/signup">
          <Register authenticade={authenticade} />
        </Route>
        <Route path="/dashboard">
          <Dashboard
            setAuthenticate={setAuthenticate}
            authenticade={authenticade}
          />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
