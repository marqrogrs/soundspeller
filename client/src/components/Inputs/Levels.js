import React from 'react'

const Levels = ({ handleLevel }) => {
	return (
		<React.Fragment>
			<div>
				<div className="btn-group" role="group" aria-label="Basic example">
					<button
						type="button"
						onClick={handleLevel}
						className="btn btn-primary"
					>
						Level 1
					</button>
					<button
						type="button"
						onClick={handleLevel}
						className="btn btn-outline-primary"
					>
						Level 2
					</button>
					<button
						type="button"
						onClick={handleLevel}
						className="btn btn-outline-primary"
					>
						Level 3
					</button>
					<button
						type="button"
						onClick={handleLevel}
						className="btn btn-outline-primary"
					>
						Level 4
					</button>
				</div>
			</div>
		</React.Fragment>
	)
}

export default Levels
