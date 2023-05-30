import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import ProcideToCart from './screens/ProcideToCart';
import CheckOutPage from './screens/CheckOutPage'
import PaymentDon from './screens/PaymentDon';
import Register from './screens/Register';
import Login from './screens/Login';

export default function StackNavigation() {

    const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
    <Stack.Navigator>

      <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>  
      <Stack.Screen name="Register" component={Register} options={{headerShown:false}}/>  
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
      <Stack.Screen name="ProcideToCart" component={ProcideToCart} options={{headerShown:false}}/>
      <Stack.Screen name="CheckOutPage" component={CheckOutPage} options={{headerShown:false}}/>
      <Stack.Screen name="PaymentDon" component={PaymentDon} options={{headerShown:false}}/>
      
    </Stack.Navigator>
  </NavigationContainer>
  );
}
