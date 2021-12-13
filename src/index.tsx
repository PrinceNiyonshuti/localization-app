/** @format */

import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/AuthContext";
import { QueryClient, QueryClientProvider } from "react-query";

// create a client
const queryclient = new QueryClient();

ReactDOM.render(
	<BrowserRouter> 
		<QueryClientProvider client={queryclient}>
			<AuthProvider>
				<App />
			</AuthProvider>
		</QueryClientProvider>
	</BrowserRouter>,
	document.getElementById("root")
);
