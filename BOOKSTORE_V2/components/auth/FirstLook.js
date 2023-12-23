import { View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import React from 'react';
import {SliderBox} from 'react-native-image-slider-box';
import styles from './firstLook.styles';
import { themeColors } from '../../constants/theme';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import API_CONFIG from '../../config'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/CartSlice';
export default function FirstLook() {

  const slides = [
    "https://img.freepik.com/premium-photo/paper-boat-with-mountain-inside-it_572536-389.jpg?w=1060",
    "https://img.freepik.com/premium-photo/open-book-with-planet-it_572536-680.jpg?w=1060",
    "https://img.freepik.com/premium-photo/illustration-globe-top-book_572536-681.jpg?w=1060",
    "https://img.freepik.com/premium-photo/illustration-book-with-city-background_572536-320.jpg?w=1060",
  ];
  const navigation = useNavigation();
const dispatch = useDispatch();
  
  const handleGetCart = async () => {
    try {
      const response = await axios.get(`${API_CONFIG.HOST}${API_CONFIG.GETCART}`);
      if (response.data.status === 'success') {
        const cart = response.data.cart;

        if (typeof cart === 'object' && cart !== null) {
          Object.values(cart).forEach(item => {
            item.book.image = API_CONFIG.HOST+item.book.image
            dispatch(addToCart(item));
          });
          console.log(response.data.message);
        } else {
          console.log('Cart is not an object');
        }

      } else if (response.data.status === 'error') {
        console.log(response.data.message);
      }

    } catch (error) {
      console.error(error);
    }
  };
  const checkLoginStatus = async () => {
    const user = await AsyncStorage.getItem('username');
    if (user) {
      handleGetCart()
      navigation.navigate('Bottom Navigation', { screen: "Home" });
    }
    else{
      navigation.navigate('Login')
    }
  };


  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.topView}>
          <Image style={styles.topViewLogo} source={require('../../assets/images/logo.png')}></Image>
        </View>
        <View style={styles.midView}>          
          <Text style={styles.wellcomeText}>Wellcome</Text>
          <Text style={styles.text}>Please log in or create an account to enjoy and shop for the books you are looking for!</Text>
          
        </View>
        <View style={styles.carouselContainer}>
            <SliderBox images={slides} dotColor={themeColors.textColor} interactiveDotColor = {themeColors.black} ImageComponentStyle = {styles.slideStyle} autoplay circleLoop></SliderBox>
          </View>
        <View style={styles.bottomView}>
          <TouchableOpacity onPress={checkLoginStatus}>
            <View style={styles.touchText1}>
              <Text style={styles.touchTextStyle1}>Sign-In</Text>
            </View>            
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>navigation.navigate('Register')}>
            <View style={styles.touchText2}>
              <Text style={styles.touchTextStyle2}>Create an account</Text>
            </View>            
          </TouchableOpacity>
        </View>
      </View>      
    </SafeAreaView>
  )
}