import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Navbar from './Layout/Navbar'
import ProductHome from "./Components/ProductHome";
import './App.css';
import Home from "./Pages/Home";
import AboutUs from "./Pages/About/AboutUs";
import Navbar from './Components/navbar2/index'
import ItemInfoPage from './Pages/item_info_page'
import Signup from './Pages/Signup'
import Signin from './Pages/Login'// import Second_Nav from "./Layout/Second_Nav";
import UserProfile from "./Pages/User Profile/UserProfile";
import GetAppScreen from "./Pages/getapp";
import HelpCenterPage from "./Pages/helpcneter";
import InfoBoard from "./Pages/infoboard";
import HowItWork from "./Pages/howItWork";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/product-home/:id/:name">
            <ProductHome />
          </Route>
          <Route exact path="/about-us">
            <AboutUs />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/signin">
            <Signin />
          </Route>
          <Route path='/offer' component={ItemInfoPage} />
          <Route exact path="/user-profile">
            <UserProfile />
          </Route>
          <Route path='/app' component={GetAppScreen} />
          <Route path='/help-center' component={HelpCenterPage} />
          <Route path='/infoboard' component={InfoBoard} />
          <Route path='/how-it-work' component={HowItWork} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
