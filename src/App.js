import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import List from "./Pages/List";
import Admin from "./Pages/Admin";
import Policy from "./Pages/Policy";
import Contact from "./Pages/Contact";
import Pricing from "./Pages/Pricing";
import FAQ from "./Pages/FAQ";

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
          <Route path="/policy">
            <Policy />
          </Route>
          <Route path="/pricing">
            <Pricing />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/faq">
            <FAQ />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
