import { StyleSheet, Text, View,TextInput,ScrollView } from 'react-native'
import React from 'react'
import { Button } from 'react-native-elements'
import Color from '../../Components/Styling Comp/Color'

const AddProduct = () => {
  return (
    <ScrollView>
    <View style={styles.Mainview}>
          <TextInput placeholder="Product Id" style={styles.input} />
          <TextInput placeholder="Product Name" style={styles.input} />
          <TextInput placeholder="Product Price" style={styles.input} />
          <Button buttonStyle={styles.button} title="Submit" onPress={() => console.log('Submit pressed')} />
    </View>
  </ScrollView>
  )
}

export default AddProduct

const styles = StyleSheet.create({
  input: {
      borderRadius: 15,
      height: 45,
      width: 195,
      borderWidth:2,
      borderColor: Color.maincolor,
      backgroundColor: Color.whitecolor,
      marginTop: 45,
      paddingLeft: 25,
    },
    
  Mainview:{
      alignItems:"center",
      borderRadius:45,
      borderWidth:2,
      marginHorizontal:25,
      borderColor:Color.maincolor
  },
  button:{
      height:35,
      width:145,
      backgroundColor:Color.maincolor,
      margin:55,
      borderRadius:45,
  }
})