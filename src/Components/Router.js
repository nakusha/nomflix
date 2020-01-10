import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Header from "Components/Header";

export default () => (
    <Router>
        <>
            <Header/>
            <Switch>
                <Route path="/" exact component={Home}/>
                {/* 여러개가 있을경우 exact 써서 구분해준다. */}
                <Route path="/tv" exact component={TV}/>
                <Route path="/search" component={Search}/>
                <Redirect from="*" to="/"/>
            </Switch>
        </>
    </Router>
);