import React ,{Component} from 'react'
import {View,Text,StyleSheet, ActivityIndicator} from 'react-native'
import * as firebase from 'firebase'

class LoadingScreen extends Component{

    componentDidMount() {

        firebase.auth().onAuthStateChanged( user => {
            this.props.navigation.navigate( user ? "App" : "Auth" );
        })
    }

    render(){
        return(
            
            <View style={styles.container}>
                <Text>Loading.......</Text>
                <ActivityIndicator size="large"></ActivityIndicator>
            </View>
        );
    }
}

const styles = StyleSheet.create({

      container:{
          flex:1,
          alignItems:'center',
          justifyContent:'center',
      }  
});

export default LoadingScreen