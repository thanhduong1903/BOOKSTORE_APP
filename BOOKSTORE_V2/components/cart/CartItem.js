import { View, Text, TouchableOpacity, Image, Animated } from 'react-native'
import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import styles from './cartItem.styles';
import {SimpleLineIcons, AntDesign} from '@expo/vector-icons'
import axios from 'axios';
import API_CONFIG from '../../config'
import { useDispatch } from 'react-redux';
import { updateCart,removeFromCart } from '../../Redux/CartSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function CartItem({item}) {

  const navigation = useNavigation();
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  const handleUpdateToCart = async (quantity) => {
    try {
      const url = `${API_CONFIG.HOST}${API_CONFIG.UPDATECART}`;
      const response = await axios.post(url, {
          id: item.book.id,
          quantity: quantity,
      },{headers: {
        'X-CSRFToken': await AsyncStorage.getItem('csrftoken'),
        'Content-Type': 'application/json'
      }});
        if (response.data.status=='success') {
          console.log(response.data.message);       
        } else {
            console.log('Failed to add item to cart');
        }
    } catch (error) {
        console.error(error);
    }
  }

  const handleDeleteToCart = async () => {
    try {
      const url = `${API_CONFIG.HOST}${API_CONFIG.DELETECART}`;
      const response = await axios.post(url, {
          id: item.book.id,
      },{headers: {
        'X-CSRFToken': await AsyncStorage.getItem('csrftoken'),
        'Content-Type': 'application/json'
      }});
        if (response.data.status=='success') {
          dispatch(removeFromCart({...item}));
          console.log(response.data.message);       
        } else {
            console.log('Failed delete item to cart');
        }
    } catch (error) {
        console.error(error);
    }
  }

  const increment = () =>{
    setCount(count + 1);

    dispatch(updateCart({...item, quantity: count + 1}));
    handleUpdateToCart(count+1)
  }

  const decrement = () =>{
    if(count > 1){
      setCount(count - 1);
      
      dispatch(updateCart({...item, quantity: count - 1}));
      handleUpdateToCart(count-1)
    }
  }
  React.useEffect(() => {
    setCount(item.quantity)
  }, [item.quantity])

  return (
    <TouchableOpacity onPress={()=>navigation.navigate("ProductDetails", {item: item.book})}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{uri:item.book.image}}></Image>
        </View>
        <View style={styles.details}>
          
          <Text style={styles.title} numberOfLines={1}>{item.book.name}</Text>
          <Text style={styles.supplier}numberOfLines={1}>Products</Text>
          <View style={styles.row}>
          <Text style={styles.price}>{parseInt(item.book.price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</Text>

            <View style={{...styles.row, marginLeft: 30,}}>
              <TouchableOpacity onPress={()=>decrement()}>
                <SimpleLineIcons name='minus' size={20}></SimpleLineIcons>
              </TouchableOpacity>
              <Text style={styles.textRating}> {" "}{count}{" "} </Text>
              <TouchableOpacity onPress={()=>increment()}>
                <SimpleLineIcons name='plus' size={20}></SimpleLineIcons>
              </TouchableOpacity> 
            </View>   
            <View>
              <TouchableOpacity onPress={handleDeleteToCart}>
                <AntDesign style={{marginLeft: 12,}} name='delete' size={22}></AntDesign>
              </TouchableOpacity>              
            </View>         
          </View>          
        </View>      
      </View>
    </TouchableOpacity>
  )
}