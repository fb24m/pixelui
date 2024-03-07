import { create } from '@storybook/theming/create';

export const pixelDarkTheme = create({
	base: 'dark',
	brandTitle: 'Pixel UI',
	brandUrl: '/',
	brandImage: 'https://storybook.js.org/images/placeholders/350x150.png',
	brandTarget: '_self',

	'fontBase': '"Pixel Code", sans-serif',
	'fontCode': '"Pixel Code", sans-serif',

	appBg: '#000',
	appContentBg: '#11141d',
	appPreviewBg: '#11141d',
	textColor: '#fff',

	colorPrimary: '#11141d',
	colorSecondary: '#11141d',
	barBg: '#11141d',
	appBorderRadius: 0,
	inputBorderRadius: 0
});