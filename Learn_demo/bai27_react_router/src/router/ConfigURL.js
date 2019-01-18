import React, { Component } from 'react'
import {Route } from "react-router-dom";
import News from "../component/News";
import Detail from "../component/Detail";
import Contact from "../component/Contact";
import Home from "../component/Home";

export default class ConfigURL extends Component {
    render() {
        return (
            <div>
                <Route path="/" exact component={Home} />
                <Route path="/home" exact component={Home} />
                <Route path="/news" exact component={News} />
                <Route path="/news-detail/:slug.:id.html" component={Detail} />
                <Route path="/contact" component={Contact} />
            </div>
        );
    }
}
