import React from 'react'
import PropTypes from 'prop-types'

const Answer = ({ placeholder, handlePlayerInput }) => {
	return (
		<React.Fragment>
			<div className="form-group">
				<label htmlFor="Answer">Type your Answer</label>
				<input
					name="Answer"
					id="answer"
					className="form-control"
					placeholder={placeholder}
					onChange={handlePlayerInput}
				/>
			</div>
		</React.Fragment>
	)
}

Answer.propTypes = {
	placeholder: PropTypes.string.isRequired,
	handlePlayerInput: PropTypes.func,
}

export default Answer
