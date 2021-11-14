import {
    BrowserRouter as Router, Switch, Route, NavLink
  } from "react-router-dom";
import About from "../components/About";
import Shopping from "../pages/Shopping";
import Users from "../components/Users";
import logo from '../logo.svg'
  
  export default function Nav() {
    return (
      <Router>
        <div className='main-layout'>
          <nav>
              <img src={logo} alt="react logo" />
            <ul>
              <li>
                <NavLink exact to="/" activeClassName='nav-active'>Home</NavLink>
              </li>
              <li>
                <NavLink exact to="/about" activeClassName='nav-active'>About</NavLink>
              </li>
              <li>
                <NavLink exact to="/users" activeClassName='nav-active'>Users</NavLink>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/about" component={About}/>
            <Route path="/users" component={Users}/>
            <Route path="/" component={Shopping}/>
          </Switch>
        </div>
      </Router>
    );
  }
  