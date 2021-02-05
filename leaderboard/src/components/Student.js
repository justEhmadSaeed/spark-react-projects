import React, { Component } from "react"
import "./student.css"

class Student extends Component {
	constructor() {
		super()
		this.state = {
			score: 0,
			success: "none",
		}
	}
	componentDidMount() {
		this.setState({
			score: this.props.score,
			success:
				this.props.score >= 350
					? "success"
					: this.props.score < 340
					? "failure"
					: "none",
		})
	}
	addScore() {
		this.setState(
			{
				score: this.state.score + 1,
			},
			() => {
				if (this.state.score >= 350)
					this.setState({
						success: "success",
					})
				else if (this.state.score >= 340)
					this.setState({
						success: "none",
					})
			}
		)
	}
	minusScore() {
		this.setState(
			{
				score: this.state.score - 1,
			},
			() => {
				if (this.state.score < 340)
					this.setState({
						success: "failure",
					})
				else if (this.state.score < 350)
					this.setState({
						success: "none",
					})
			}
		)
	}

	render() {
		const { name, university } = this.props
		let text
		if (this.state.success === "success") text = <span>Success</span>
		else if (this.state.success === "failure") text = <span>Fail</span>
		else text = ""

		return (
			<div className="student">
				<div className="left">
					<h2 className="studentName">{name}</h2>
					<p className="uniName">
						{university} {text}
					</p>
				</div>
				<div className="right">
					<div className="score">
						<button className="minusBtn" onClick={() => this.minusScore()}>
							{" "}
							-{" "}
						</button>
						{this.state.score}
						<button className="addBtn" onClick={() => this.addScore()}>
							+
						</button>
					</div>
				</div>
			</div>
		)
	}
}
export default Student
