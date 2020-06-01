import React from "react";
// import { BrowserRouter as Router, Route, Switch,Redirect } from "react-router-dom";
import {
	HashRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";
import App from "./pages/app";
import Login from "./pages/login";
import Home from "./pages/home";
import Detail from "./pages/detail";
import NoMatch from "./pages/404";

// Switch单一匹配路由,匹配到第一个就终止; exact关键字精准匹配
export default function IRouter() {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={App}></Route>
				<Route path='/login' component={Login}></Route>
				<Route path='/home' component={Home}>
					{/* <Redirect to='/login'></Redirect> */}
				</Route>
				<Route path='/detail/:id' component={Detail}></Route>
				<Route path='*' component={NoMatch}></Route>
			</Switch>
		</Router>
	);
}