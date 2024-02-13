import { View, Text, StyleSheet, ScrollView, Touchable,SafeAreaView,Button,Modal, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SearchBar } from 'react-native-elements'
import data from '../../Components/Styling Comp/Data'
import Color from '../../Components/Styling Comp/Color'
import { useDispatch } from 'react-redux'

const NewOrder = ({navigation}) => {
  const Data = data && data ? data : [];
  const [search,setSearch]=useState('');
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const addToCart = (item) => {
    console.log(item);
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };
  return (
    <SafeAreaView>
    <Text style={styles.selectedtext}>Selected Item</Text>
  
    <ScrollView style={styles.selecteditemscroll} showsVerticalScrollIndicator={false}>
      <View style={{alignItems:"center"}}>
    <View style={styles.headingview}>
        <Text style={styles.headingtext}>ITEM(Price)</Text>
        <Text style={styles.headingtext}>Quantity</Text>
        <Text style={styles.headingtext}>Total Price</Text>
      </View>
      
      {data.map((item, index) => (
      <View key={index} style={styles.selectitemview}>
        <Text>Name: {item.name}</Text>
        <Text>Price: {item.price}</Text>
        <Text>Stock: {item.stock}</Text>
      </View>
    ))}
    </View>
    </ScrollView>
    <SafeAreaView>
      <View style={styles.container}>
        <Modal
          animationType={'slide'}
          transparent={false}
          visible={showModal}
          onRequestClose={() => {
            console.log('Modal has been closed.');
          }}>
          <View style={styles.modal}>
            <Text style={styles.text}>Modal is open</Text>
            <TouchableOpacity
            style={{marginTop:2,marginRight:0}}
              onPress={() => {
                setShowModal(!showModal);
              }}><Text>Close</Text></TouchableOpacity>
          </View>
        </Modal>
        <Button
          title="Click To Open Modal"
          onPress={() => {
            setShowModal(!showModal);
          }}
        />
      </View>
    </SafeAreaView>
     {/* <TouchableOpacity style={styles.buttonContainer}><Text style={styles.buttonText}> View All</Text></TouchableOpacity> */}
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
         height: 40, // Set your desired input height
         width:300,
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
    
    <TouchableOpacity onPress={()=>navigation.navigate('cart')}><Text>View Cart </Text></TouchableOpacity>
    <ScrollView style={styles.itemScrollview}>
    <View style={styles.productcontainer}>
    {data.map((item, index) => (
      <TouchableOpacity key={index} style={styles.itemView} onPress={addToCart(item)}>
        <Text style={styles.itemText}>Name: {item.name}</Text>
        <Text>Price: {item.price}</Text>
        <Text>Stock: {item.stock}</Text>
      </TouchableOpacity>
    ))}
  </View>   
    </ScrollView>
    
  <TouchableOpacity style={styles.savebtn}>
    <Text>Save   ₹.20000</Text>
  </TouchableOpacity>
  </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    marginTop: 5,
    
  },
  modal: {
    alignItems: 'center',
    backgroundColor: Color.maincolor,
    height:200,
    width:295,
    borderRadius:10,
    justifyContent:"center",
    marginHorizontal:"10%"
  },
  text: {
    color: '#3f2949',
    marginTop: 10,
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
  buttonContainer: {
    width: 100,
    padding: 3,
    backgroundColor: Color.maincolor,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal:105
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
    itemScrollview:{
     height:350
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
    selectedtext:{
        fontSize:15,
        margin:15,
        textAlign:"center",
        fontWeight:"900",
       
    },
    selecteditemscroll:{
      height:200,
      width:"auto",
      marginHorizontal:25,
      borderColor:Color.maincolor,
      borderWidth:1,
      borderRadius:25,
      marginBottom:5,
      paddingBottom:10
    },
    headingview:{
      flexDirection:'row',
      justifyContent:'space-around',
      width:"90%",
      marginVertical:"2%",
      height:35,
      backgroundColor:Color.whitecolor,
      alignItems:"center",
      borderRadius:10
    },
    headingtext:{
      fontWeight:"900"
    },
    selectitemview:{
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:"center",
      marginBottom:15,
      width:"90%",
      color:Color.whitecolor,
      height:35,
      backgroundColor:Color.whitecolor,
      borderRadius:10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 5, 
    }
})


export default NewOrder