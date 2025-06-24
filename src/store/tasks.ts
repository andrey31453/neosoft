import { ITask } from '@/services/tasks/tasks.schema.js'
import {
	addTask,
	deleteTask,
	deleteTasks,
	getTasks,
	updateTask,
} from '@/services/tasks/tasks.servce.js'
import { useID } from '@/shared/helpers/random.js'

const fakeTasks = () =>
	[...Array(30).keys()].map((_, idx) => ({
		id: useID(),
		completed: Math.random() > 0.5,
		title: 'Задача №' + ++idx,
	}))

export enum taskFilter {
	all,
	completed,
	notCompleted,
}

export default {
	namespaced: true,

	state: {
		tasks: [],
		activeFilter: taskFilter.all,
	},

	getters: {
		filteredTasks(state) {
			return () => {
				switch (state.activeFilter) {
					case taskFilter.completed:
						return state.tasks.filter((task) => task.completed)
					case taskFilter.notCompleted:
						return state.tasks.filter((task) => !task.completed)
					default:
						return state.tasks
				}
			}
		},
	},

	mutations: {
		changeFilter(state, filter: taskFilter) {
			state.activeFilter = filter
		},
	},

	actions: {
		async load({ state }) {
			const tasks = await getTasks()
			if (!tasks) return

			if (!localStorage.getItem('tasks')) {
				const initTasks = fakeTasks()
				localStorage.setItem('tasks', JSON.stringify(initTasks))
				state.tasks = initTasks
				return
			}

			state.tasks = tasks
		},

		async addTask({ state }, title: string) {
			const newTask = await addTask({ title })
			state.tasks.push(newTask)
		},

		async toogleTask({ state }, task: ITask) {
			const currentTask = state.tasks.find(({ id }) => id === task.id)
			if (!currentTask) return

			await updateTask({
				...currentTask,
				completed: !currentTask.completed,
			})
			currentTask.completed = !currentTask.completed
		},

		async deleteTask({ state }, taskID: string) {
			await deleteTask(taskID)

			const taskIndex = state.tasks.findIndex((t) => t.id === taskID)
			if (!~taskIndex) return

			state.tasks.splice(taskIndex, 1)
		},

		async deleteTasks({ state }) {
			await deleteTasks()
			state.tasks = []
		},
	},
}
