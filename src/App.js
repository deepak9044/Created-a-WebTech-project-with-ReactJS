import React, {Component} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/font-awesome/css/font-awesome.css";
import Header from "./components/Header";
import Network from './Network';
import Details from './components/Details';
import Modal from './components/Modal';

const App = () => {
	return(
		<React.Fragment>
			<Header />
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Network} />
					<Route path="/details" component={Details} /> 
				</Switch>
			</BrowserRouter>
			
		</React.Fragment>
	);
}
export default App;