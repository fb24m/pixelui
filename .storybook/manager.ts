import { addons } from '@storybook/manager-api'
import { themes } from '@storybook/theming'
import { pixelDarkTheme } from './brand-theme';

addons.setConfig({
	theme: pixelDarkTheme,
	sidebar: {}
});