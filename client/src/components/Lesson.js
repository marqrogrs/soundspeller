import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import Question from './Inputs/Question'
import Game from './Game'
import '../css/Home.css'
import { fetchLesson } from '../api'

const Lesson = props => {
	console.log('Lesson in ', props)
	const location = useLocation()

	// constructor(props) {
	// 	super(props)

	// 	state = {
	// 		words: [
	// 			{
	// 				word: 'abandon',
	// 				grap: 'A,B,A,N,D,O,N',
	// 				phon: 'EY-B AE N D-AAN N',
	// 				syll: 'a.band.on',
	// 			},
	// 		],
	// 		playerAnswer: '',
	// 		level: 1,
	// 	}
	// }

	// Questions Component
	// const check = () => {
	// 	state.words.length > 0
	// 		? props.history.push({
	// 				pathname: `${process.env.PUBLIC_URL}/game`,
	// 				state: state,
	// 		  })
	// 		: console.log('nope')
	// }

	// const handleQuestions = e => {
	// 	e.preventDefault()
	// 	let textarea = document.getElementById('textarea').value.split(/[\s,]+/)

	// 	if (textarea.includes('')) {
	// 		textarea = textarea.filter(i => {
	// 			return i !== ''
	// 		})
	// 	}

	// 	setState({ words: textarea })
	// 	setTimeout(check, 100)
	// }

	// const handleLevel = e => {
	// 	const level = e.target
	// 	setState({ level: parseInt(level.innerText.replace('Level ', '')) })
	// 	document
	// 		.getElementsByClassName('btn-primary')[0]
	// 		.classList.replace('btn-primary', 'btn-outline-primary')

	// 	level.classList.replace('btn-outline-primary', 'btn-primary')
	// }

	useEffect(() => {
		const _id = location.pathname.split('/').reverse()[0] // TODO: Find a cleaner way to get ID
		fetchLesson(_id).then(res => console.log(res))
	}, [location])
	return (
		<div className="Home">
			<h1>Lesson </h1>
			<div className="main">
				<Question handleQuestions={() => {}} handleLevel={() => {}} />
				<Game />
			</div>
		</div>
	)
}

export default Lesson
