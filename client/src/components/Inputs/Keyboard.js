import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import Keyboard from 'react-simple-keyboard'
import 'react-simple-keyboard/build/css/index.css'
import { DEFAULT_BUTTONS_THEME } from '../../constants'

import '../../css/Keyboard.css'

const Layout = ({
	layout = {
		default: [
			'                      {bksp}',
			' q w e r t y u i o p   ',
			' a s d f g h j k l ;  {enter}',
			' z x c v b n m , .  ',
			' {space} ',
		],
	},
	display = {
		'{bksp}': 'delete',
		'{enter}': 'enter',
		'{space}': 'space',
	},
	buttonTheme = DEFAULT_BUTTONS_THEME,
	word,
	onKeyPress,
	updateAnswer,
	deleteAnswer,
}) => {
	const keyboard = useRef()

	const press = (key) => {}

	useEffect(() => {
		const lastTheme = buttonTheme.slice(-1)[0]
		const buttons = lastTheme.buttons
		const className = lastTheme.class
		if (buttons && className) {
			keyboard.current.addButtonTheme(buttons, className)
		}
	}, [buttonTheme])

	return (
		<React.Fragment>
			<Keyboard
				keyboardRef={(r) => (keyboard.current = r)}
				onKeyPress={onKeyPress}
				layout={layout}
				display={display}
				buttonTheme={buttonTheme}
			/>
		</React.Fragment>
	)
}

export default Layout
