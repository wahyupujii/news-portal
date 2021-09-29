import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { DetailArticle, LandingPage, Login, Register } from '../../pages';
import Nav from '../../components/Nav';

const Routes = ({ size }) => {
	return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<Nav />
					<LandingPage size={size} />
				</Route>
				<Route exact path='/article/:slug'>
					<Nav />
					<DetailArticle size={size} />
				</Route>
				<Route exact path='/login'>
					<Login size={size} />
				</Route>
				<Route exact path='/register'>
					<Register size={size} />
				</Route>
			</Switch>
		</Router>
	);
};

export default Routes;
