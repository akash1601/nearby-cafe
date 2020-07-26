import React from 'react'
import { StyleSheet, Text, SafeAreaView } from 'react-native'
import { HomeScreen } from './app/screens'
import Constants from 'expo-constants';
import 'react-native-gesture-handler';

export default class App extends React.Component {
  state = {
    showApp: false,
  }
  showApp = () => {

     this.setState({showApp: true})
   }
	render() {
    if (this.state.showApp) return 	<HomeScreen />
			
		
		return (
			<View style={styles.container}>
      <Button title = "Nearby Cafes and Restaurants" onPress={this.showApp}/>
      </View>
		);
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
    marginTop: 100,
 
		justifyContent: 'flex-start'
	}
})
