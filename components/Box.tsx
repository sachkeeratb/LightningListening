import React from 'react';
import { SafeAreaView, StyleSheet, useColorScheme, Text } from 'react-native';
import AppDarkTheme from '../themes/AppDarkTheme';
import AppLightTheme from '../themes/AppLightTheme';

interface BoxProps {
	title: String;
	date: String;
	description: String;
}

export default function Box({ title, date, description }: BoxProps) {
	// User's colour scheme
	const colorScheme = useColorScheme();
	const boxStyle = colorScheme === 'light' 
		? styles.boxLight 
		: styles.boxDark;
	const textStyle = colorScheme === 'light'
		? AppLightTheme.colors.text
		: AppDarkTheme.colors.text;

	return (
		<SafeAreaView style={[styles.safeArea, boxStyle]}>
				<Text style={{color: textStyle}}>
					{title}
				</Text>
				<Text style={{color: textStyle}}>
					{date}
				</Text>
			<Text style={{color: textStyle}}>{description}</Text>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeArea: {
		flex: 1
	},
	boxLight: {
		backgroundColor: '#fff',
		borderRadius: 4,
		maxHeight: '50%',
		padding: 12,
		width: 200
	},
	boxDark: {
		backgroundColor: '#333',
		borderRadius: 4,
		maxHeight: '50%',
		padding: 12,
		width: 200
	}
});
