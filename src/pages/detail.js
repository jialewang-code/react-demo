import React from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import "./app.scss";
import { Button } from "antd";
import "antd/dist/antd.css";

//无状态组件，无this，无生命周期
export default function Detail() {
	const params = useParams();
	const history = useHistory();
	console.log("作用域" + this);
	return (
		<div className='container'>
			<p>This is Detail</p>
			<p>当前参数值为：{params.id}</p>
			<Button
				onClick={() => {
					history.push("/");
				}}
			>
				跳转首页
			</Button>
		</div>
	);
}

// 有状态组件
// export default class Detail extends React.Component {
// 	handleJump = () => {
// 		this.props.history.push("/login");
// 	};
// 	render() {
// 		return (
// 			<div className='container'>
// 				<h1>欢迎来到react</h1>
// 				<p>当前的参数ID值为：{this.props.match.params.id}</p>
// 			</div>
// 		);
// 	}
// }
