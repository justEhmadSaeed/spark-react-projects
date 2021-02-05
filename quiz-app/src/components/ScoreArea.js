import React from "react"
import TotalCorrect from "./TotalCorrect"
import TotalIncorrect from "./TotalIncorrect"

const ScoreArea = ({ correct, incorrect }) => {
	return (
		<div>
			<h2>Score Area</h2>
			<TotalCorrect correct={correct} />
			<TotalIncorrect incorrect={incorrect} />
		</div>
	)
}

export default ScoreArea
