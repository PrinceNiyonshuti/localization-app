/** @format */

import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/AuthContext";

ReactDOM.render(
	<BrowserRouter> 
		<AuthProvider>
			<App />
		</AuthProvider>
	</BrowserRouter>,
	document.getElementById("root")
);
