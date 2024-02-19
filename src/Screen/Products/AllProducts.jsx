import { ActivityIndicator, SafeAreaView, ScrollView, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SearchBar } from 'react-native-elements'
import Color from '../../Components/Styling Comp/Color';
import data from '../../Components/Styling Comp/Data';
import { getproducts } from '../../Api/Products';

const AllProducts = () => {
    const [search,setSearch]=useState('');
    const [productdata,setProductData]=useState([]);

 
    const productdatafetch =async()=>{
      try {
        if(productdata.length===0){
        const response = await getproducts()
        if (response.success){
          setProductData(response.data)
          // dispatch(AddProductdata(Data));
          console.log(productdata,"daaata");
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
      const filtered = productdata.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
      setProductData(filtered)
    };

  return (
    <SafeAreaView>
        
        <View style={{alignItems:"center"}}>
        <SearchBar
        placeholder="Type Here..."
        onChangeText={(value)=>setSearch(value)}
         value={search} round
    
         containerStyle={{
           backgroundColor: 'transparent', // Set your desired background color
           borderBottomColor: 'transparent', // Hide the border
           borderTopColor: 'transparent', // Hide the border
           paddingHorizontal:10,
          
         }}
         inputContainerStyle={{
           backgroundColor: Color.whitecolor, // Set your desired input background color
           borderRadius: 10, // Set your desired input border radius
           height: 50, // Set your desired input height
           width:"100%",
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
      { !productdata ? (
       <ActivityIndicator  size={65} color={Color.maincolor} style={{position:"absolute", top:300,left:165}}/>
      ):( <View style={styles.mainview}>
        <View style={styles.prohead}>
          <Text style={styles.protext}>Id</Text>
          <Text style={styles.protext} >Product</Text>
          <Text style={styles.protext}>Stock</Text>
          <Text style={styles.protext}>Price</Text>
        </View>
        <ScrollView style={styles.scroll}>
        {productdata.map((item,index)=>(
          <TouchableOpacity key={index} style={styles.proview} >
           <Text> {item.id}</Text> 
          <Text> {item.name}</Text>
          <Text> {item.price}</Text>
          <Text> {item.stock}</Text>
        </TouchableOpacity>
        ))}
        </ScrollView>
        </View>)
    }
    </SafeAreaView>
  )
}

export default AllProducts

const styles = StyleSheet.create({
  scroll:{
    height:"70%"
  },
    prohead:{
      
        marginTop:"5%",
        flexDirection:'row',
        justifyContent:"space-around",
        borderRadius:10,
        marginTop:25,
        paddingVertical:10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5, 
        backgroundColor:Color.whitecolor,
        marginHorizontal:10,
        height:95,
        alignItems:"center",
    },
    mainview:{

    },
    protext:{
        fontWeight:"900"
    },
    proview:{
        flexDirection:'row',
        justifyContent:"space-around",
        borderRadius:10,
        marginTop:25,
        paddingVertical:10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5, 
        backgroundColor:Color.whitecolor,
        marginHorizontal:10,
        height:95,
        alignItems:"center",
    }
 })