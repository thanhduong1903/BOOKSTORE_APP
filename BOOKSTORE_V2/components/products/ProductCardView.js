import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './productCardView.styles'
import {Ionicons} from '@expo/vector-icons'
import { themeColors } from '../../constants/theme'
import { useNavigation } from '@react-navigation/native'

const ProductCardView = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={()=>navigation.navigate("ProductDetails")}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{uri: 'https://img.freepik.com/premium-vector/illustration-magic-spell-book-with-crystal-middle_295116-238.jpg?w=740'}}></Image>
        </View>
        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>Nhật ký chú bé nhút nhát</Text>
          <Text style={styles.supplier}numberOfLines={1}>Products</Text>
          <Text style={styles.price}>154.000 vnđ</Text>
        </View>
        <TouchableOpacity style={styles.addBtn}>
          <Ionicons name='add-circle' size={35} color={themeColors.primary}></Ionicons>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}
export default ProductCardView