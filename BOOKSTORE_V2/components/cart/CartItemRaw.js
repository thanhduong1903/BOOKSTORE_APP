import { View, Text, FlatList } from 'react-native'
import React from 'react'
import styles from './cartItemRaw.style';
import CartItem from './CartItem';

export default function CartItemRaw() {
  const products = [1, 2, 3, 4];
  return (
    <View style={styles.container}>
      <FlatList data={products} renderItem={({item})=><CartItem></CartItem>}>
      </FlatList>
    </View>
  )
}