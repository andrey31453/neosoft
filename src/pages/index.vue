<script setup lang="ts">
import AddTask from '@/components/widgets/tasks/AddTask.vue'
import TasksFilter from '@/components/widgets/tasks/TasksFilter.vue'
import TheTasks from '@/components/widgets/tasks/TheTasks.vue'
import { useStore } from 'vuex'

const store = useStore()
store.dispatch('tasks/load')
</script>

<template>
	<div class="tasks">
		<AddTask class="tasks--add" />
		<TasksFilter />
		<TheTasks />
	</div>
</template>

<style scoped lang="scss">
.tasks {
	height: 100%;

	display: grid;
	grid-template-rows: max-content 1fr;
	justify-content: center;
	align-content: center;
	gap: 1.5rem;

	&--add {
		position: sticky;
		top: 0;
	}
}
</style>
