<script setup lang="ts">
import IconTrash from '@/components/icons/IconTrash.vue'
import { useValidate } from '@/composables/zod/validate'
import { CreateTaskSchema } from '@/services/tasks/tasks.schema'
import Button from '@/shared/ui/kit/Button.vue'
import Input from '@/shared/ui/kit/Input.vue'
import { useStore } from 'vuex'

const store = useStore()

const { values, errors, handleSubmit, meta, resetForm } = useValidate(CreateTaskSchema)
const addTask = handleSubmit(async () => {
	await store.dispatch('tasks/addTask', values.title)
	resetForm()
})
</script>

<template>
	<form
		class="add-task"
		@submit.prevent="addTask"
	>
		<Input
			label="Название задачи"
			:error="meta.touched && !meta.valid && errors.title"
			v-model="values.title"
		/>
		<Button
			type="submit"
			label="Добавить"
			:disabled="meta.touched && !meta.valid"
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

	padding-bottom: 1rem;

	&--icon {
		width: 1.5rem;
		height: 1.5rem;
	}
}
</style>
