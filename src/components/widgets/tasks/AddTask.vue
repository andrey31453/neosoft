<script setup lang="ts">
import Button from '@/shared/ui/kit/Button.vue'
import Input from '@/shared/ui/kit/Input.vue'
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const value = ref('')
const addTask = async () => {
	await store.dispatch('tasks/addTask', value.value)
	value.value = ''
}
</script>

<template>
	<form
		class="add-task"
		@submit.prevent="addTask"
	>
		<Input
			label="Название задачи"
			v-model="value"
		/>
		<Button
			type="submit"
			label="Добавить"
		/>
	</form>
</template>

<style scoped lang="scss">
.add-task {
	display: flex;
	justify-content: center;
	align-content: center;
	gap: 1rem;

	padding: 2rem 0 1rem 0;
	background: var(--color-bg);
}
</style>
