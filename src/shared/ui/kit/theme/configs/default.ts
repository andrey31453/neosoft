import { IThemeConfig } from '../types.js';

export const defaultTheme: Partial<IThemeConfig> = {
	size: {
		xs: '.75rem',
		sm: '.875rem',
		base: '1rem',
		lg: '1.125rem',
		xl: '1.25rem',
		'2xl': '1.375rem',
		'3xl': '1.5rem',
	},
	animation: {
		time: 120,
		method: 'linear',
	},
};
