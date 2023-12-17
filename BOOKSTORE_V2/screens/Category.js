import {SafeAreaView } from 'react-native'
import React from 'react'
import AppBarWrapper from '../constants/AppBarWrapper'
import { styles } from './category.styles'
import CategoryItem from '../components/category/CategoryItem'
import CategoryRaw from '../components/category/CategoryRaw'
import { ScrollView } from 'react-native-virtualized-view'
const Category = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AppBarWrapper title="CATEGORY"></AppBarWrapper>
      <CategoryItem></CategoryItem>
      
      <ScrollView style={{height: '87%'}}>
        <CategoryRaw></CategoryRaw>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Category