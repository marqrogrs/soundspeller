import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import Game from './components/Game'

import './App.scss'
import Sidebar from './components/Sidebar'

const App = () => {
	return (
		<React.Fragment>
			<Router>
				<div className="App">
					<Switch>
						<Sidebar />
						<Route exact path={'/home'} component={Home} />
						<Route path={'/Game'} component={Game} />
					</Switch>
				</div>
			</Router>
		</React.Fragment>
	)
}
export default App
