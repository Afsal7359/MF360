import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../Screen/Login/Login';
import Selection from '../../Screen/Login/Selection';
import Home from '../../Screen/Dashboard/Home';
import Creations from '../../Screen/Creations/Creations';
import Color from '../Styling Comp/Color';
import NewOrder from '../../Screen/Orders/NewOrder';
import AllProducts from '../../Screen/Products/AllProducts';
import Orderhistory from '../../Screen/Orders/Orderhistory';




const Stack = createNativeStackNavigator();
const ScreenNavigations = () => {
  return (
  <Stack.Navigator>
    <Stack.Screen name='login' component={Login} options={{headerShown:false}}/>
    <Stack.Screen name='Selection' component={Selection} options={{headerShown:false}}/>
    <Stack.Screen name='Dashboard' component={Home} options={{headerShown:false}}/>
    <Stack.Screen name='creations' component={Creations} options={{headerShown:true,headerStyle:{backgroundColor:Color.maincolor}}}/>
    <Stack.Screen name='New Order' component={NewOrder} options={{headerShown:true,headerStyle:{backgroundColor:Color.maincolor}}}/>
    <Stack.Screen name='All Products' component={AllProducts} options={{headerShown:true,headerStyle:{backgroundColor:Color.maincolor}}}/>
    <Stack.Screen name='Order History' component={Orderhistory} options={{headerShown:true,headerStyle:{backgroundColor:Color.maincolor}}}/>
</Stack.Navigator>
  )
}

export default ScreenNavigations
