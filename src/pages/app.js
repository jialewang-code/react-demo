import React from "react";
import { Link } from "react-router-dom";
import "./app.scss";
import "antd/dist/antd.css";

//无状态组件
export default function App() {
	return (
		<div className='container'>
			<h1>欢迎来到React</h1>
			<Link to='/login'>去登录</Link>
			<br />
			<Link to='/home'>去首页</Link>
		</div>
	);
}
