// BestSellerCardView.js
import { View, Text, TouchableOpacity, Image } from 'react-native'
import React,{useState} from 'react'
import styles from './productCardView.styles'
import {Ionicons} from '@expo/vector-icons'
import { themeColors } from '../../constants/theme'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux' 
import { addToCart } from '../../Redux/CartSlice'
import axios from 'axios'; 
import API_CONFIG from '../../config'
export default function BestSellerCardView({item}) {
  const navigation = useNavigation();
  const [book,setbook] = useState("");
  const dispatch = useDispatch(); 
  React.useEffect(() => {setbook(item)}, [])

  const handleAddToCart = async (book) => {
    try {
        const response = await axios.post(`${API_CONFIG.HOST}${API_CONFIG.ADDTOCART}`, {
            id: book.id,
            quantity: 1
        });
        
        if (response.data.status=='success') {
            console.log(response.data.message);
            dispatch(addToCart(book)); // Cập nhật giỏ hàng trên ứng dụng
        } else {
            console.log('Failed to add item to cart');
        }
    } catch (error) {
        console.error(error);
    }
  }

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
          <TouchableOpacity style={styles.addBtn}  onPress={() => handleAddToCart(book)}>
          <Ionicons name='add-circle' size={35} color={themeColors.primary}></Ionicons>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}
