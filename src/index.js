import React from "react";
import ReactDom from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import App from './App';
import {ProductProvider} from "./Context";
import {BrowserRouter as Router} from "react-router-dom";

ReactDom.render(
	<ProductProvider>
		<Router>
			<App />
		</Router>
	</ProductProvider>,
	document.getElementById("root")
);