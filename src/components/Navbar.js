import React, { Component } from 'react';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Cart from './Cart';
import Restaurants from './Restaurants';
import RestaurantItems from './RestaurantItems';

import {
    BrowserRouter as Router,
    Route,
    NavLink
} from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <Router>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <NavLink className="navbar-brand" to="/" activeClassName="active"><i class="fas fa-chess-queen">Food Valt</i></NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <NavLink className="nav-link" to="/home" activeClassName="active"><i className="fas fa-home">Home</i></NavLink>
                            </li>
                            <li className="nav-item active">
                                <NavLink className="nav-link" to="/restaurants" activeClassName="active"><i className="fas fa-utensils"> Restaurants</i></NavLink>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            {<li className="nav-item active">
                                <NavLink className="nav-link" to="/cart" activeClassName="active"><i class="fas fa-cart-plus">Cart</i></NavLink>
                            </li>}
                            <li className="nav-item active">
                                <NavLink className="nav-link" to="/login" activeClassName="active"><i className="fas fa-sign-in-alt">Sign In</i></NavLink>
                            </li>
                            <li className="nav-item active">
                                <NavLink className="nav-link " to="/signup" activeClassName="active"><i className="fas fa-user-plus">Sign Up</i></NavLink>
                            </li>
                            <li>
                                <form class="form-inline my-2 my-lg-0">
                                    <input class="form-control mr-sm-2" type="text" placeholder="Search" />
                                    <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                                </form>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Route exact path="/home" component={Home} />
                <Route exact path="/restaurants" component={Restaurants} />
                <Route exact path="/cart" component={Cart} />
                <Route exact path="/signup" component={Register} />
                <Route exact path="/" component={Restaurants} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/restaurants/viewmenu/:restaurantId" component={RestaurantItems} />
            </Router>
        );
    }
}
export default Navbar;

