<template>
	<main class="main container">
		<slot />
	</main>
</template>

<style lang="scss">
.main {
	min-height: calc(100dvh - 90px - 75px);
}
</style>
