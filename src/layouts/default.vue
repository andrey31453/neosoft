<script setup lang="ts">
import TheHeader from '@/components/layout/TheHeader.vue';
import TheMain from '@/components/layout/TheMain.vue';
import TheFooter from '@/components/layout/TheFooter.vue';
</script>

<template>
	<TheHeader />
	<TheMain>
		<RouterView />
	</TheMain>
	<TheFooter />
</template>
