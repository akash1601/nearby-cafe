import React from 'react'
import { StyleSheet, Text, SafeAreaView } from 'react-native'
import { HomeScreen } from './app/screens'

export default class LoginScreen extends React.Component {
	render() {
		return (
			<SafeAreaView style={styles.container}>
				<Text>Welcome </Text>
			</SafeAreaView>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		justifyContent: 'flex-start'
	}
})

