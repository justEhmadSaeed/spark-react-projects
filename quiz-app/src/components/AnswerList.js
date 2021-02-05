import React from "react"
import Answer from "./Answer"
const AnswerList = ({ handleClick, dataSet }) => {
	const options = dataSet.options.map((op, key) => (
		<Answer handleClick={handleClick} key={key} choice={key} answer={op} />
	))
	return <div>{options}</div>
}

export default AnswerList
