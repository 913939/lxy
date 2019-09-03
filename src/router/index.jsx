import * as React from "react"
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Test from '../views/test'
class Router extends React.Component {
    render() {
        return <BrowserRouter>

            <Switch>
                <Route path="/test" component={Test}></Route>
            </Switch>
        </BrowserRouter>
    }
}

export default Router;

