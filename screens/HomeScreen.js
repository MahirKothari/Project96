import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Modal,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
  ImageBackground
} from "react-native";
import db from "../config";
import firebase from "firebase";

import { Icon } from "react-native-elements";
import { RFValue } from "react-native-responsive-fontsize";
import MyHeader from "../components/MyHeader";
import DinnerScreen from "./DinnerScreen";

export default class HomeScreen extends Component{
render(){
    return(
        <View>
          <ImageBackground source = {require('../assets/BackgroundRecipe.png')} style = {{width:'100%',height:'100%'}}>

          
        <MyHeader title = 'Meals'>
        

        </MyHeader>
        <TouchableOpacity style = {styles.button} onPress = {()=>{
          this.props.navigation.navigate('DinnerScreen')
        }}>
          <Text styles = {styles.buttonText}>
            Dinner
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style = {[styles.button,{marginLeft:200,marginTop:30, backgroundColor:'orange'}]}>
          <Text styles = {styles.buttonText}>
            Lunch
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style = {[styles.button,{marginTop:30, backgroundColor:'green'}]}>
          <Text styles = {styles.buttonText}>
            BreakFast
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style = {[styles.button,{marginLeft:200,marginTop:30, backgroundColor:'red'}]}>
          <Text styles = {styles.buttonText}>
           Snack
          </Text>
        </TouchableOpacity>
        </ImageBackground>
        </View>
    )
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f27466",
  },
  loginBox: {
    width: "80%",
    height: RFValue(50),
    borderWidth: 1.5,
    borderColor: "#ffffff",
    fontSize: RFValue(20),
    paddingLeft: RFValue(10),
  },
  button: {
    width: "50%",
    marginTop:15,
    height: RFValue(130),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(25),
    backgroundColor: "#5eadd1",
    shadowColor: "#000",
    marginBottom:RFValue(10),
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10.32,
    elevation: 16,
  },
  buttonText: {
    color: "#f05e54",
    fontWeight: "200",
    fontSize: RFValue(20),
  }
})