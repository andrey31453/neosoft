<script setup lang="ts">
import IconCheck from '@/components/icons/IconCheck.vue'
import IconTrash from '@/components/icons/IconTrash.vue'
import IconX from '@/components/icons/IconX.vue'
import Button from '@/shared/ui/kit/Button.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const filteredTasks = computed(() => store.getters['tasks/filteredTasks'])
</script>

<template>
	<TransitionGroup
		class="the-tasks"
		name="list"
		tag="div"
	>
		<div
			v-for="task in filteredTasks()"
			:key="task.id"
			class="the-tasks--elem"
			:class="[
				'the-tasks--elem',
				{
					'--is-completed': task.completed,
				},
			]"
			@click="store.dispatch('tasks/toogleTask', task)"
		>
			<component
				:is="task.completed ? IconCheck : IconX"
				:class="[
					'the-tasks--icon',
					{
						'--is-completed': task.completed,
						'--not-completed': !task.completed,
					},
				]"
			/>

			<span>
				{{ task.title }}
			</span>

			<Button
				fit
				@click.stop="store.dispatch('tasks/deleteTask', task.id)"
			>
				<IconTrash class="the-tasks--icon" />
			</Button>
		</div>
	</TransitionGroup>
</template>

<style scoped lang="scss">
.the-tasks {
	display: grid;
	gap: 0.5rem;

	&--elem {
		width: 100%;
		padding: 0.5rem;

		display: grid;
		grid-template-columns: max-content 1fr max-content;
		align-content: center;
		align-items: center;
		gap: 1rem;

		border-radius: 0.5rem;
		cursor: pointer;

		&.--is-completed {
			color: var(--color-text-200);
			text-decoration: line-through;
		}
		&:hover {
			background: var(--color-primary-200);
		}
	}

	&--icon {
		width: 1rem;
		height: 1rem;

		&.--is-completed {
			color: var(--color-text-200);
		}
		&.--not-completed {
			color: var(--color-error);
		}
	}
}
</style>
