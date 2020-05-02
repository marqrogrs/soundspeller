import axios from 'axios'

const url = 'http://localhost:4000/api'
export function fetchLesson(id) {
	// console.log('fetching', url + `/lessons/${id}`)
	return axios.get(url + '/lessons', { params: { id } })
}

export function fetchAllLessons() {
	return axios.get(url + '/lessons')
}

export function fetchWords(ids) {
	const idsStr = ids.reduce((id, str) => str + ',' + id, '')
	// console.log(url + `/word?id=${idsStr}`)
	return axios.get(url + `/word?id=${idsStr}`)
}

export function fetchWord(id) {
	return axios.get(url + `/word?id=${id}`)
}
