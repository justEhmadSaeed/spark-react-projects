import React from "react"

const Answer = ({ choice, answer, handleClick }) => {
	return (
		<div>
			<button type="button" onClick={() => handleClick(choice)}>
				{answer}
			</button>
		</div>
	)
}

export default Answer
