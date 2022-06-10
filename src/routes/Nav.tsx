import { Suspense } from "react";
import {
    BrowserRouter as Router, Switch, Route, NavLink, Redirect
} from "react-router-dom";
import logo from '../logo.svg'
import { routes } from './routes';
  
  export default function Nav() {
    return (
      <Suspense fallback={null}>
      <Router>
        <div className='main-layout'>
          <nav>
              <img src={logo} alt="react logo" />
            <ul>
            {routes.map(({path, name}, index)=>
              <li key={index}>
                <NavLink 
                exact 
                to={path} 
                activeClassName='nav-active'
                >{name}</NavLink>
              </li>
            )}
            </ul>
          </nav>

          <Switch>
            {routes.map(({path, Component}, index)=> <Route path={path} component={Component} key={index}/>)}
            <Redirect to={ routes[0].path }/>
          </Switch>

        </div>
      </Router>
      </Suspense>
    );
  }
  