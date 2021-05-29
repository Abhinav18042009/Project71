import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import AppHeader from '../AppHeader';
import db from '../config';
import firebase from 'firebase';

export default class WriteStoryScreen extends React.Component{

    submitStory = () => {
    }

    render(){
        return(
            <View style = {styles.container}>
                <AppHeader />
                <View>
                    <TextInput style = {styles.inputBox}
                     placeholder = 'Title Of The Story'/>
                    <TextInput style = {styles.inputBox}
                    placeholder = 'Author Of The Story'/>
                    <TextInput style = {styles.inputStory}
                    placeholder = 'Write The Story'
                    multiline={true}/>
                </View>
                <TouchableOpacity style = {styles.submitButton}
                onPress = {this.submitStory}>
                    <Text style = {styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:5,
    },
    inputBox:{
        alignSelf:'center',
        borderWidth:4,
        marginTop:15,
        width:450,
    },
    inputStory:{
        alignSelf:'center',
        borderWidth:4,
        marginTop:20,
        width:450,
        height:450,
    },
    submitButton:{
        alignSelf:'center',
        borderWidth:2,
        backgroundColor:'grey',
        marginTop:20,
    },
    submitButtonText:{
        fontSize:24
    }
})