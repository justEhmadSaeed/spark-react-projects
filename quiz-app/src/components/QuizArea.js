import React from "react"
import Question from "./Question"
import AnswerList from "./AnswerList"
import UserGreeting from "./UserGreeting"
const QuizArea = ({ handleClick, isFinished, dataSet, correct }) => {
	if (isFinished) return <UserGreeting correct={correct} />

	return (
		<div>
			<h2>Quiz Area</h2>
			<Question dataSet={dataSet} />
			<AnswerList handleClick={handleClick} dataSet={dataSet} />
		</div>
	)
}

export default QuizArea
