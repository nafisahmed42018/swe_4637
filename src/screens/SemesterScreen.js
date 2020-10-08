import React from "react";
import {  View, Button } from "react-native";

const sem1=[
    { name: "SWE 4101", key: "1" },
    { name: "HUM 4111", key: "2" },
    { name: "CSE 4121", key: "3" },
    { name: "HUM 4131", key: "4" },
    { name: "Math 4161", key: "5" },
    { name: "CSE 4155", key: "6" },
];

const sem2=[
    { name: "SWE 4201", key: "1" },
    { name: "HUM 4211", key: "2" },
    { name: "CSE 4221", key: "3" },
    { name: "HUM 4231", key: "4" },
    { name: "Math 4261", key: "5" },
    { name: "CSE 4255", key: "6" },
];

const sem3=[
    { name: "SWE 4301", key: "1" },
    { name: "HUM 4311", key: "2" },
    { name: "CSE 4321", key: "3" },
    { name: "HUM 4331", key: "4" },
    { name: "Math 4361", key: "5" },
    { name: "CSE 4355", key: "6" },
];

const SemesterScreen =({navigation}) =>{
    return (
        <View>
            <Button title="First Semester"
            onPress= {() =>navigation.navigate("Courses",{semester:"First Semester", CoursesList: sem1})}/>
            <Button title="Second Semester"
            onPress= {() =>navigation.navigate("Courses",{semester:"Second Semester", CoursesList: sem2})}/>
            <Button title="Third Semester"
            onPress= {() =>navigation.navigate("Courses",{semester:"Third Semester", CoursesList: sem3})}/>

        </View>
    )
}

export default SemesterScreen;