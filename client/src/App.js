import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import Game from './components/Game'

import './App.scss'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isAuthenticated: false,
		}
	}

	setAuthentificated = bool => {
		this.setState({ isAuthenticated: bool })
		console.log('triggred')
	}

	render() {
		const { isAuthenticated } = this.state
		return (
			<React.Fragment>
				<Router>
					<div className="container">
						<Switch>
							<Route exact path={'/home'} component={Home} />
							<Route path={'/Game'} component={Game} />
						</Switch>
					</div>
				</Router>
			</React.Fragment>
		)
	}
}
export default App
