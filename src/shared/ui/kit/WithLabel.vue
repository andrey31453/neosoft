<script setup lang="ts">
import { useID } from '@/shared/helpers/random'

defineProps<{
	label: string
	value: string
}>()
const id = useID()

const addTask = () => console.log('fdsfdsf')
</script>

<template>
	<div class="with-label">
		<label
			:for="id"
			:class="[
				'with-label__label',
				{
					'--active': value.length,
				},
			]"
		>
			<span> {{ label }} </span>
		</label>

		<div class="with-label__slot">
			<slot
				:id="id"
				@focus="addTask"
			/>
		</div>
	</div>
</template>

<style scoped lang="scss">
@use '@styles/utils';

.with-label {
	position: relative;

	&__label {
		@include utils.animation();

		position: absolute;
		inset: 0.5rem 0.75rem 0.5rem 0.75rem;

		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	&__label.--active {
		font-size: var(--size-xs);
		inset: 0.5rem 0.75rem 2rem 0.75rem;
	}

	&__slot {
	}
}
</style>
