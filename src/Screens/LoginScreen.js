import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  StatusBar,
  LayoutAnimation,
  Image
} from "react-native";
import * as firebase from "firebase";

class LoginScreen extends Component {

    static navigationOptions = {
        header: null
    };

  state = {
    Email: "",
    Password: "",
    errorMessage: null,
  };

  handleLogin = () => {
    const { Email, Password } = this.state;

    firebase
      .auth()
      .signInWithEmailAndPassword(Email, Password)
      .catch((Error) => this.setState({ errorMessage: Error.message }));
  };

  render() {
       
      LayoutAnimation.easeInEaseOut();
    return (
      <View style={styles.container}>

        <StatusBar barStyle="dark-content"></StatusBar>

        <View style={styles.MEAV}>

           <Text style={styles.txtWelcome}>{"Bienvenido/as\n A Veterinaria UDB "}</Text>
           <Image style={styles.Image} source={require('../Images/udb_logo2.png')} ></Image>
        </View>


       

        <View style={styles.errorMessage}>
          {this.state.errorMessage && (
            <Text style={styles.error}>{this.state.errorMessage}</Text>
          )}
        </View>

        <View style={styles.form}>
          <View style={{ marginTop: 250 }}>
            <Text style={styles.inputTitle}>Email Address</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              onChangeText={(Email) => this.setState({ Email })}
              value={this.state.Email}
            ></TextInput>
          </View>
          <View style={{ marginTop: 32 }}>
            <Text style={styles.inputTitle}>Password</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              autoCapitalize="none"
              onChangeText={(Password) => this.setState({ Password })}
              value={this.state.Password}
            ></TextInput>
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
          <Text style={{ color: "#FFF", fontWeight: "500" }}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ alignSelf: "center", marginTop: 32 }}
          onPress={() => this.props.navigation.navigate("Register")}
        >
          <Text style={{ color: "#414959", fontSize: 15 }}>
            New to Veterinaria UDB?{" "}
            <Text style={{ fontWeight: "500", color: "#E9446A" }}>Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  txtWelcome: {
    marginTop: 12,
    marginBottom:15,
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
  },
  errorMessage: {
    height: 72,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30,
  },
  error: {
    color: "#E9446A",
    fontWeight: "600",
    textAlign: "center",
  },
  form: {
    marginBottom: 48,
    marginHorizontal: 30,
  },
  inputTitle: {
    color: "#8A8F9E",
    fontSize: 10,
    textTransform: "uppercase",
  },
  input: {
    borderBottomColor: "#8A8F9E",
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: "#161F3D",
  },
  button: {
    marginHorizontal: 30,
    backgroundColor: "#E9446A",
    borderRadius: 4,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
  },
  MEAV:{
    position:"absolute",
    top:64,
    alignItems:'center',
    justifyContent:'center',
    width:"100%"
},
Image:{
  width:150,
  height:160,
  
}
});

export default LoginScreen;
