<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

onMounted(() => {
	store.dispatch('tasks/asyncIncrement')
})

console.log('store: ', store)

const doubleCount = computed(() => store.getters['doubleCount'])
console.log('doubleCount: ', doubleCount.value)

const tasks = computed(() => store.state.tasks.tasks)
console.log('tasks: ', tasks.value)
</script>

<template>
	<div>
		<div
			v-for="task in tasks"
			:key="task.id"
		>
			{{ task.title }}
		</div>
	</div>
</template>
