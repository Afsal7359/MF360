import { StyleSheet, Text, View,TextInput,ScrollView, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native-elements'
import Color from '../../Components/Styling Comp/Color'
import { addproduct } from '../../Api/Products'

const AddProduct = () => {
  const [productId, setProductId] = useState('');
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productstock,setproductstock]=useState('');

  const handleSubmit = async () => {
    try {
      // Create FormData object with product information
      const formData = {
        id: productId,
        name: productName,
        price: productPrice,
        stock:productstock,
      };
  
      console.log(formData, "formData");
  
      //  addproduct function
      const response = await addproduct(formData);
      
      // Check the status in the response
      if (response.success) {
        setProductId('')
        setProductName('')
        setProductPrice('')
        setproductstock('')
        // Show a toast message if the status is "success"
        ToastAndroid.show(response.message, ToastAndroid.LONG);
      } else {
        // Product already exists or other errors
        ToastAndroid.show(response.message, ToastAndroid.SHORT);
      }
    } catch (error) {
      console.log(error);
      ToastAndroid.show(error, ToastAndroid.SHORT);
    }
  };
  
  return (
    <ScrollView>
    <View style={styles.Mainview}>
      <TextInput
        placeholder="Product Id"
        style={styles.input}
        value={productId}
        onChangeText={(text) => setProductId(text)}
      />
      <TextInput
        placeholder="Product Name"
        style={styles.input}
        value={productName}
        onChangeText={(text) => setProductName(text)}
      />
      <TextInput
        placeholder="Product Price"
        style={styles.input}
        value={productPrice}
        onChangeText={(text) => setProductPrice(text)}
      />
       <TextInput
        placeholder="Product stock" 
        style={styles.input}
        value={productstock}
        onChangeText={(text) => setproductstock(text)}
      />
      <Button
        buttonStyle={styles.button}
        title="Submit"
        onPress={handleSubmit}
      />
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