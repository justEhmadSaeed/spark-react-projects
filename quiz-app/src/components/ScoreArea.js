import React from "react"
import TotalCorrect from "./TotalCorrect"
import TotalIncorrect from "./TotalIncorrect"

const ScoreArea = ({ correct, incorrect }) => {
	return (
		<div className="score-wrapper">
			<TotalCorrect correct={correct} />
			<TotalIncorrect incorrect={incorrect} />
		</div>
	)
}

export default ScoreArea
