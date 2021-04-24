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

export default class DinnerScreen extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <TouchableOpacity style = {styles.button}>
                 <Text style = {styles.buttonText}>
                       RagdaPattice
                </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.button}>
                <Text style = {styles.buttonText}>
                Pizza
                </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.button}>
                <Text style = {styles.buttonText}>
                PavBhaji
                </Text>
                </TouchableOpacity>
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