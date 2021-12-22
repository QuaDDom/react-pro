import {
    BrowserRouter as Router, Switch, Route, NavLink
  } from "react-router-dom";
  
import logo from '../logo.svg'
import { Register, FormikAbstract, FormikComponents, FormikYup, Formik } from '../pages';

  export default function Nav() {
    return (
      <Router>
        <div className='main-layout'>
          <nav>
              <img src={logo} alt="react logo" />
            <ul>
              <li>
                <NavLink exact to="/formik" activeClassName='nav-active'>Formik</NavLink>
              </li>
              <li>
                <NavLink exact to="/formik-abstract" activeClassName='nav-active'>Formik Abstract</NavLink>
              </li>
              <li>
                <NavLink exact to="/formik-components" activeClassName='nav-active'>Formik Components</NavLink>
              </li>
              <li>
                <NavLink exact to="/formik-yup" activeClassName="nav-active">Formik Yup</NavLink>
              </li>
              <li>
                <NavLink exact to="/register" activeClassName='nav-active'>Register</NavLink>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/formik" component={Formik}/>
            <Route path="/formik-yup" component={FormikYup}/>
            <Route path="/formik-abstract" component={FormikAbstract}/>
            <Route path="/register" component={Register}/>
            <Route path="/formik-components" component={FormikComponents}/>
          </Switch>
        </div>
      </Router>
    );
  }
  