import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Home} from "../routes/Home";
import React from "react";

function ContameRouter() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={"/"}>
                    <Home/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export {
    ContameRouter
};