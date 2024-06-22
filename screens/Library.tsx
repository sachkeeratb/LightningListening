import { useTheme } from '@react-navigation/native';
import {
	SafeAreaView,
	StyleSheet,
	View,
	Button,
	Alert,
	TouchableOpacity,
	Text,
	useColorScheme
} from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { StatusBar } from 'expo-status-bar';
import AppDarkTheme from '../themes/AppDarkTheme';
import AppLightTheme from '../themes/AppLightTheme';

export default function Library() {
	const { colors } = useTheme();

	const colorScheme = useColorScheme();
	const boxStyle = colorScheme === 'light' 
		? styles.boxLight 
		: styles.boxDark;
	const textStyle = colorScheme === 'light'
		? AppLightTheme.colors.text
		: AppDarkTheme.colors.text;

	return (
		<SafeAreaView
			style={[styles.safeArea, { backgroundColor: colors.background }]}
		>
			<StatusBar style="auto" />
			<View style={[styles.wrapper, boxStyle]}>
				<TouchableOpacity onPress={() => {
						Alert.alert('+');
					}}>
					<Text style={[styles.addButtonText, {color: textStyle}]}>+</Text>
				</TouchableOpacity>
				<View style={{ marginVertical: 10 }} />
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
	},
	wrapper: {
		borderRadius: 30,
		paddingVertical: 10,
		paddingHorizontal: 20
	},
	boxLight: {
		backgroundColor: '#fff',
		borderRadius: 4,
		maxHeight: '20%',
		padding: 12,
		width: 200
	},
	boxDark: {
		backgroundColor: '#333',
		borderRadius: 4,
		maxHeight: '20%',
		padding: 12,
		width: '30%'
	},
	addButtonText: {
		fontSize: 44
	}
});
