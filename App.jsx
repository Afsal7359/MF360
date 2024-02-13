import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import ScreenNavigations from './src/Components/Navigations/ScreenNavigations';
import QRScanner from './src/Screen/Dashboard/QRScanner';
import Orders from './src/Screen/Orders/Orders';
import Color from './src/Components/Styling Comp/Color';
import store from './src/Redux/Store';

const Tab = createBottomTabNavigator();

const App = ({navigation}) => {
  return (
   
      <NavigationContainer>
         <Tab.Navigator>
        
           <Tab.Screen name="Home" component={ScreenNavigations} options={{headerShown:false,tabBarIcon: ({ color, size }) => (
           <Icon name="dashboard" color={color} size={size} />
             ),}}/>
             <Tab.Screen name="Qrscanner" component={QRScanner} options={{headerShown:false,tabBarIcon: ({ color, size }) => (
           <Icon name="camera" color={color} size={size} />
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