import { Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Ionicons, MaterialIcons} from '@expo/vector-icons';
import { styles } from './cart.styles';
import { themeColors } from '../constants/theme';
import CartItemRaw from '../components/cart/CartItemRaw';
import { useNavigation } from '@react-navigation/native'
import AppBarWrapper from '../constants/AppBarWrapper'
import { ScrollView } from 'react-native-virtualized-view'
import { useSelector } from 'react-redux';
import { getTotalQuantity, getTotalAmount } from '../Redux/CartSlice';

const TotalInfo = React.memo(() => {
  const totalQuantity = useSelector(getTotalQuantity);
  const totalAmount = useSelector((state) => state.cart.total);

  return (
    <View style={styles.row}>
      <Text style={styles.totalText}>Total item: {totalQuantity}</Text>
      <Text style={styles.totalText}>Total amount: {parseInt(totalAmount).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })} </Text>
    </View> 
  );
});

export default function Cart() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style ={styles.container}>      
      <AppBarWrapper title = "CART"></AppBarWrapper>
      
      <ScrollView style={{height: '85%'}}>
        <CartItemRaw/>
      </ScrollView>  
      <View style={styles.totalContainer}>

          <TotalInfo />
  
        <View style={styles.row}>
          <Text style={styles.totalText}>Delivery: 30.000</Text>
          <TouchableOpacity onPress={()=>navigation.navigate('Order')} style={styles.checkout}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
            <MaterialIcons name='payment' size={20} color={themeColors.white}></MaterialIcons>
              <Text style={styles.totalText}>  Check out</Text>              
            </View>            
          </TouchableOpacity>
        </View>       
      </View>      
    </SafeAreaView>
  )
}