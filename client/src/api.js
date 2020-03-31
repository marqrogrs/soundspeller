import axios from 'axios'

const url = 'http://localhost:4000/api'
export function fetchLesson(id) {
	console.log('fetching', id)
	return axios.get(url + '/lessons', { params: { id } })
}
