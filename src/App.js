import "./App.css";
import Navigation from "./Components/NavigationComponent/Navigation";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Service from "./pages/Service/Service";
import { Router, Switch, Route } from "react-router-dom";
import history from "../src/history";

function App() {
  return (
    <>
      <Navigation />
      <Router history={history}>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/service" component={Service} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
