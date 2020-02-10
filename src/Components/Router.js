import React from "react";
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Header from "Components/Header";
import Search from "Routes/Search";
import Detail from "Routes/Detail";

export default () => (
    <Router>
        <>
            <Header/>
            <Switch>
                {/* Hash Router로 교체
                <Route path="/" exact component={Home}/>
                Broswer Router를 사용하려면 이렇게 해주면됨(근데 안됨)
                <Route path="https://nakusha.github.io/nomflix/" exact component={Home}/>
                <Route path="https://nakusha.github.io/nomflix/tv" component={TV}/>
                <Route path="https://nakusha.github.io/nomflix/search" component={Search}/>
                <Route path="https://nakusha.github.io/nomflix/movie/:id" component={Detail}/>
                <Route path="https://nakusha.github.io/nomflix/show/:id" component={Detail}/> */}
                <Route path="/" exact component={Home}/>
                <Route path="/tv" component={TV}/>
                <Route path="/search" component={Search}/>
                <Route path="/movie/:id" component={Detail}/>
                <Route path="/show/:id" component={Detail}/>
                <Redirect from="*" to="/"/>
            </Switch>
        </>
    </Router>
);