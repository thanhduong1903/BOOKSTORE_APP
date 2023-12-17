import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import { styles } from './bestSeller.styles'
import {Ionicons} from '@expo/vector-icons'
import { themeColors } from '../../constants/theme'
import BestSellerCardView from './BestSellerCardView'

export default function BestSeller() {
  const products = [1, 2, 3, 4, 5, 6];
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headrerTitle}>Best seller</Text>
          <TouchableOpacity>
            <Ionicons name='ios-grid' size={24} color={themeColors.primary}></Ionicons>
          </TouchableOpacity>
        </View>        
      </View>
      <View>
        <FlatList data={products} renderItem={({item})=><BestSellerCardView></BestSellerCardView>} contentContainerStyle={{columnGap: 16}} horizontal>
        </FlatList>
      </View>
    </View>
    
  )
}