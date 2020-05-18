import React, { Component, useEffect, useState } from 'react'

import Keyboard from './Inputs/Keyboard'
import Answer from './Inputs/Answer'
import { fetchWord, fetchWords } from '../api'
import { playButton } from './common/Miscellaneous'
import { DEFAULT_BUTTONS_THEME } from '../constants'

console.log('relevant')
const TEST_WROD = '5e9743524377480ecf309ec3'
const Game = (props) => {
	const [isDictating, setIsDictating] = useState(false)
	const [buttonsTheme, setButtonsTheme] = useState(DEFAULT_BUTTONS_THEME)
	const [inputValue, setInputValue] = useState('')
	const [word, setWord] = useState(null)

	useEffect(() => {
    fetchWord(TEST_WROD).then((res) => setWord(res.data[0]))
    fetchWords().then(res => console.log(res))
	}, [])

	const speak = (word) => {
		const utterance = new SpeechSynthesisUtterance(word)
		speechSynthesis.speak(utterance)
	}

	const interval = (syll) => {}
	const press = (button) => {
		setButtonsTheme((theme) => [
			...theme,
			{ class: 'pressed', buttons: button },
		])
	}

	const playWord = () => {
		// speak('The word is ' + word.word)
		// press(word.)

		const letters = word.word.toLowerCase().split('')
		press(letters.join(' '))
	}

	const wordHeader = word ? (
		<h3>
			<span>The word is: </span>
			<span style={{ color: 'red' }}>{word.word}</span>
		</h3>
	) : null

	const append = (letter) => setInputValue((prevValue) => prevValue + letter)
	const deleteLetter = () =>
		setInputValue((prevValue) => prevValue.slice(0, -1))

	const onVirtKeyboardKeyPressed = (button) => {
		switch (button) {
			case '{bksp}':
				deleteLetter()
				break
			case '{space}':
				append(' ')
				break
			default:
				append(button)
		}
	}

	const handlePlayerInput = (e) => setInputValue(e.target.value)

	const handleWordDicated = () => {
		setIsDictating(false)
	}

	return (
		<React.Fragment>
			<div className="row">
				{wordHeader}
				<span style={{ cursor: 'pointer' }} onClick={playWord}>
					{playButton}
				</span>
			</div>
			<Answer
				inputValue={inputValue}
				placeholder={'Type the word'}
				handlePlayerInput={handlePlayerInput}
			/>
			<Keyboard
				word={word}
				onKeyPress={onVirtKeyboardKeyPressed}
				onWordDictated={handleWordDicated}
				buttonTheme={buttonsTheme}
			/>
		</React.Fragment>
	)
}

export default Game
