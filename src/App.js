import { BrowserRouter, Switch, Route } from "react-router-dom";
import ScrollToTop from "./Components/hooks/ScrollToTop";
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
        <ScrollToTop>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/hyrja">
              <List />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route path="/kushtet-politika">
              <Policy />
            </Route>
            <Route path="/abonimi">
              <Pricing />
            </Route>
            <Route path="/kontakt">
              <Contact />
            </Route>
            <Route path="/faq">
              <FAQ />
            </Route>
          </Switch>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
