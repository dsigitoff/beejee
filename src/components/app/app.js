import React, {Component} from 'react';

import Header from '../header';
import Home from "../pages/page-home";
import AddTask from "../pages/page-add";
import Login from "../pages/page-login";

import {BrowserRouter as Router, Route} from "react-router-dom";


export default class App extends Component {
    render() {
        return (
            <Router>
                <div className="app">
                    {/*header*/}
                    <Header/>

                    <Route path="/" exact component={Home}/>
                    <Route path="/addtask/" component={AddTask}/>
                    <Route path="/login/" component={Login}/>
                </div>
            </Router>
        )
    }
}
