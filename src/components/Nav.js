import React, { Component } from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Game from "./game/Game";

class Nav extends Component {
  state = {};
  render() {
    return (
      <>
        <nav>
          <NavLink exact to="/">
            Home
          </NavLink>

          <NavLink exact to="/about">
            About
          </NavLink>
          <NavLink exact to="/contact">
            Contact
          </NavLink>
          <NavLink exact to="/game">
            Game
          </NavLink>

          <Switch>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/game" component={Game} />
          </Switch>
        </nav>
      </>
    );
  }
}

export default Nav;
