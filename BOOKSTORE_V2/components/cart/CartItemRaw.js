import { View, Text, FlatList } from 'react-native'
import React from 'react'
import styles from './cartItemRaw.style';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

export default function CartItemRaw() {
  const products = useSelector((state) => state.cart.items);
  return (
    <View style={styles.container}>
      <FlatList 
      data={products} 
      renderItem={({item})=><CartItem item ={item}/>} >
      </FlatList>
    </View>
  )
}