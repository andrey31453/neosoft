<template>
	<div class="footer">
		<div class="footer-container container">
			<span>Какая-то информация. @2025</span>
		</div>
	</div>
</template>

<style lang="scss">
@use '@styles/utils';

.footer {
	@include utils.font('mark');

	position: sticky;
	bottom: 0;

	padding: 1rem 0;
	background: var(--color-bg);
	border-top: 1px solid var(--color-bg-200);
}
</style>
