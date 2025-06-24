<script setup lang="ts">
import { useZodErrorMap } from '@/composables/zod/error-map'
import { useTheme } from '@/shared/ui/kit/theme'

useTheme('light')
useZodErrorMap()
</script>

<template>
	<RouterView />
</template>
