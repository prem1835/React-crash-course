import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import About from "./views/About";
import Home from "./views/Home";
import Product from "./views/Product";

function App() {
  return (
    <div className="relative pb-10 min-h-screen">
      <Router>
        <div>
          <Header />
          <div className="p-3">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/Products/:id">
                <Product />
              </Route>
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
