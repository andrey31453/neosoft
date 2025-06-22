import { getTasks } from '@/services/tasks/tasks.servce.js'
import { createStore } from 'vuex'

export default createStore({
	namespace: true,
	name: 'tasks',

	state: {
		tasks: [{ id: 4 }, { id: 5 }],
	},

	getters: {
		doubleCount(state) {
			return () => state.tasks
		},
	},

	mutations: {
		increment(state) {
			console.log('state')
		},
	},

	actions: {
		async asyncIncrement({ state }) {
			const tasks = await getTasks()
			if (!tasks) return

			state.tasks = tasks
		},
	},
})
