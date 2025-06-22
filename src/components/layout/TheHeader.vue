<script setup lang="ts">
import ThemeButton from '@/shared/ui/kit/theme/ThemeButton.vue'
</script>

<template>
	<div class="header">
		<div class="header-container container">
			<img
				src="/logo.png"
				class="header__img"
			/>

			<ThemeButton />
		</div>
	</div>
</template>

<style scoped lang="scss">
.header {
	position: sticky;
	top: 0;

	background: var(--color-bg);
	border-bottom: 1px solid var(--color-bg-200);
	padding: 1rem 0;

	&-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 0.25rem;
	}

	&__img {
		height: 2rem;
	}
}
</style>
