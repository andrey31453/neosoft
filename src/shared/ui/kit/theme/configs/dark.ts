import { IThemeConfig } from '../types.js'
import { defaultTheme } from './default.js'

export const darkTheme = {
	...defaultTheme,
	color: {
		'primary': 'red',
		'primary-200': 'red',
		'bg': 'white',
		'bg-200': 'gray',
		'text': 'black',
		'text-200': 'black',
	},
} as IThemeConfig
