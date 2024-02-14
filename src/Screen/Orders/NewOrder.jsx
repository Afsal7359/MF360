import { View, Text, StyleSheet, ScrollView, Touchable,SafeAreaView,Button,Modal, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SearchBar } from 'react-native-elements'
import data from '../../Components/Styling Comp/Data'
import Color from '../../Components/Styling Comp/Color'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../Redux/Cartreducer'
import { Picker } from '@react-native-picker/picker'

const NewOrder = ({navigation}) => {
  const [filteredData, setFilteredData] = useState(data);
  const [District, setDistrict] = useState('option1');
  const Data = data && data ? data : [];
  const [search,setSearch]=useState('');
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const Addtocart = (item) => {
    console.log(item);
    dispatch(addToCart(item));
    ToastAndroid.show(`${item.name}  Added to cart`,500 , ToastAndroid.CENTER)
  };
    useEffect(() => {
      // Update filtered data whenever search text changes
      filterData();
    }, [search, data]);

    const filterData = () => {
      const filtered = data.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredData(filtered);
    };

  
  return (
    <SafeAreaView>
      <View  style={styles.pickerView}>
      <Picker style={{color:Color.Black}} value={District}   onValueChange={(item) =>setDistrict(item)}>
            <Picker.Item label="Select Shop" value="option1" />
            <Picker.Item label="Kannur fsdf sdfsaf sfsdfdsf fsfds dsfdsfds fdsfdfsf fgdsfds fdsefds fdsfs dsfds fdsf" value="option2" />
            <Picker.Item label="Kasargod" value="option3" />
        </Picker>
      </View>
  
    <View style={{alignItems:"center"}}>
    <SearchBar
      placeholder="Type Here..."
       onChangeText={(value) => setSearch(value)}
       value={search} round
  
       containerStyle={{
         backgroundColor: 'transparent', 
         borderBottomColor: 'transparent', 
         borderTopColor: 'transparent',
         paddingHorizontal:30,
        
       }}
       inputContainerStyle={{
         backgroundColor: Color.whitecolor, 
         borderRadius: 10,
         height: 40, 
         width:300,
         shadowColor: '#000',
         shadowOffset: { width: 0, height: 2 },
         shadowOpacity: 0.5,
         shadowRadius: 2,
         elevation: 5, 
         
       }}
       inputStyle={{
         color: '#000',
       }}
       placeholderTextColor="#999" 
     />
    </View>
    
   
    <ScrollView style={styles.itemScrollview}>
    <View style={styles.productcontainer}>
    {filteredData.map((item, index) => (
      <TouchableOpacity key={index} style={styles.itemView} onPress={()=>{Addtocart(item)}}>
        <Text style={styles.itemText}> {item.name}</Text>
        <Text style={styles.itemText}>₹ {item.price}</Text>
        <Text style={styles.itemText}>Stock: {item.stock}</Text>
      </TouchableOpacity>
    ))}
  </View>   
    </ScrollView>
    
  <TouchableOpacity style={styles.savebtn} onPress={()=>navigation.navigate('cart')}>
    <Text>Save  </Text>
  </TouchableOpacity>
  </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  itemText:{
    color:Color.Black
  },
  savebtn:{
    backgroundColor:Color.maincolor,
    width:"50%",
    alignItems:"center",
    justifyContent:"center",
    alignContent:"center",
    marginTop:10,
    marginHorizontal:"25%",
    height:45,
    borderRadius:10,
  },
  productcontainer:{
    flexDirection: 'row',
    flexWrap: 'wrap', 
    justifyContent: 'space-between', 
    paddingHorizontal: 16,
  },
  
  
    itemScrollview:{
     height:"68%"
    },
    itemView:{
      width:120,
      height:85,
      borderRadius:15,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.5,
      shadowRadius: 2,
      elevation: 5, 
      alignItems:"center",
      justifyContent:"center",
      margin:15,
      backgroundColor:Color.whitecolor 
    },
    pickerView:{
      borderWidth: 1,
      borderColor: Color.maincolor,
      borderRadius: 15,
      overflow: 'hidden',
      margin: 10,
      height:40,
      width:300,
      justifyContent:"center",
      fontStyle:"italic",
      marginLeft:50
    },
  
})


export default NewOrder