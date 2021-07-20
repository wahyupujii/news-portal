import React from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {DetailArticle , SimilarArticle} from "../../pages";

const Routes = ({size}) => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <DetailArticle size={size} />
                </Route>
                <Route exact path="/more-articles">
                    <SimilarArticle />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes