import {
    BrowserRouter as Router, Switch, Route, NavLink
  } from "react-router-dom";

import logo from '../logo.svg'
import { LazyPage1, LazyPage2, LazyPage3 } from '../pages/';
  
  export default function Nav() {
    return (
      <Router>
        <div className='main-layout'>
          <nav>
              <img src={logo} alt="react logo" />
            <ul>
              <li>
                <NavLink exact to="/lazy1" activeClassName='nav-active'>Lazy 1</NavLink>
              </li>
              <li>
                <NavLink exact to="/lazy2" activeClassName='nav-active'>Lazy 2</NavLink>
              </li>
              <li>
                <NavLink exact to="/lazy3" activeClassName='nav-active'>Lazy 3</NavLink>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/lazy1" component={LazyPage1}/>
            <Route path="/lazy2" component={LazyPage2}/>
            <Route path="/lazy3" component={LazyPage3}/>
          </Switch>
        </div>
      </Router>
    );
  }
  