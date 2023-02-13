import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import List from "./Pages/List";
import Admin from "./Pages/Admin";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
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
  );
}

export default App;
