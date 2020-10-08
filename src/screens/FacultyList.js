import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const FacultyList = () => {
  const faculty = [
    { name: 'Dr. Muhammad Mahbub Alam', desig: 'Professor' },
    { name: 'Dr. Hasanul Kabir', desig: 'Professor' },
    { name: 'Dr. Fazlul Hasan Siddiqui', desig: 'Professor' },
    { name: 'Dr. MD. Abdul Hakim Khan', desig: 'Professor' },
    { name: 'Mohayeminul Islam', desig: 'Asst. Professor' },
    { name: 'Shohel Ahmed', desig: 'Asst. Professor' },
    { name: 'Ashraful Alam Khan', desig: 'Asst. Professor' },
    { name: 'Tasnim Ahmed', desig: 'Lecturer' },
    { name: 'Lutfun Nahar Lota', desig: 'Lecturer' },
  ];

  return (
    <View style={styles.viewStyle}>
      <FlatList       
        showsVerticalScrollIndicator={false}        
        keyExtractor={prog => faculty.name}        
        data={faculty}       
        renderItem={({ item }) => {
          return (    
            <Text style={styles.listStyle}>           
              {item.name}, {item.desig}              
            </Text>          
          );          
        }}        
      />
    </View>
    
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "white",
  },
  listStyle: {
    fontSize: 18,
    color: "black",
    textAlign: "left",
    marginVertical: 25,
  },
});

export default FacultyList;
