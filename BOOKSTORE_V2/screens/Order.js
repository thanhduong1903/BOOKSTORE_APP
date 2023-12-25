import { Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons, MaterialIcons, AntDesign } from '@expo/vector-icons';
import { themeColors } from '../constants/theme';
import { useNavigation } from '@react-navigation/native'
import { styles } from './order.styles';
import AppBarWrapper from '../constants/AppBarWrapper';
import OrderItemRaw from '../components/order/OrderItemRaw';
import { ScrollView } from 'react-native-virtualized-view'
import { useSelector } from 'react-redux';
import axios from 'axios';
import API_CONFIG from '../config'
import { clearCart } from '../Redux/CartSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { WebView } from 'react-native-webview';
const Total = React.memo(() => {
  const totalAmount = useSelector((state) => state.cart.total);
  return (
    <Text style={styles.totalText}>Temporary payment: {parseInt(totalAmount).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</Text>
  );
});

export default function Order() {
  const [paymentMethod, setPaymentMethod] = useState('')
  const navigation = useNavigation();
  const totalAmount = useSelector((state) => state.cart.total);
  const [userData, setUserData] = useState('');
  const [addressData, setAddressData] = useState('');
  const dispatch = useDispatch();
  const handleGetProfile = async () => {
    try {
      const url = `${API_CONFIG.HOST}${API_CONFIG.PROFILE}`;
      console.log(url)
      const response = await axios.get(url);
      if (response.data.status === 'success') {

        setUserData(response.data.user)
        setAddressData(response.data.address)

        console.log(userData)
        console.log(addressData)

      } else if (response.data.status === 'error') {
        console.log(response.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleOrder = async () => {
    try {
      const url = `${API_CONFIG.HOST}${API_CONFIG.ORDER}`;
      const response = await axios.post(url, {
        user_id: userData.id,
        address_id: addressData.id,
        payment_method: paymentMethod
      },{headers: {
        'X-CSRFToken': await AsyncStorage.getItem('csrftoken'),
        'Content-Type': 'application/json'
      }});

      if (response.data.status === 'success') {
        // Handle success
        console.log(response.data.status);
      
        if (paymentMethod === 'Chuyển khoản') {
          console.log(response.data.payment_url)
          navigation.navigate('PaymentScreen', { paymentUrl:response.data.payment_url });
        }

      } else if (response.data.status === 'error') {
        // Handle error
        console.log(response.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handlePaymentMethod = (method) => {
    if (method === 'COD') {
      setPaymentMethod('COD')

    } else if (method === 'Card') {

      setPaymentMethod('Chuyển khoản')
    }
  }
  React.useEffect(() => {
    handleGetProfile()
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <AppBarWrapper title="ORDER DETAILS"></AppBarWrapper>
      <View style={styles.orderItem}>
        <View style={styles.address}>
          <View style={styles.row}>
            <AntDesign name='user' size={22} style={{ marginHorizontal: 5, marginVertical: 5, }}></AntDesign>
            <Text>Receiver: {userData.first_name} {userData.last_name}</Text>
          </View>
          <View style={styles.row}>
            <AntDesign name='phone' size={22} style={{ marginHorizontal: 5, marginVertical: 5, }}></AntDesign>
            <Text>Phone: {addressData.phone}</Text>
          </View>
          <View style={styles.row}>
            <AntDesign name='mail' size={22} style={{ marginHorizontal: 5, marginVertical: 5, }}></AntDesign>
            <Text>Email: {userData.email}</Text>
          </View>
          <View style={styles.row}>
            <MaterialCommunityIcons name='truck-delivery-outline' size={22} style={{ marginHorizontal: 5, marginVertical: 5, }}></MaterialCommunityIcons>
            <Text>Delivery : {addressData.address}, {addressData.district},{addressData.city}</Text>
          </View>
        </View>
      </View>
      <ScrollView style={{ height: '65%' }}>
        <OrderItemRaw />
        <View style={styles.payment}>
          <View style={styles.col}>
            <Total />
            <Text style={styles.totalText}>Delivery fee: 30.000</Text>
            <Text style={styles.totalText}>discount:0</Text>
            {/* <Text style={styles.totalText}>VAT: 40.000</Text> */}
            <Text style={styles.totalText}>Payment method:</Text>
            <View style={styles.payMethod}>
              {['COD', 'Card'].map(method => (
                <View key={method} style={styles.methodStyle}>
                  <TouchableOpacity style={styles.outer} onPress={() => handlePaymentMethod(method)}>
                    {paymentMethod === method && <View style={styles.inner}></View>}
                  </TouchableOpacity>
                  <Text style={styles.methodText}>{method}</Text>
                </View>
              ))}
            </View>
          </View>
          <View style={styles.rowPayment}>

            <View style={{ flexDirection: 'column' }}>
              <Text style={styles.totalText}>total amount payable: {parseInt(totalAmount + 30000).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</Text>
            </View>

            <TouchableOpacity onPress={handleOrder} style={styles.orderNow}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <MaterialIcons name='payment' size={20} color={themeColors.white}></MaterialIcons>
                <Text style={styles.totalText}>  Order now</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}