import React from 'react'
import PropTypes from 'prop-types'

const Answer = ({ placeholder, handlePlayerInput }) => {
	return (
		<React.Fragment>
			<div className="form-group">
				<label style={{ textAlign: 'center' }} htmlFor="Answer">
					Speed
				</label>
        <input style={{width: '100%'}} type="range"/>
        <button className="btn primary">Run</button>
				<input
					name="Answer"
					id="answer"
					className="form-control"
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
