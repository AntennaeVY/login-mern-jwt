import { Route, Switch } from "react-router-dom";
import Root from "./Pages/Root";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Logout from "./Pages/Logout";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Root />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
