import { View, Text, TouchableOpacity, Image, Animated } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import styles from './orderItem.styles'

export default function OrderItem({item}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={()=>navigation.navigate("ProductDetails", {item: item.book})}>
      <View style={styles.container}>        
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{uri: item.book.image}}></Image>
        </View>
        <View style={styles.details}>          
          <Text style={styles.title} numberOfLines={1}>{item.book.name}</Text>
          <Text style={styles.supplier}numberOfLines={1}>Products</Text>
          <View style={styles.row}>
          <Text style={styles.price}>{parseInt(item.book.price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</Text>
            <View style={{...styles.row, marginLeft: 30,}}>   
              <Text style={styles.textRating}>Quantity: {item.quantity} </Text>  
            </View>               
          </View>          
        </View>      
      </View>
    </TouchableOpacity>
  )
}