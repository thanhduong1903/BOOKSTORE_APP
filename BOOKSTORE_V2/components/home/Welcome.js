import { View, Text, TouchableOpacity, TextInput, SafeAreaView } from 'react-native'
import React from 'react'
import styles from './welcome.styles'
import {themeColors, themeSize} from '../../constants/theme'
import {Feather, Ionicons} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

export default function Welcome (){
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={{...styles.welcomeText, color: themeColors.primary}}>Find your books</Text>      
      </View>
      <View style={styles.searchContainer}>
        <TouchableOpacity onPress={()=> navigation.navigate('Search')}>
          <Feather name='search' size={24} style={styles.searchIcon}></Feather>
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput placeholder='What are you looking for' style={styles.searchInput} value='' onPressIn={()=>navigation.navigate("Search")}></TextInput>
        </View>
        <TouchableOpacity style={styles.searchBtn}>
          <Ionicons name='camera-outline' size={themeSize.xLarge} color={themeColors.textColor}></Ionicons>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    
  )
}
