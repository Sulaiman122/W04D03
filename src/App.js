import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Contact from "./components/Contact";
import Cards from "./components/Cards.js";
import Home from "./components/Home";
import Card from "./components/Card.js";
import {Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/cards" component={Cards} />
          <Route exact path="/card/:id" component={Card} />
          <Route exact path="*" render={() => {
              return <h1>Error 404 baby</h1>;
            }} />
        </Switch>
      </div>
    </>
  );
}

export default App;
