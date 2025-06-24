import { randomDelay } from '@/shared/helpers/delay.js'
import { errorBoundary } from '@/shared/helpers/service-error-boundary.js'
import { IServiceResponse } from '../types.js'
import { ICreateTask, ITask } from './tasks.schema.js'
import { _getTasks, _setTasks } from './tasks.utils.js'

export const getTasks = errorBoundary(async (): Promise<ITask[]> => {
	await randomDelay()
	return _getTasks()
})

export const addTask = errorBoundary(async (task: ICreateTask): Promise<ITask> => {
	await randomDelay()

	const tasks = _getTasks()
	const newTask = {
		id: Math.random(),
		completed: false,
		...task,
	}
	tasks.push(newTask)
	_setTasks(tasks)

	return newTask
})

export const updateTask = errorBoundary(async (task: ITask): Promise<IServiceResponse> => {
	await randomDelay()

	const tasks = _getTasks()
	const taskIndex = tasks.findIndex((t) => t.id === task.id)
	if (!~taskIndex) throw new Error('Нет таски с id ' + task.id)
	tasks.splice(taskIndex, 1, task)
	_setTasks(tasks)

	return {
		message: 'Успешно',
		code: 200,
	}
})

export const deleteTask = errorBoundary(async (id: number): Promise<IServiceResponse> => {
	await randomDelay()

	const tasks = _getTasks()
	const taskIndex = tasks.findIndex((t) => t.id === id)
	if (!~taskIndex) throw new Error('Нет таски с id ' + id)

	tasks.splice(taskIndex, 1)
	_setTasks(tasks)

	return {
		message: 'Успешно',
		code: 200,
	}
})

export const deleteTasks = errorBoundary(async (): Promise<IServiceResponse> => {
	await randomDelay()
	_setTasks([])

	return {
		message: 'Успешно',
		code: 200,
	}
})
