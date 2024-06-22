import { useTheme } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';

export default function Settings() {
	const { colors } = useTheme();
	return (
		<SafeAreaView
			style={[styles.safeArea, { backgroundColor: colors.background }]}
		>
			<View>
				<Text style={{ fontSize: 16, color: colors.text }}>Settings</Text>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
});
