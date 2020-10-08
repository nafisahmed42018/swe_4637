import React from 'react';
import {Text, StyleSheet, View,Image,TouchableOpacity, Button } from 'react-native';


const HomeScreen = ({navigation}) => {
  
  return (
    <View>

      <Image style={styles.imageStyle} source={require('../../assets/IUT_logo.png')} />

      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <Text style={styles.textStyle}>My Profile</Text>
      </TouchableOpacity>  

      <Button title="Semesterwise Course List" onPress={() => navigation.navigate("Semester")} /> 
      <Button title="List of Faculty Members" onPress={() => navigation.navigate("Faculty")} />
      
    </View>
    
    );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,   
    color: "black",        
    textAlign: "center", 
    marginVertical: 30
    
  },  
  imageStyle: {
    alignSelf: 'center',
    marginVertical: 10
  },  
});

export default HomeScreen;