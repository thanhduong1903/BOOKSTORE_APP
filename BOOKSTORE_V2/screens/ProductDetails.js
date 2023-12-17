import { Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import React, {useState} from 'react'
import styles from './productDetails.styles'
import {Ionicons, SimpleLineIcons, MaterialCommunityIcons, Fontisto} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import {themeColors, themeSize} from '../constants/theme'

const ProductDetails = () => {
  const [count, setCount] = useState(1);

  const increment = () =>{
    setCount(count + 1);
  }

  const decrement = () =>{
    if(count > 1){
      setCount(count - 1);
    }
  }

  const navigation = useNavigation();
  return (
    
    <SafeAreaView style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Ionicons name='chevron-back-circle' color={themeColors.primary} size={30}></Ionicons>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{}}>
          <Ionicons name='heart' size={30} color={themeColors.primary}></Ionicons>
        </TouchableOpacity>
      </View>
      <Image style={styles.image} source={{uri:"https://img.freepik.com/premium-vector/illustration-magic-spell-book-with-crystal-middle_295116-238.jpg?w=740"}}></Image>
      {/* Details */}
      <View style={styles.details}>

        {/* Top details */}
        <View style={styles.titleRow}>
          <Text style={styles.title}>Nhật ký chú bé nhút nhát</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>154.000 vnđ</Text>
          </View>
        </View>

        {/* Bottom details */}
        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            {[1,2,3,4,5].map((index)=>(<Ionicons key={index} name='star' size={28} color="gold"></Ionicons>))}
            <Text style={styles.textRating}>  (4.9)</Text>
          </View>

          <View style={styles.rating}>
          <TouchableOpacity onPress={()=>decrement()}>
            <SimpleLineIcons name='minus' size={20}></SimpleLineIcons>
          </TouchableOpacity>

          <Text style={styles.textRating}> {" "}{count}{" "} </Text>
          
          <TouchableOpacity onPress={()=>increment()}>
            <SimpleLineIcons name='plus' size={20}></SimpleLineIcons>
          </TouchableOpacity>
          </View>
        </View>

        {/* Description */}
        <View style={styles.desciptionWrapper}>
          <Text style={styles.desciption}>Description</Text>
          <Text style={styles.descText}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias saepe ipsum repellat, fuga facere quas atque culpa ullam quidem sequi possimus, officia error non cumque vel officiis veritatis, fugiat ducimus?</Text>
        </View>

        {/* Location */}
        <View style = {{marginBottom: 10}}>
          <View style={styles.location}>
            <View style={styles.flexDirec}>
              <Ionicons name='location-outline' size={20}></Ionicons>
              <Text> Ho chi minh city</Text>
            </View>
            <View style={styles.flexDirec}>
              <MaterialCommunityIcons name='truck-delivery-outline' size={20}></MaterialCommunityIcons>
              <Text> Free Delivery</Text>
            </View>
            
          </View>
        </View>

        {/* Cart */}
        <View style={styles.cardRow}>
          <TouchableOpacity onPress={()=>{}} style={styles.cartBtn}>
            <Text style={styles.cartTitle}>Buy now</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{}} style={styles.addCart}>
            <Fontisto name='shopping-bag' size={22} color={themeColors.lightWhite} style></Fontisto>
          </TouchableOpacity>
        </View> 
      </View>
    </SafeAreaView>
  )
}

export default ProductDetails

