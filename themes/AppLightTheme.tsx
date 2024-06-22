// Light Theme
import { DefaultTheme } from '@react-navigation/native';

const AppLightTheme = {
	...DefaultTheme,
	dark: false,
	headerShown: false,
	colors: {
		...DefaultTheme.colors,
		text: '#616161',
		card: '#f9f9f9',
		border: '#9F9F9F',
		primary: '#333333',
		background: '#dedede'
	}
};

export default AppLightTheme;
