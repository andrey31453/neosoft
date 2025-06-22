<script setup lang="ts">
import Button from '../Button.vue';
import { useTheme } from '../theme';
import IconMoon from './icons/IconMoon.vue';
import IconSun from './icons/IconSun.vue';

const { isDark, changeTheme } = useTheme();
</script>

<template>
	<Button @click="changeTheme">
		<component
			:is="isDark ? IconSun : IconMoon"
			class="icon"
		/>
	</Button>
</template>
