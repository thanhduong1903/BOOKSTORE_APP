import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Ionicons, Fontisto} from '@expo/vector-icons'
import styles from './home.styles';
import { Welcome } from '../components';
import Carousel from '../components/home/Carousel';
import Headings from '../components/home/Heading';
import ProductRaw from '../components/products/ProductRaw';
import CategoryMenu from '../components/home/CategoryMenu';
import BestSeller from '../components/products/BestSeller';
import MarginBottom from '../constants/MarginBottom';
import { themeColors, themeSize } from '../constants/theme';
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native-virtualized-view'

const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style ={styles.container}>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Ionicons color={'transparent'} name='location-outline' size={24}></Ionicons>
          <Text style={styles.locationText}>BOOKS SHOP </Text>
          <View style={styles.flexEnd}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNum}>3</Text>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('Cart')}>
              <Fontisto color={themeColors.primary} name='shopping-bag' size={24}></Fontisto>
            </TouchableOpacity>            
          </View>
        </View>
      </View>
      <ScrollView>
        <Welcome></Welcome>
        <Carousel></Carousel>
        <CategoryMenu></CategoryMenu>
        <Headings></Headings>
        <ProductRaw></ProductRaw>
        <BestSeller></BestSeller>
        <MarginBottom></MarginBottom>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home