import { useTheme } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Box from '../components/Box';

export default function Home() {
	const { colors } = useTheme();
	return (
		<SafeAreaView
			style={[styles.safeArea, { backgroundColor: colors.background }]}
		>
			<View>
				<Box
					title="v1.0.0"
					date="May 2, 2024"
					description={`\nWelcome to the very first release of Offiffy!\nWe're excited to have you on board.`}
				/>
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
