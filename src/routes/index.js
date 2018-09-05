import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Page Imports
import Index from "screens/Index";
import Restaurants from "screens/Restaurants";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/restaurants" component={Restaurants} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
