import { IThemeConfig } from '../types.js'
import { defaultTheme } from './default.js'

export const lightTheme = {
	...defaultTheme,
	color: {
		'primary': 'green',
		'primary-200': 'green',
		'bg': 'white',
		'bg-200': 'gray',
		'text': 'black',
		'text-200': 'black',
	},
} as IThemeConfig
