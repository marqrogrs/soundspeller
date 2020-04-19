import React, { useEffect, useState } from 'react'
import '../css/Index.css'
import { fetchAllLessons } from '../api'

import Loading from './common/Loading'
import { Link } from 'react-router-dom'
import '../css/Sidebar.css'

const Sidebar = () => {
	const [lessons, setLessons] = useState()
	const [currentLesson, setCurrentLesson] = useState()

	const sortByLessonId = (a, b) => {
		return a.lesson_id <= b.lesson_id ? -1 : 1
	}

	useEffect(() => {
		fetchAllLessons().then(res => setLessons(res.data.sort(sortByLessonId)))
	}, [])

	if (!lessons) return <Loading />

	return (
		<nav id="Sidebar">
			<div className="sidebar-header">
				<h3>Lessons:</h3>
			</div>

			<ul className="list-unstyled components">
				{lessons.map(lesson => (
					<li className="active">
						<Link to={`/lesson/${lesson._id}`} activeClassName="active">
							Lesson {lesson.lesson_id}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Sidebar
