export enum themeVariant {
	LIGHT = 'light',
	DARK = 'dark',
}

export interface IThemeConfig {
	color: {
		'primary': string
		'primary-200': string
		'bg': string
		'bg-200': string
		'text': string
		'text-200': string
	}
	size: {
		'xs': string
		'sm': string
		'base': string
		'lg': string
		'xl': string
		'2xl': string
		'3xl': string
	}

	animation: {
		time: number
		method: string
	}
}
