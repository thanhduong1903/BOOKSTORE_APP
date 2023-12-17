import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { styles } from './categoryView.styles'
import {Ionicons} from '@expo/vector-icons'
import { themeColors } from '../../constants/theme'
import { useNavigation } from '@react-navigation/native'

export default function CategoryView() {
  const navigation = useNavigation();
  return (  
      <TouchableOpacity onPress={()=>navigation.navigate("ProductDetails")}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{uri: 'https://img.freepik.com/free-photo/international-day-education-cartoon-style_23-2151007486.jpg?t=st=1702735349~exp=1702738949~hmac=d9db38bacb6bc167d5419ab9c183739bde12f5a92488698cd2dcdb6a42b7a05e&w=996'}}></Image>
        </View>
        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>Nhật ký chú bé nhút nhát</Text>
          <Text style={styles.supplier}numberOfLines={1}>Products</Text>
          <Text style={styles.price}>154.000 vnđ</Text>
        </View>
        <TouchableOpacity style={styles.addBtn}>
          <Ionicons name='add-circle' size={35} color={themeColors.primary}></Ionicons>
        </TouchableOpacity>
      </View>
    </TouchableOpacity> 
  )
}