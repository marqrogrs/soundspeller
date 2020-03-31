import React, { Component, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import Game from './components/Game'

import './App.scss'
import { fetchLesson } from './api'

const App = props => {
	const setAuthentificated = bool => {
		this.setState({ isAuthenticated: bool })
		console.log('triggred')
	}

	useEffect(() => {
		fetchLesson('1.1')
			.then(res => console.log(res.data))
			.catch(err => console.log(err))
	}, [])

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
export default App
