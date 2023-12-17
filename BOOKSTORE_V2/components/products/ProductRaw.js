import { View, FlatList } from 'react-native'
import React from 'react'
import styles from './productRaw.styles';
import ProductCardView from './ProductCardView';

const ProductRaw = () => {
  const products = [1, 2, 3, 4];
  return (
    <View style={styles.container}>
      <FlatList data={products} renderItem={({item})=><ProductCardView></ProductCardView>} contentContainerStyle={{columnGap: 16}} horizontal>
      </FlatList>
    </View>    
  )
}

export default ProductRaw