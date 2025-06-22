import { singleton } from '@/shared/helpers/singleton.js'
import { ref } from 'vue'
import { darkTheme } from './configs/dark.js'
import { lightTheme } from './configs/light.js'
import { IThemeConfig, themeVariant } from './types.js'

const configs: Record<themeVariant, IThemeConfig> = {
	light: lightTheme,
	dark: darkTheme,
}

export const useTheme = singleton((variant?: themeVariant, config?: IThemeConfig) => {
	const isDark = ref(false)
	const setTheme = (variant: themeVariant) => {
		const newConfig = config ? Object.assign(configs[variant], config) : configs[variant]
		Object.entries(newConfig).forEach(([key, valueGroup]) => {
			Object.entries(valueGroup).forEach(([subKey, subValue]) => {
				document.documentElement.style.setProperty(`--${key}-${subKey}`, subValue)
			})
		})
	}
	const changeTheme = () => {
		isDark.value = !isDark.value
		isDark.value ? setTheme(themeVariant.DARK) : setTheme(themeVariant.LIGHT)
	}

	const defineTheme = () => {
		if (!variant) return

		isDark.value = variant === themeVariant.DARK ? false : true
		changeTheme()
	}
	defineTheme()

	return {
		isDark,
		changeTheme,
	}
})
