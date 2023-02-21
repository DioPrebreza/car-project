import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import List from "./Pages/List";
import Admin from "./Pages/Admin";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/list">
            <List />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
