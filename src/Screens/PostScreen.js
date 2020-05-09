import React, {Component} from 'react'
import {View,Text,StyleSheet, Image ,ScrollView, StatusBar} from 'react-native'
import * as firebase from 'firebase'


class PostScreen extends Component{

    render(){
        return(

           
        
            <View style={styles.container}> 
            <StatusBar barStyle="dark-content" />
        
                <Text style={styles.text}>Post de Images </Text>
                <ScrollView>
                <View style={styles.Images}>
                    <Image style={{width:340, height:350,marginTop:20}}source={require('../Images/numero1.jpg')}/>
                    <Image style={{width:340, height:350,marginTop:20}}source={require('../Images/numero2.jpg')}/>
                    <Image style={{width:340, height:350,marginTop:20}}source={require('../Images/numero3.jpg')}/>
                    <Image style={{width:340, height:350,marginTop:20}}source={require('../Images/numero4.jpg')}/>

                </View>
                </ScrollView>
                
            </View>

        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    },

    
    text:{
        marginTop:70,
        fontSize:20
    },
    Images:{
        flexDirection:'column'
    }
});

export default PostScreen