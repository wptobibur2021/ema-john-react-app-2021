import React from "react";

import Header from "../components/Header/Header";
import Shop from "../components/Shop/Shop"
import OrderReview from "../components/OrderReview/OrderReview";
import Inventory from "../components/Inventory/Inventory";
import Home from "../components/Home/Home";
import PlaceOrder from "../components/PlaceOrder/PlaceOrder";
import Login from "../components/Login/Login";
import Registration from "../components/Registration/Registration";
import PrivateRoute from "./PrivateRoute";

// Backend Dashboard Components
import Dashboard from "../components/Dashboard/Dashboard";
import Add from "../components/Dashboard/Product/Add";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function RouterNav() {
    return (
        <Router>
            {/* <Header></Header> */}
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
                <PrivateRoute exact path="/place-order">
                    <PlaceOrder></PlaceOrder>
                </PrivateRoute>
                <Route exact path='/login'>
                    <Login></Login>
                </Route>
                <Route exact path='/registration'>
                    <Registration></Registration>
                </Route>

                {/* Backend Dashboard */}
                <Route exact path='/'>
                    <Dashboard></Dashboard>
                </Route>
               {/* Add Product */}
               <Route exact path='/dashboard/add-product'>
                    <Add></Add>
               </Route>

                <Route path="*">
                    <h1>404 Not Found</h1>
                </Route>
            </Switch>
        </Router>
    )
}
