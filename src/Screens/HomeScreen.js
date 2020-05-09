import React, {Component} from 'react'
import { View, TouchableOpacity, Text, StyleSheet, LayoutAnimation } from 'react-native'
import * as firebase from 'firebase'

class HomeScreen extends Component{

    state = {
        email : "",
        displayName : ""
    }

    componentDidMount(){
            const {email, displayName} = firebase.auth().currentUser;

            this.setState({email, displayName});
    }

    signOutUser = () => {
        firebase.auth().signOut(); 
    }



    render(){

        LayoutAnimation.easeInEaseOut();
        return(

            <View style={styles.container}>
                    <Text>
                        hello!! {this.state.email}!!!!!
                    </Text>

                    <TouchableOpacity style={{marginTop:32}} onPress={this.signOutUser}>
                        <Text>
                            Sign Out
                        </Text>

                    </TouchableOpacity>
            </View>

        )
    }
}

const styles= StyleSheet.create({

        container:{
            flex:1,
            alignItems:'center',
            justifyContent:'center'
            
        }

})


export default HomeScreen