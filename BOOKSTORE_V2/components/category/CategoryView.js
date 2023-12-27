import { View, Text, TouchableOpacity, Image } from 'react-native'
import React,{useState} from 'react'
import { styles } from './categoryView.styles'
import {Ionicons} from '@expo/vector-icons'
import { themeColors } from '../../constants/theme'
import { useNavigation } from '@react-navigation/native'

import { useDispatch } from 'react-redux' 
import { addToCart } from '../../Redux/CartSlice'
import axios from 'axios'; 
import API_CONFIG from '../../config'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CategoryView({item}) {
  const navigation = useNavigation();
  const [book,setbook] = useState("");
  React.useEffect(() => {setbook(item)}, [])

  const dispatch = useDispatch(); 

  const handleAddToCart = async (book) => {
    try {
      const url = `${API_CONFIG.HOST}${API_CONFIG.ADDTOCART}`;
      const response = await axios.post(url, {
          id: book.id,
          quantity: 1
      },{headers: {
        'X-CSRFToken': await AsyncStorage.getItem('csrftoken'),
        'Content-Type': 'application/json'
      }});
        
        if (response.data.status=='success') {
            console.log(response.data.message);
            const bookToAdd = {
              book: book,
              price: book.price,
              pricesale: book.pricesale,
              quantity: 1,
              total_price: book.pricesale > 0 ? book.pricesale : book.price
            };
            dispatch(addToCart(bookToAdd)); // Cập nhật giỏ hàng trên ứng dụng
            alert('Add product successfully')
            
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
          <Image style={styles.image} source ={{uri: book.image}}></Image>
        </View>
        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>{book.name}</Text>
          <Text style={styles.supplier}numberOfLines={1}>Products</Text>
          <Text style={styles.price}>{parseInt(book.price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</Text>
        </View>

        <TouchableOpacity style={styles.addBtn} onPress={() => handleAddToCart(book)}>
          <Ionicons name='add-circle' size={35} color={themeColors.primary}></Ionicons>
        </TouchableOpacity>

      </View>
    </TouchableOpacity> 
  )
}