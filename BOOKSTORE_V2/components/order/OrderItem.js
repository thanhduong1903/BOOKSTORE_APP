import { View, Text, TouchableOpacity, Image, Animated } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import styles from './orderItem.styles'

export default function OrderItem() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={()=>navigation.navigate("ProductDetails")}>
      <View style={styles.container}>        
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{uri: 'https://img.freepik.com/premium-vector/books-with-flowers_654516-12.jpg?w=826'}}></Image>
        </View>
        <View style={styles.details}>          
          <Text style={styles.title} numberOfLines={1}>Nhật ký chú bé nhút nhát</Text>
          <Text style={styles.supplier}numberOfLines={1}>Products</Text>
          <View style={styles.row}>
            <Text style={styles.price}>154.000 vnđ</Text>
            <View style={{...styles.row, marginLeft: 30,}}>   
              <Text style={styles.textRating}>Quantity: 1 </Text>  
            </View>               
          </View>          
        </View>      
      </View>
    </TouchableOpacity>
  )
}