import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LandingPage, DetailArticle, SimilarArticle } from "../../pages";

const Routes = ({size}) => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <LandingPage size={size} />
                </Route>
                <Route exact path="/article">
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