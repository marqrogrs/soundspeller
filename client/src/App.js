import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Lesson from './components/Lesson'
import './App.scss'
import Sidebar from './components/Sidebar'

const App = () => {
	return (
		<React.Fragment>
			<Router>
				<div className="flexRow">
					<Sidebar />
					<div className="App">
						<Switch>
							<Route path={`/lesson/:lessonId`}>
								<Lesson />
							</Route>

							{/* <Route path={'/Game'} component={Game} /> */}
						</Switch>
					</div>
				</div>
			</Router>
		</React.Fragment>
	)
}
export default App
