import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import Question from './Inputs/Question'
import Game from './Game'
import '../css/Home.css'
import { fetchLesson, fetchWords } from '../api'

const Lesson = props => {
	const [lesson, setLesson] = useState()
	const [words, setWords] = useState()
	const location = useLocation()

	useEffect(() => {
		const id = location.pathname.split('/').reverse()[0] // TODO: Find a cleaner way to get ID
		// console.log(location.pathname)
		fetchLesson(id)
			.then(res => {
				setLesson(res.data)
			})
			.catch(err => console.log(err))
	}, [location])

	useEffect(() => {
		if (!lesson) return
		const ids = lesson.words.map(word => word._id)
		fetchWords(ids).then(res => console.log(res.data))
	}, [lesson])

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

	return (
		<div className="Home">
			<h1>Lesson {lesson?.lesson_id}</h1>
			<div className="main">
				<Question handleQuestions={() => {}} handleLevel={() => {}} />
				<Game />
			</div>
		</div>
	)
}

export default Lesson
