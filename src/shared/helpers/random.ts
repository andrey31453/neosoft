export const random = () => {
	return Math.round(Math.random() * 10 ** 9)
}

let id = 0
export const useID = () => {
	return 'id-' + id++
}
