<script setup lang="ts">
import IconTrash from '@/components/icons/IconTrash.vue'
import Button from '@/shared/ui/kit/Button.vue'
import Input from '@/shared/ui/kit/Input.vue'
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const value = ref('')
const addTask = async () => {
	console.log('addTask: ', addTask)
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
		<Button
			fit
			@click.stop.prevent="store.dispatch('tasks/deleteTasks')"
		>
			<IconTrash class="add-task--icon" />
		</Button>
	</form>
</template>

<style scoped lang="scss">
.add-task {
	display: flex;
	justify-content: center;
	align-content: center;
	gap: 1rem;

	&--icon {
		width: 1.5rem;
		height: 1.5rem;
	}
}
</style>
