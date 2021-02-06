import React, { Component } from "react"
import "./bmr.css"

export class BMR extends Component {
	constructor() {
		super()
		this.state = {
			gender: "",
			formula: "2",
			weight: "",
			heightCM: "",
			heightFeet: "",
			heightInches: "",
			age: "",
			activity: "",
			bmr: "",
			calories: "",
			error: "",
		}
	}

	handleFormulaChange = (event) => {
		this.setState({ formula: event.target.value })
	}
	handleGenderChange = (event) => {
		this.setState({ gender: event.target.value })
	}
	handleWeightChange = (event) => {
		this.setState({ weight: event.target.value })
	}
	handleAgeChange = (event) => {
		this.setState({ age: event.target.value })
	}
	handleHeightCMChange = (event) => {
		this.setState({ heightCM: event.target.value })
	}
	handleHeightFeetChange = (event) => {
		this.setState({ heightFeet: event.target.value })
	}
	handleHeightInchesChange = (event) => {
		this.setState({ heightInches: event.target.value })
	}
	handleActivityChange = (event) => {
		this.setState({ activity: event.target.value })
	}
	calculateBMR = () => {
		const gender = this.state.gender
		let weight = this.state.weight
		const age = this.state.age
		const heightFeet = this.state.heightFeet
		const heightInches = this.state.heightInches
		const heightCM = this.state.heightCM
		const formula = this.state.formula
		if (
			formula === "1" &&
			(gender === "" ||
				weight === "" ||
				age === "" ||
				heightFeet === "" ||
				heightInches === "")
		) {
			this.setState({ error: "All Fields are Required!" })
			return
		} else if (
			formula === "2" &&
			(gender === "" || weight === "" || age === "" || heightCM === "")
		) {
			this.setState({ error: "All Fields are Required!" })
			return
		}
		this.setState({ error: "" })
		let bmrcalc
		let height

		if (this.state.formula === "2") {
			weight = weight * 2.205
			height = heightCM / 2.54
		} else height = heightFeet * 12 + heightInches

		if (gender === "2") bmrcalc = 66 + 6.2 * weight + 12.7 * height - 6.76 * age
		else bmrcalc = 665.1 + 4.35 * weight + 4.7 * height - 4.7 * age

		this.setState({ bmr: bmrcalc.toFixed(2) })
	}

	calculateCalories = () => {
		const bmrcalc = this.state.bmr
		const activity = this.state.activity

		if (activity === "") {
			this.setState({ error: "All Fields are Required!" })
			return
		}
		this.setState({ error: "", calories: (bmrcalc * activity).toFixed(2) })
	}

	render() {
		return (
			<div id="bmrcalc">
				<div className="form">
					<h2>BMR &amp; Daily Calorie Calculator</h2>
					{this.state.error && <div className="error">{this.state.error}</div>}
					<div className="inputwrap">
						<label className="label">Gender</label>
						<label>
							<input
								type="radio"
								className="genderF"
								checked={this.state.gender === "1"}
								onChange={this.handleGenderChange}
								name="gender"
								value="1"
							/>
							Female
						</label>
						<label>
							<input
								type="radio"
								className="genderM"
								checked={this.state.gender === "2"}
								onChange={this.handleGenderChange}
								name="gender"
								value="2"
							/>
							Male
						</label>
					</div>
					<div className="inputwrap">
						<label className="label">Formula System:</label>
						<label>
							<input
								type="radio"
								className="genderF"
								checked={this.state.formula === "1"}
								onChange={this.handleFormulaChange}
								name="formula"
								value="1"
							/>
							Imperial
						</label>
						<label>
							<input
								type="radio"
								className="genderM"
								checked={this.state.formula === "2"}
								onChange={this.handleFormulaChange}
								name="formula"
								value="2"
							/>
							Metric
						</label>
					</div>
					{this.state.formula === "1" ? (
						<>
							<div className="inputwrap">
								<label className="label">Weight in Pounds</label>
								<input
									onChange={this.handleWeightChange}
									value={this.state.weight}
									type="number"
									name="weight"
									className="weight"
									min="0"
									max="999"
								/>
							</div>
							<div className="inputwrap">
								<label className="label">Height in feet and inches</label>
								<input
									onChange={this.handleHeightFeetChange}
									value={this.state.heightFeet}
									type="number"
									name="heightFeet"
									className="heightFeet"
									min="0"
									max="8"
								/>
								<input
									onChange={this.handleHeightInchesChange}
									value={this.state.heightInches}
									type="number"
									name="heightInches"
									className="heightInches"
									min="0"
									max="11"
								/>
							</div>
						</>
					) : (
						<>
							<div className="inputwrap">
								<label className="label">Weight in KGs: </label>
								<input
									onChange={this.handleWeightChange}
									value={this.state.weight}
									type="number"
									name="weight"
									className="weight"
									min="0"
									max="999"
								/>
							</div>
							<div className="inputwrap">
								<label className="label">Height in cm: </label>
								<input
									onChange={this.handleHeightCMChange}
									value={this.state.heightCM}
									type="number"
									name="heightCM"
									className="heightFeet"
									min="1"
								/>
							</div>
						</>
					)}
					<div className="inputwrap">
						<label className="label">Age in years</label>
						<input
							onChange={this.handleAgeChange}
							value={this.state.age}
							type="number"
							className="age"
							name="age"
							min="0"
							max="120"
						/>
					</div>
					<button type="button" onClick={() => this.calculateBMR()}>
						Calculate BMR
					</button>
					{this.state.bmr && <div className="result">{this.state.bmr}</div>}
					{this.state.bmr && (
						<div className="workout">
							<div className="inputwrap">
								<label className="label">Workout in a Week</label>
								<select
									className="activity"
									value={this.state.activity}
									onChange={this.handleActivityChange}
									name="activity"
								>
									<option value="">Select your Activity</option>
									<option value="1.2">
										Sedentary (Very little or no exercise, and desk job)
									</option>
									<option value="1.375">
										Lightly Active (Light exercise 1 to 3 days per week)
									</option>
									<option value="1.55">
										Moderately Active (Moderate exercise 3 to 5 days per week)
									</option>
									<option value="1.725">
										Very Active (Heavy exercise 6 to 7 days per week)
									</option>
									<option value="1.9">
										Extremely Active (Very intense exercise, and physical job,
										exercise multiple times per day)
									</option>
								</select>
							</div>
							<button onClick={this.calculateCalories} type="button">
								Calculate Calories
							</button>
							{this.state.calories && (
								<div className="result">{this.state.calories}</div>
							)}
						</div>
					)}
				</div>
			</div>
		)
	}
}

export default BMR
