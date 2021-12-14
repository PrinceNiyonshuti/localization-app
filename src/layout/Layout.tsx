/** @format */

import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { AuthContext } from "../context/AuthContext";
import PrivateRoutes from "../PrivateRoutes";
import Settings from "../pages/Settings";

function Layout() {
	// Context data Authentication Data
	const { currentUser } = useContext(AuthContext);
	return (
		<div>
			<Routes>
				<Route path="/" element={currentUser ? <Dashboard /> : <Login />} />
				<Route
					path="/Register"
					element={currentUser ? <Dashboard /> : <Register />}
				/>
				<Route
					path="/Dashboard"
					element={<PrivateRoutes component={Dashboard} />}
				/>
				<Route
					path="/Settings"
					element={<PrivateRoutes component={Settings} />}
				/>
			</Routes>
		</div>
	);
}

export default Layout;
