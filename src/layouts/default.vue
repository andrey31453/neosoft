<script setup lang="ts">
import ThemeButton from '@/shared/ui/kit/theme/ThemeButton.vue'
</script>

<template>
	<div class="laoyut">
		<header class="header">
			<div class="container">
				<div class="header-content">
					<img
						src="/logo.png"
						class="header__img"
					/>

					<ThemeButton />
				</div>
			</div>
		</header>

		<main>
			<div class="container">
				<RouterView />
			</div>
		</main>

		<footer class="footer">
			<div class="container">
				<span>Какая-то информация @2025</span>
			</div>
		</footer>
	</div>
</template>

<style scoped lang="scss">
@use '@styles/utils';

.laoyut {
	height: 100dvh;
	display: grid;
	grid-template-rows: max-content 1fr max-content;
}

.header {
	position: sticky;
	top: 0;

	background: var(--color-bg-200);
	border-bottom: 1px solid var(--color-bg-200);
	padding: 1rem 0;

	&-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 0.25rem;
	}

	&__img {
		height: 2rem;
	}
}

main {
	height: 100%;
	width: 100%;
	overflow: scroll;
}

.footer {
	@include utils.font('mark');

	position: sticky;
	bottom: 0;

	padding: 1rem 0;
	background: var(--color-bg-200);
	border-top: 1px solid var(--color-bg-200);
}
</style>
