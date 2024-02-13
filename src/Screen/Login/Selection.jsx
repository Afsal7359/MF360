import { View, Text, ScrollView, StyleSheet, Image, Touchable } from 'react-native'
import React, { useState } from 'react'
import {Picker} from "@react-native-picker/picker"
import { TouchableOpacity } from 'react-native'
import Color from '../../Components/Styling Comp/Color'
import image1 from '../../../assets/distributionimg1.png'

const Selection = ({navigation}) => {
    const [District, setDistrict] = useState('option1');
  return (
    <ScrollView>
    <View style={styles.topcircle}/>
    <View style={styles.imageview}>
      <Image source={image1} style={styles.image}/>
    </View>
    <View style={styles.district}> 
      <Text style={styles.districttext}>District</Text>
      <View style={styles.districtpicker}>
      <Picker  selectedValue={District} onValueChange={(item) =>setDistrict(item)}>
      <Picker.Item label="Select District" value="option1" />
      <Picker.Item label="Kannur" value="option2" />
      <Picker.Item label="Kasargod" value="option3" />
      </Picker>
      </View>
    </View>
    <View style={styles.area}> 
      <Text style={styles.areatext}>Area</Text>
      <View style={styles.areapicker}>
        <Picker  selectedValue={District} onValueChange={(item) =>setDistrict(item)}>
          <Picker.Item label="Select District" value="option1" />
          <Picker.Item label="Kannur" value="option2" />
          <Picker.Item label="Kasargod" value="option3" />
        </Picker>
      </View>
    </View>
    <View style={styles. distributor}> 
      <Text style={styles. distributortext}>Distributor</Text>
      <View style={styles. distributorpicker}>
      <Picker  selectedValue={District} onValueChange={(item) =>setDistrict(item)}>
      <Picker.Item label="Select District" value="option1" />
      <Picker.Item label="Kannur" value="option2" />
      <Picker.Item label="Kasargod" value="option3" />
      <Picker.Item label="Thiruvanathapuram" value="option3" />
      </Picker>
      </View>
    </View>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Dashboard')}><Text>Submit</Text></TouchableOpacity>
  </ScrollView>
  )
}

export default Selection

const styles = StyleSheet.create({
    topcircle:{
        width:120,
        backgroundColor:Color.maincolor,
        height:120,
        borderBottomRightRadius:150
    },
    image:{
      height:215,
      width:215,
    
    },
    imageview:{
      justifyContent:"center",
      alignItems:"center"
    },
    districtpicker:{
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 15,
      overflow: 'hidden',
      margin: 10,
      height:40,
      width:200,
      justifyContent:"center",
      fontStyle:"italic",
     marginLeft:40
    },
    district:{
      flexDirection:'row',
      alignItems:"center",
    },
    districttext:{
      fontSize:18,
      marginVertical:25,
     paddingHorizontal:15,
     fontWeight:"bold"
    },
    areapicker:{
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 15,
      overflow: 'hidden',
      margin: 10,
      height:40,
      width:200,
      justifyContent:"center",
      fontStyle:"italic",
      marginLeft:50
    },
    area:{
      flexDirection:'row',
      alignItems:"center",
    },
    areatext:{
      fontSize:18,
      marginVertical:25,
     paddingHorizontal:20,
     fontWeight:"bold"
    },
    distributorpicker:{
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 15,
      overflow: 'hidden',
      margin: 10,
      height:40,
      width:200,
      justifyContent:"center",
      fontStyle:"italic",
      marginLeft:1
    },
    distributor:{
      flexDirection:'row',
      alignItems:"center",
    },
    distributortext:{
      fontSize:18,
      marginVertical:25,
     paddingHorizontal:20,
     fontWeight:"bold"
    },
    button:{
      backgroundColor:Color.maincolor,
      height:45,
      width:"100",
      borderRadius:15,
      justifyContent:"center",
      alignItems:"center",
      marginVertical:25,
      marginHorizontal:100
  },
})