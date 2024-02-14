import { StyleSheet,ScrollView, Text, View } from 'react-native'
import React,{useState} from 'react'
import { SearchBar } from 'react-native-elements'
import Color from '../../Components/Styling Comp/Color';

const Orderhistory = () => {
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
      <View style={styles.Itemhead}>
            <Text style={styles.texthead}>Medmix</Text>
            <Text style={styles.texthead} >250</Text>
            <Text style={styles.texthead}>15</Text>
        </View>
      <ScrollView style={{marginBottom:85}}>
       
        <View style={styles.Itemview}>
            <Text style={styles.text}>Medmix</Text>
            <Text  style={styles.text}>250</Text>
            <Text  style={styles.text}>15</Text>
        </View>
        <View style={styles.Itemview}>
            <Text style={styles.text}>Medmix</Text>
            <Text  style={styles.text}>250</Text>
            <Text  style={styles.text}>15</Text>
        </View>
        <View style={styles.Itemview}>
            <Text style={styles.text}>Medmix</Text>
            <Text  style={styles.text}>250</Text>
            <Text  style={styles.text}>15</Text>
        </View>
        <View style={styles.Itemview}>
            <Text style={styles.text}>Medmix</Text>
            <Text  style={styles.text}>250</Text>
            <Text  style={styles.text}>15</Text>
        </View>
        <View style={styles.Itemview}>
            <Text style={styles.text}>Medmix</Text>
            <Text  style={styles.text}>250</Text>
            <Text  style={styles.text}>15</Text>
        </View>
        <View style={styles.Itemview}>
            <Text style={styles.text}>Medmix</Text>
            <Text  style={styles.text}>250</Text>
            <Text  style={styles.text}>15</Text>
        </View>
        <View style={styles.Itemview}>
            <Text style={styles.text}>Medmix</Text>
            <Text  style={styles.text}>250</Text>
            <Text  style={styles.text}>15</Text>
        </View>
        <View style={styles.Itemview}>
            <Text style={styles.text}>Medmix</Text>
            <Text  style={styles.text}>250</Text>
            <Text  style={styles.text}>15</Text>
        </View>
        <View style={styles.Itemview}>
            <Text style={styles.text}>Medmix</Text>
            <Text  style={styles.text}>250</Text>
            <Text  style={styles.text}>15</Text>
        </View>
        <View style={styles.Itemview}>
            <Text style={styles.text}>Medmix</Text>
            <Text  style={styles.text}>250</Text>
            <Text  style={styles.text}>15</Text>
        </View>
        <View style={styles.Itemview}>
            <Text style={styles.text}>Medmix</Text>
            <Text  style={styles.text}>250</Text>
            <Text  style={styles.text}>15</Text>
        </View>
        <View style={styles.Itemview}>
            <Text style={styles.text}>Medmix</Text>
            <Text  style={styles.text}>250</Text>
            <Text  style={styles.text}>15</Text>
        </View>
        <View style={styles.Itemview}>
            <Text style={styles.text}>Medmix</Text>
            <Text  style={styles.text}>250</Text>
            <Text  style={styles.text}>15</Text>
        </View>
    </ScrollView>
    </View>
  )
}

export default Orderhistory

const styles = StyleSheet.create({
  text:{
    color:Color.Black,
  },
  container: {
    backgroundColor:Color.Grey,
    justifyContent:"space-around",
  },
  Itemview:{
    flexDirection:'row',
    justifyContent:"space-around",
    alignItems:'center',
    height:90,
    borderColor:Color.Grey,
    margin:"1%",
    backgroundColor:Color.whitecolor,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5, 
    marginHorizontal:"5%",
    borderRadius:10,

  },
  Itemhead:{
    flexDirection:'row',
    justifyContent:"space-around",
    alignItems:'center',
    height:90,
    borderColor:Color.Grey,
    margin:"1%",
    backgroundColor:Color.whitecolor,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5, 
    marginHorizontal:"5%",
    borderRadius:10,
  },
  texthead:{
    fontWeight:"900",
    color:Color.Black
  },

})