import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './Layout/Navbar'
import ProductHome from "./Components/ProductHome";
import './App.css';
import Home from "./Pages/Home";
import AboutUs from "./Pages/About/AboutUs";
import Footer from "./Layout/Footer";
// import Second_Nav from "./Layout/Second_Nav";

function App() {
  return (
    <div >
      <React.Fragment>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/product-home">
              <ProductHome />
            </Route>
            <Route exact path="/about-us">
              <AboutUs />
            </Route>
          </Switch>
        </Router>
      </React.Fragment>
    </div>
  );
}

export default App;
