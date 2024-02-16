import { View, Text, StyleSheet, ScrollView, Touchable,SafeAreaView,Button,Modal, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SearchBar } from 'react-native-elements'
import Color from '../../Components/Styling Comp/Color'
import { useDispatch, useSelector } from 'react-redux'
import { AddProductdata, addToCart } from '../../Redux/Cartreducer'
import { Picker } from '@react-native-picker/picker'
import { getproducts } from '../../Api/Products'

const NewOrder = ({navigation}) => {
  const [filteredData, setFilteredData] = useState('');
  const [District, setDistrict] = useState('option1');
  // const Data = data && data ? data : [];
  const [Data,setData]=useState([])
  const [search,setSearch]=useState('');
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
 
  const cartItems = useSelector((state) => state.cart.cartItems);
  // const ProductData = useSelector((state) => state.cart.ProductData);
  // console.log(ProductData,"poroooooooooooooooooooo");
  console.log(cartItems);
  const Addtocart = (item) => {
    console.log(item,"selected item");
    //add to redux
    dispatch(addToCart(item));
    console.log(cartItems,"caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    //filter fetched data and selected item
    const filterDatass = cartItems.filter((cartItem) => cartItem.name === item.name);
    console.log(filterDatass, "filterData");
   ToastAndroid.show(`${filterDatass[0]?filterDatass[0].quantity:[1]}  ${item.name}  Added to cart`,100, ToastAndroid.SHORT)
    
  };

  
  const productdatafetch =async()=>{
    try {
      if(Data.length===0){
      const response = await getproducts()
      if (response.success){
        setData(response.data)
        // dispatch(AddProductdata(Data));
        console.log(Data,"daaata");
      }
    }else{
      console.log("already fetched");
    }
    } catch (error) {
      console.log(error);
      ToastAndroid.show(error, ToastAndroid.SHORT);
    }
  }

    useEffect(() => {
      filterData();
      productdatafetch();
    }, [search]);

    const filterData = () => {
      const filtered = Data.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
      setData(filtered)
    };

  
  return (
    <SafeAreaView>
      <View  style={styles.pickerView}>
     <TouchableOpacity><Text style={{textAlign:"center",fontWeight:"900"}}>Select Shop</Text></TouchableOpacity>
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
         paddingHorizontal:10,
        
       }}
       inputContainerStyle={{
         backgroundColor: Color.whitecolor, 
         borderRadius: 10,
         height: 50, 
         width:"100%",
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
    {Data.map((item, index) => (
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
      borderWidth: 3,
      borderColor: Color.maincolor,
      borderRadius: 55,
      margin: 10,
      height:40,
      width:"100%",
      justifyContent:"center",
      fontStyle:"italic",
      marginHorizontal:"auto"
    },
  
})


export default NewOrder