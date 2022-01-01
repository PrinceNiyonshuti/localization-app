/** @format */

import {
	fireEvent,
	queryByTestId,
	render,
	screen,
} from "@testing-library/react";
import * as ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import Layout from "./layout/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import { shallow, } from "enzyme";
import { configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { BrowserRouter } from "react-router-dom";

configure({ adapter: new Adapter() });

describe("Rendering components", () => {
	it("renders App component without crashing", () => {
		shallow(<App />);
	});
	it("renders Layout component without crashing", () => {
		shallow(<Layout />);
	});
	it("renders Login component without crashing", () => {
		shallow(
			<BrowserRouter>
				<Login />
			</BrowserRouter>
		);
	});
	it("renders Register component without crashing", () => {
		shallow(
			<BrowserRouter>
				<Register />
			</BrowserRouter>
		);
	});
	it("renders Dashboard component without crashing", () => {
		shallow(
			<BrowserRouter>
				<Dashboard />
			</BrowserRouter>
		);
	});
});

describe("Login component screen", () => {
	let container: HTMLDivElement;

	beforeEach(() => {
		container = document.createElement("div");
		document.body.appendChild(container);
		ReactDOM.render(
			<BrowserRouter>
				<Login />
			</BrowserRouter>,
			container
		);
	});

	afterEach(() => {
		document.body.removeChild(container);
		container.remove();
	});

	it("have the login header", () => {
		expect(
			container.querySelector("[data-test='loginHeader']")
		).toBeInTheDocument();
	});
	it("have form , login button ,email and password input", () => {
		const inputs = container.querySelectorAll("input");
		const loginForm = container.querySelector("[data-test='loginForm']");
		expect(
			container.querySelector("[data-test='loginForm']")
		).toBeInTheDocument();
		expect(inputs).toHaveLength(2);
		expect(inputs[0].id).toBe("email");
		expect(inputs[1].id).toBe("password");
		const loginButton = container.querySelectorAll("button");
		expect(loginButton[0].textContent).toContain("Log in");
		fireEvent.click(loginButton[0]);
	});
});
