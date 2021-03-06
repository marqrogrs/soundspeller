import React from 'react'

import Levels from './Levels'

const Question = ({ handleQuestions, handleLevel }) => {
	return (
		<React.Fragment>
			<div className="form-group">
				<label htmlFor="words">Type some words</label>
				<textarea
					id="textarea"
					name="words"
					className="form-control"
					required
				></textarea>
				<label htmlFor="submit"></label>

				<Levels handleLevel={handleLevel} />
			</div>
		</React.Fragment>
	)
}

export default Question
