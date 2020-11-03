import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import "./index.css";
import img from "../src/images/logo1.svg";

const App = () => {
    return (
        <>
            <div className="navbar">
                <img  src={img} /> 
                <p className="nave">Apna Wholesaler</p>
                <NavLink exact className="nave" activeClassName="active" to="/Apnawholesaler">Home</NavLink>
                <NavLink exact className="nave" activeClassName="active" to="/about">About</NavLink>
                <NavLink exact className="nave" activeClassName="active" to="/service">Services</NavLink>
                <NavLink exact className="nave" activeClassName="active" to="/contact">Contact</NavLink>
            </div>
            <Switch>
                <Route exact path="/Apnawholesaler" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/service" component={Service} />
                <Route exact path="/contact" component={Contact} />
                <Route component={Home} />
            </Switch>
        </>
    )
}
export default App;
