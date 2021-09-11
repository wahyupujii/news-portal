import React from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {DetailArticle} from "../../pages";

const Routes = ({size}) => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <DetailArticle size={size} />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes