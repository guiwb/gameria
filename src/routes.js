import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import isAuthenticated from "./auth";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const render = (props) =>
    isAuthenticated() ? (
      <Component {...rest} />
    ) : (
      <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
    );

  return <Route {...rest} render={render} />;
};

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <PrivateRoute path="/" exact={true} component={Home} />
      <PrivateRoute path="/ola" component={() => <p>olá</p>} />
      <Route path="/login" component={Login} />
      <Route path="/cadastre-se" component={Register} />
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
