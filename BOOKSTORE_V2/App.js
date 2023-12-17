import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {useFonts} from 'expo-font';
// import * as SplashScreen from 'expo-splash-screen'
import { useCallback } from 'react';
import BottomTabNavigation from './navigation/BottomTabNavigation';
import { Category, ProductDetails, Cart, Search } from './screens';
import FirstLook from './components/auth/FirstLook';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Order from './screens/Order';

export const Stack = createNativeStackNavigator();
export default function App() {
  const [fontsLoaded] =  useFonts({
    regular: require('./assets/fonts/Saira-Regular.ttf'),
    medium: require('./assets/fonts/Saira-Medium.ttf'),
    light: require('./assets/fonts/Saira-Light.ttf'),
    exLight: require('./assets/fonts/Saira-ExtraLight.ttf'),
    bold: require('./assets/fonts/Saira-SemiBold.ttf'),
    black: require('./assets/fonts/Saira-Black.ttf'),
  })

  const onLayoutRootView = useCallback(async() => {
    if(fontsLoaded){
      await SplashScreen.hideAsync();
    }   
  },[fontsLoaded]);

  if(!fontsLoaded){
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='First Look' component={FirstLook} options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name='Login' component={Login} options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name='Register' component={Register} options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name='Bottom Navigation' component={BottomTabNavigation} options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name='Cart' component={Cart} options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name='ProductDetails' component={ProductDetails} options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name='Order' component={Order} options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name='Category' component={Category} options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name='Search' component={Search} options={{headerShown: false}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}