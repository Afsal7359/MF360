import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SearchBar } from 'react-native-elements'
import Color from '../../Components/Styling Comp/Color';
import data from '../../Components/Styling Comp/Data';

const AllProducts = () => {
    const [search,setSearch]=useState('');
  return (
    <View>
        
        <View style={{alignItems:"center"}}>
        <SearchBar
        placeholder="Type Here..."
        onChangeText={(value)=>setSearch(value)}
         value={search} round
    
         containerStyle={{
           backgroundColor: 'transparent', // Set your desired background color
           borderBottomColor: 'transparent', // Hide the border
           borderTopColor: 'transparent', // Hide the border
           paddingHorizontal:30,
          
         }}
         inputContainerStyle={{
           backgroundColor: Color.whitecolor, // Set your desired input background color
           borderRadius: 10, // Set your desired input border radius
           height: 50, // Set your desired input height
           width:"99%",
           shadowColor: '#000',
           shadowOffset: { width: 0, height: 2 },
           shadowOpacity: 0.5,
           shadowRadius: 2,
           elevation: 5, 
           
         }}
         inputStyle={{
           color: '#000', // Set your desired input text color
         }}
         placeholderTextColor="#999" // Set your desired placeholder text color
       />
      
      </View>
      <View style={styles.prohead}>
        <Text style={styles.protext} >Product</Text>
        <Text style={styles.protext}>Stock</Text>
        <Text style={styles.protext}>Price</Text>
      </View>
      <ScrollView style={{marginBottom:55}}>
      {data.map((item,index)=>(
        <View key={index} style={styles.proview}>
        <Text>Name: {item.name}</Text>
        <Text>Price: {item.price}</Text>
        <Text>Stock: {item.stock}</Text>
      </View>
      ))}
      </ScrollView>
    </View>
  )
}

export default AllProducts

const styles = StyleSheet.create({
    prohead:{
        flexDirection:'row',
        justifyContent:"space-around",
        marginTop:"5%",
    },
    protext:{
        fontWeight:"900"
    },
    proview:{
        flexDirection:'row',
        justifyContent:"space-around",
        borderRadius:10,
        marginTop:"5%",
        paddingVertical:"3%",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5, 
        backgroundColor:Color.whitecolor,
        marginHorizontal:"2%",
        height:"4%",
        alignItems:"center"
    }
 })