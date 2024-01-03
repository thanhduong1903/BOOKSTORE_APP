import { View, Text, FlatList } from 'react-native'
import React from 'react'
import styles from './orderItemRaw.styles';
import OrderItem from './OrderItem';
import { useSelector } from 'react-redux';
export default function OrderItemRaw() {
  const products = useSelector((state) => state.cart.items);
  return (
    <View style={styles.container}>
      <FlatList data={products} renderItem={({item})=><OrderItem item={item}/>}>
      </FlatList>
    </View>
  )
}