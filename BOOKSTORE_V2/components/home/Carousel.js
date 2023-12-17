import {StyleSheet, View, Text, Image } from 'react-native';
import React from 'react';
import {SliderBox} from 'react-native-image-slider-box';
import {themeSize, themeColors} from '../../constants/theme'

const Carousel = () => {
  const slides = [
    "https://img.freepik.com/premium-photo/paper-boat-with-mountain-inside-it_572536-389.jpg?w=1060",
    "https://img.freepik.com/premium-photo/open-book-with-planet-it_572536-680.jpg?w=1060",
    "https://img.freepik.com/premium-photo/illustration-globe-top-book_572536-681.jpg?w=1060",
    "https://img.freepik.com/premium-photo/illustration-book-with-city-background_572536-320.jpg?w=1060",
  ]
  return (
    <View style={styles.carouselContainer}>
      <SliderBox images={slides} dotColor={themeColors.textColor} interactiveDotColor = {themeColors.black} ImageComponentStyle = {{borderRadius: 20, width: '90%', marginTop: 15,}} autoplay circleLoop></SliderBox>
    </View>
  )
}

export default Carousel
const styles = StyleSheet.create({

});