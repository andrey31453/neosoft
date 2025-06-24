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
		<div class="tasks--top">
			<AddTask />
			<TasksFilter />
		</div>
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

	&--top {
		position: sticky;
		top: 0;

		display: grid;
		gap: 1.5rem;

		padding: 2rem 0 1rem 0;
		background: var(--color-bg);
	}
}
</style>
