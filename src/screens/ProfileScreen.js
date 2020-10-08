import React from 'react';
import { View, Text, Button, TouchOpacity, Image, StyleSheet } from 'react-native';

const ProfileScreen = () => {
    return (
        <View>

            <Image style={styles.imageStyle} source={require('../../assets/IUT_logo.png')} />

            <Text style={styles.textStyle}>Name : Nafis Ahmed</Text>
            <Text style={styles.textStyle}>ID : 170042018</Text>
            <Text style={styles.textStyle}>Room No: 405 , South Hall of Residence</Text>
            <Text style={styles.textStyle}>Email: nafisahmed@iut-dhaka.edu</Text>
            
        </View>
    );
};


const styles = StyleSheet.create({
  textStyle: {  
    fontSize: 18,    
    color: "black",     
    textAlign: "center",
    marginVertical: 5.
  },   
  imageStyle: {
    alignSelf: "center",
    marginVertical: 35
  },  
});


export default ProfileScreen;