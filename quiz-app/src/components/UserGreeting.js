import React from "react"

const UserGreeting = ({ correct }) => {
	return (
		<div>
			<h2 className="user-greeting">
				Thank you for completing the Questionnaire.
			</h2>
			{correct >= 2 ? (
				<h3 style={{ color: "blue" }}>Congrat! You have passed the Quiz.</h3>
			) : (
				<h3 style={{ color: "red" }}>Unfortunately, You have failed the Quiz.</h3>
			)}
		</div>
	)
}

export default UserGreeting
