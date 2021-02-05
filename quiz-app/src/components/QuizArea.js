import React from "react"
import Question from "./Question"
import AnswerList from "./AnswerList"
import UserGreeting from "./UserGreeting"
const QuizArea = ({ handleClick, isFinished, dataSet }) => {
	if (isFinished) return <UserGreeting />

	return (
		<div>
			<h2>Quiz Area</h2>
			<Question dataSet={dataSet} />
			<AnswerList handleClick={handleClick} dataSet={dataSet} />
		</div>
	)
}

export default QuizArea
