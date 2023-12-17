import { TextInput, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './search.styles'
import {Feather, Ionicons} from '@expo/vector-icons'
import {themeSize, themeColors} from '../constants/theme'
import AppBarWrapper from '../constants/AppBarWrapper'
const Search = () => {
  return (
    <SafeAreaView style={styles.container}> 
      <AppBarWrapper title="SEACRH YOUR BOOK"></AppBarWrapper>
      <View style={styles.searchContainer}>
          <TouchableOpacity>
            <Ionicons name='camera-outline' size={themeSize.xLarge} color={themeColors.primary} style={{ marginHorizontal: 10}}></Ionicons>
          </TouchableOpacity>
          <View style={styles.searchWrapper}>
            
            <TextInput placeholder='What are you looking for' style={styles.searchInput}></TextInput>
          </View>
          <TouchableOpacity style={styles.searchBtn}>
            <Feather name='search' size={24} style={styles.searchIcon}></Feather>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default Search

