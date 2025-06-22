import { ITask } from './tasks.schema.js'

export const _getTasks = (): ITask[] => {
	const stringTasks = localStorage.getItem('tasks')
	const parseTasks = stringTasks === null ? [] : JSON.parse(stringTasks)
	return parseTasks
}

export const _setTasks = (tasks: ITask[]) => {
	localStorage.setItem('tasks', JSON.stringify(tasks))
}
