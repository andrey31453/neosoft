<script setup lang="ts">
import { taskFilter } from '@/store/tasks'

const filters = [
	{
		label: 'Все',
		value: taskFilter.all,
	},
	{
		label: 'Выполненные',
		value: taskFilter.completed,
	},
	{
		label: 'Нревыполненные',
		value: taskFilter.notCompleted,
	},
]
</script>

<template>
	<div class="tasks-filter">
		<div
			v-for="filter in filters"
			:key="filter.value"
			:class="[
				'tasks-filter--elem',
				{
					'--active': filter.value === $store.state.tasks.activeFilter,
				},
			]"
			@click="$store.commit('tasks/changeFilter', filter.value)"
		>
			#{{ filter.label }}
		</div>
	</div>
</template>

<style scoped lang="scss">
.tasks-filter {
	display: flex;
	justify-content: flex-start;
	align-content: center;
	gap: 1rem;

	&--elem {
		cursor: pointer;
		&.--active {
			color: var(--color-primary);
		}
	}
}
</style>
