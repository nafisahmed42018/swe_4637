import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import FacultyList from './src/screens/FacultyList';
import SemesterScreen from './src/screens/SemesterScreen';
import CourseList from './src/screens/CourseList';
import ProfileScreen from './src/screens/ProfileScreen';

const stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='Home'>
        <stack.Screen name='Home' component={HomeScreen} />
        <stack.Screen name='Profile' component={ProfileScreen} />
        <stack.Screen name='Faculty' component={FacultyList} />
        <stack.Screen name='Semester' component={SemesterScreen} />
        <stack.Screen name='Courses' component={CourseList} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
