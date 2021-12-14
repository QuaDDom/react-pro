import {
    BrowserRouter as Router, Switch, Route, NavLink
  } from "react-router-dom";
import About from "../components/About";
import Home from '../components/Home';
import Users from "../components/Users";
import logo from '../logo.svg'
import Register from "../pages/Register";
  
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
                <NavLink exact to="/register" activeClassName='nav-active'>Register</NavLink>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/about" component={About}/>
            <Route path="/register" component={Register}/>
            <Route path="/" component={Home}/>
          </Switch>
        </div>
      </Router>
    );
  }
  