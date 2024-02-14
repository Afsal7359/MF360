import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, ToastAndroid, View } from 'react-native';
import { Button } from 'react-native-elements';
import Color from '../../Components/Styling Comp/Color';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddArea = () => {
  const [area, setArea] = useState('');
  const [district, setDistrict] = useState('');
  const [fetchDatas, setFetchData] = useState([]);

  useEffect(() => {
    fetchAllData();
  }, []);

  const saveData = async () => {
    try {
      const data = {
        area: area,
        district: district,
      };



      // Save the updated data back to AsyncStorage
      await AsyncStorage.setItem('@mf360:areas', JSON.stringify(data));

      console.log('Data saved successfully!');
      ToastAndroid.show('Area Added Successfully', ToastAndroid.SHORT);

      // Clear input fields
      setArea('');
      setDistrict('');

      // Fetch updated data
      fetchAllData();
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };


  
  const fetchAllData = async () => {
    try {
      const areadata = await AsyncStorage.getItem('@mf360:areas');
      if (areadata !== null) {
        const parsedData = JSON.parse(areadata);
  
        // Convert object to array if needed
        const dataArray = Array.isArray(parsedData) ? parsedData : [parsedData];
  
        setFetchData(dataArray);
        console.log(dataArray, "fetchdata");
      } else {
        setFetchData([]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const cleardata = async () => {
    try {
      await AsyncStorage.removeItem('@mf360:areas');
      console.log('Key @mf360:areas cleared successfully!');
      // Fetch the data after removal to verify
      const dataAfterClear = await AsyncStorage.getItem('@mf360:areas');
      console.log('Data after clear:', dataAfterClear);
      setFetchData([]);
    } catch (error) {
      console.error('Error clearing key:', error);
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
        <Button buttonStyle={styles.button} title="Submit" onPress={saveData} />
        <Button buttonStyle={styles.button} title="Clear Data" onPress={cleardata} />
      </View>
      <View>
      {fetchDatas && Array.isArray(fetchDatas) && fetchDatas.length > 0 ? (
  fetchDatas.map((item, index) => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }} key={index}>
      <Text>{index + 1}</Text>
      <Text>{item.area}</Text>
      <Text>{item.district}</Text>
    </View>
  ))
) : (
  <View>
    <Text>No Data Available</Text>
  </View>
)}

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
