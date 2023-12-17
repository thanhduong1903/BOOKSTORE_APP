import { View,FlatList } from 'react-native'
import React from 'react';
import styles from './categoryRaw.styles';
import CategoryView from './CategoryView';


export default function CategoryRaw() {
  
  const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <View style={styles.container}>
      <FlatList data={products} renderItem={({item})=><CategoryView></CategoryView>} numColumns={2} >
      </FlatList>
    </View>  
  )
}