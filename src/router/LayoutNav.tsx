import { Link } from "react-router-dom"
import { useRouteMatch, Switch, Route } from 'react-router';
import {LazyPage1, LazyPage2, LazyPage3} from '../pages/';
export default function LayoutNav() {

    const {path, url} = useRouteMatch();

    return (
        <>
            <ul>
                <li><Link to={`${url}/lazy1`}>Lazy Page 1</Link></li>
                <li><Link to={`${url}/lazy2`}>Lazy Page 2</Link></li>
                <li><Link to={`${url}/lazy3`}>Lazy Page 3</Link></li>
            </ul>
            <Switch>
                <Route exact path={`${path}/lazy1`} component={LazyPage1}/>
                <Route exact path={`${path}/lazy2`} component={LazyPage2}/>
                <Route exact path={`${path}/lazy3`} component={LazyPage3}/>
            </Switch>
        </>
    )
}
