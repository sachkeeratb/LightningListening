import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import {
	MD3LightTheme as BottomLightTheme,
	MD3DarkTheme as BottomDarkTheme,
	PaperProvider,
	BottomNavigation
} from 'react-native-paper';
import { Material3Theme, useMaterial3Theme } from '@pchmn/expo-material3-theme';

// Screens
import Home from './screens/Home';
import Library from './screens/Library';
import Settings from './screens/Settings';

// Themes
import AppDarkTheme from './themes/AppDarkTheme';
import AppLightTheme from './themes/AppLightTheme';
import ThemeContext from './themes/ThemeContext';
import { useColorScheme } from 'react-native';

// Routes to screens
const HomeRoute = () => <Home />;
const LibraryRoute = () => <Library />;
const SettingsRoute = () => <Settings />;

export default function App() {
	// User's colour scheme
	const colorScheme = useColorScheme();

	// Themes
	const [theme, setTheme] = React.useState(colorScheme);
	const themeData = { theme, setTheme };
	const { theme: bottomNavTheme }: { theme: Material3Theme } =
		useMaterial3Theme();
	const paperTheme =
		colorScheme === 'light'
			? { ...BottomLightTheme, colors: bottomNavTheme.light }
			: { ...BottomDarkTheme, colors: bottomNavTheme.dark };

	// Bottom Tab Navigation
	const [index, setIndex] = React.useState(0);
	const [routes] = React.useState([
		{
			key: 'home',
			focusedIcon: 'home',
			unfocusedIcon: 'home-outline'
		},
		{
			key: 'library',
			focusedIcon: 'book',
			unfocusedIcon: 'book-outline'
		},
		{
			key: 'settings',
			focusedIcon: 'cog',
			unfocusedIcon: 'cog-outline'
		}
	]);

	// Render the scene based on the route
	const renderScene = BottomNavigation.SceneMap({
		home: HomeRoute,
		library: LibraryRoute,
		settings: SettingsRoute
	});

	// The App
	return (
		<SafeAreaProvider>
			<ThemeContext.Provider value={themeData}>
				<PaperProvider theme={paperTheme}>
					<NavigationContainer
						theme={colorScheme === 'light' ? AppLightTheme : AppDarkTheme}
					>
						<BottomNavigation
							navigationState={{ index, routes }}
							onIndexChange={setIndex}
							renderScene={renderScene}
						/>
					</NavigationContainer>
				</PaperProvider>
			</ThemeContext.Provider>
		</SafeAreaProvider>
	);
}
