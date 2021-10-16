import React from "react";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop"
import OrderReview from "./components/OrderReview/OrderReview";
import Inventory from "./components/Inventory/Inventory";
import Home from "./components/Home/Home";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/shop">
          <Shop></Shop>
        </Route>
        <Route exact path="/order-review">
          <OrderReview></OrderReview>
        </Route>
        <Route exact path="/inventory">
          <Inventory></Inventory>
        </Route>
        <Route exact path="/place-order">
            <PlaceOrder></PlaceOrder>
        </Route>
        <Route path="*">
          <h1>404 Not Found</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
