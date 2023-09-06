import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Navbar from "./Navbar/Navbar.jsx";
import MyCard from "./Body/Card.jsx"; // Corrected import
import ProductDetails from "./Body/ProductDetails.jsx";
import BuyNow from "./Body/BuyNow.jsx";
import ThankYou from "./Body/ThankYou";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={MyCard} />
          <Route
            path="/product/:title/:description/:imageUrl"
            exact
            component={ProductDetails}
          />
          <Route path="/buynow/:title" exact component={BuyNow} />
          <Route path="/thankyou/:title" exact component={ThankYou} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
