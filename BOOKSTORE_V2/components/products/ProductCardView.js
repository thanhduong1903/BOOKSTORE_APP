import { View, Text, TouchableOpacity, Image } from 'react-native'
import React,{useState} from 'react'
import styles from './productCardView.styles'
import {Ionicons} from '@expo/vector-icons'
import { themeColors } from '../../constants/theme'
import { useNavigation } from '@react-navigation/native'

const ProductCardView = ({item}) => {
  const navigation = useNavigation();
  const [book,setbook] = useState("");
  React.useEffect(() => {setbook(item)}, [])
  return (
    <TouchableOpacity onPress={()=>navigation.navigate("ProductDetails", {item: book})}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source ={{uri:book.image}}></Image>
        </View>
        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>{book.name}</Text>
          <Text style={styles.supplier}numberOfLines={1}>Products</Text>
          <Text style={styles.price}>{parseInt(book.price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</Text>
        </View>
        <TouchableOpacity style={styles.addBtn}>
          <Ionicons name='add-circle' size={35} color={themeColors.primary}></Ionicons>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}
export default ProductCardView