import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';


const CourseList = (props) => {
    
    const { semester, CourseList } = props.route.params;

    return (
        <View>
            <Text>{semester}</Text>
            <FlatList
                data={CourseList}
                renderItem={({ item }) => {
                    return (
                        <Text style={styles.textStyle}>{item.name}</Text> 
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        marginVertical: 20,
        textAlign: "center",
    },
})

export default CourseList;