import { ScrollView, StatusBar, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import Color from '../../Components/Styling Comp/Color'
import { useDispatch, useSelector } from 'react-redux';
import Store from '../../Redux/Store';

const Cart = ({navigation}) => {

    const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  
  useEffect(() => {
    console.log('Redux Store State:', Store.getState());
    console.log('Cart Items:', cartItems);
    console.log('Cart items fetched:', cartItems);
  }, []);
  const handleSave = () => {
    // Handle saving logic here
    console.log('Cart items saved:', cartItems);
    // Clear the cart by dispatching a clear action
    dispatch({ type: 'CLEAR_CART' });
  };
  return (
    <View style={{marginBottom:55}}>
         <StatusBar
        animated={true}
        backgroundColor={Color.maincolor}
        barStyle={'light-content'} />
       <ScrollView>
      <Text>Cart Items:</Text>
      {cartItems.map((item, index) => (
        <Text key={index}>{item.name}</Text>
      ))}
    
    </ScrollView>
    <TouchableOpacity onPress={handleSave}><Text>Clear Cart </Text></TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate('New Order')}><Text>Order Page </Text></TouchableOpacity>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({})