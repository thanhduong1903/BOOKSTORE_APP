import { View, Text, FlatList } from 'react-native'
import React from 'react'
import styles from './orderItemRaw.styles';
import OrderItem from './OrderItem';

export default function OrderItemRaw() {
  const products = [1, 2, 3, 4];
  return (
    <View style={styles.container}>
      <FlatList data={products} renderItem={({item})=><OrderItem></OrderItem>}>
      </FlatList>
    </View>
  )
}