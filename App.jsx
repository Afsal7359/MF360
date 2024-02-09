import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import ScreenNavigations from './src/Components/Navigations/ScreenNavigations';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
      <NavigationContainer>
         <Tab.Navigator>
           <Tab.Screen name="Home" component={ScreenNavigations} options={{headerShown:false,tabBarIcon: ({ color, size }) => (
           <Icon name="dashboard" color={color} size={size} />
             ),}}/>
         </Tab.Navigator>
      </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"green"
  },
  text:{
    fontSize:95,
    fontWeight:"900",
    color:"#fff"
  },
})