import { Text, View, TouchableOpacity } from 'react-native';
import React, {useState}from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Ionicons, MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons';
import { themeColors } from '../constants/theme';
import { useNavigation } from '@react-navigation/native'
import { styles } from './order.styles';
import AppBarWrapper from '../constants/AppBarWrapper';
import OrderItemRaw from '../components/order/OrderItemRaw';
import { ScrollView } from 'react-native-virtualized-view'
export default function Order() {
  const [paymentMethod, setPaymentMethod] = useState('')
  // const navigation = useNavigation();
  return (
    <SafeAreaView style ={styles.container}>
    
      <AppBarWrapper title="ORDER DETAILS"></AppBarWrapper>

      <View style={styles.orderItem}>
        <View style={styles.address}>
          <View style={styles.row}>
            <MaterialCommunityIcons name='truck-delivery-outline' size={22} style={{marginHorizontal: 5, marginVertical: 5,}}></MaterialCommunityIcons>
            <Text>Delivery address: 20 Thân Nhân Trung</Text>
          </View>
          <View style={styles.row}>
            <MaterialCommunityIcons name='av-timer' size={22} style={{marginHorizontal: 5, marginVertical: 5,}}></MaterialCommunityIcons>
            <Text>Delivery time: 13 - 14 Dec 2023</Text>
          </View>          
        </View>             
      </View>

      <ScrollView style={{height: '86%'}}>

       <OrderItemRaw></OrderItemRaw>
        <View style={styles.payment}>
          <View style={styles.col}>
            <Text style={styles.totalText}>Payment method:</Text>
            <View style={styles.payMethod}>
                {['COD', 'Card', 'Cash'].map(method=>(
                  <View key={method} style={styles.methodStyle}>                    
                    <TouchableOpacity style={styles.outer} onPress={()=>setPaymentMethod(method)}>
                      {paymentMethod === method && <View style={styles.inner}></View>}
                    </TouchableOpacity>
                    <Text style={styles.methodText}>{method}</Text>
                  </View>
                ))}
            </View>
          </View> 
        
          <View style={styles.rowPayment}>
            <Text style={styles.totalText}>Delivry: 30.000</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Order')} style={styles.orderNow}>
              <View style={{flexDirection:'row', alignItems:'center'}}>
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