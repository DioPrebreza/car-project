import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import List from "./Pages/List";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/list">
          <List />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
