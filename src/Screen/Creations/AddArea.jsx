import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, ToastAndroid, View } from 'react-native';
import { Button } from 'react-native-elements';
import Color from '../../Components/Styling Comp/Color';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { addarea } from '../../Api/Area';

const AddArea = () => {
  const [area, setArea] = useState('');
  const [district, setDistrict] = useState('');
  const [fetchDatas, setFetchData] = useState([]);

  const handleSubmit = async () => {
    try {
      // Create FormData object with product information
      const formData = {
        name: area,
        district: district,
      };
  
      console.log(formData, "formData");
  
      //  addproduct function
      const response = await addarea(formData);
      
      // Check the status in the response
      if (response.success) {
       setArea('')
       setDistrict('')
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
          placeholder=" area"
          style={styles.input}
          value={area}
          onChangeText={(text) => setArea(text)}
        />
        <TextInput
          placeholder="district"
          style={styles.input}
          value={district}
          onChangeText={(text) => setDistrict(text)}
        />
        <Button buttonStyle={styles.button} title="Submit" onPress={handleSubmit} />
      </View>
      <View>
   

      </View>
    </ScrollView>
  );
};

export default AddArea;

const styles = StyleSheet.create({
  input: {
    borderRadius: 15,
    height: 45,
    width: 195,
    borderWidth: 2,
    borderColor: Color.maincolor,
    backgroundColor: Color.whitecolor,
    marginTop: 45,
    paddingLeft: 25,
  },

  Mainview: {
    alignItems: 'center',
    borderRadius: 45,
    borderWidth: 2,
    marginHorizontal: 25,
    borderColor: Color.maincolor,
  },
  button: {
    height: 35,
    width: 145,
    backgroundColor: Color.maincolor,
    margin: 55,
    borderRadius: 45,
  },
});
