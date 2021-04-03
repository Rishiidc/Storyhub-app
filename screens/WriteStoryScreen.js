import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import {Header, Icon} from  'react-native-elements'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import db from '../config'
import firebase from 'firebase'
import { Touchable } from 'react-native';

export default class WriteStory extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            title : '',
            author : '',
            story : ''
        }
    }
    submitStory(){
      db.collection('story').add({
        title:this.state.title,author:this.state.author,story:this.state.story
      })
      this.setState({title:'',author:'',story:''})
    
    return alert("Story is added")
      }
    render(){
        return(
            <View style = {{flex : 1}}>
              <KeyboardAvoidingView>
              <SafeAreaProvider>
                <Header
                centerComponent = {{text : "Write your story here", style : {color : "purple" , fontSize: 50}}}
                rightComponent = {{icon : "home", color : "blue"}}/>
                 <View style = {styles.keyBoardStyle}>
                <TextInput style = {styles.formTextInput} placeholder = "title" placeholderTextColor = "blue" onChangeText = {Text =>{this.setState({title : Text})}}/>
                <TextInput style = {styles.formTextInput} placeholder = "author" placeholderTextColor = "blue" onChangeText = {Text =>{this.setState({author : Text})}}/>
                <TextInput style = {[styles.formTextInput, {height : 300}]} placeholder  = "story" multiline = {true} placeholderTextColor = "blue" onChangeText = {Text =>{this.setState({story : Text})}}/>
                <TouchableOpacity
       style = {styles.submitButton}
       onPress = {()=>this.submitStory()}
       >
        <Text style = {styles.buttontext}>Submit</Text>
   </TouchableOpacity> 
            </View>
            </SafeAreaProvider>
            </KeyboardAvoidingView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    keyBoardStyle : {
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor : 'green'
    },
    formTextInput:{
      width:"50%",
      height:35,
      alignSelf:'center',
      borderColor:'#ffab91',
      borderRadius:10,
      borderWidth:1,
      marginTop:20,
      padding:10,
    },
    button:{
      width:"75%",
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10,
      backgroundColor:"#ff5722",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,
      elevation: 16,
      marginTop:20
      },
    }
  )