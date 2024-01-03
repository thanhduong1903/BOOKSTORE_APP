import { Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import React, {useState, useCallback, memo} from 'react'
import styles from './productDetails.styles'
import {Ionicons, SimpleLineIcons, MaterialCommunityIcons, Fontisto} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import {themeColors, themeSize} from '../constants/theme'
import { ScrollView } from 'react-native-virtualized-view'
import ReadMore from 'react-native-read-more-text'
import { useDispatch } from 'react-redux' 
import { addToCart } from '../Redux/CartSlice'
import axios from 'axios'; 
import API_CONFIG from '../config'
import AsyncStorage from '@react-native-async-storage/async-storage';
const CountDisplay = React.memo(({ count, increment, decrement }) => (
  <View style={styles.rating}>
    <TouchableOpacity onPress={decrement}>
      <SimpleLineIcons name='minus' size={20}></SimpleLineIcons>
    </TouchableOpacity>

    <Text style={styles.textRating}> {" "}{count}{" "} </Text>

    <TouchableOpacity onPress={increment}>
      <SimpleLineIcons name='plus' size={20}></SimpleLineIcons>
    </TouchableOpacity>
  </View>
));

const ReadMoreText =  React.memo(({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const renderTruncatedFooter = useCallback((handlePress) => (
    <Text style={{color: 'blue', marginTop: 5}} onPress={() => {handlePress(); setIsExpanded(false);}}>
      Read more
    </Text>
  ), []);

  const renderRevealedFooter = useCallback((handlePress) => (
    <Text style={{color:'blue' , marginTop: 5}} onPress={() => {handlePress(); setIsExpanded(true);}}>
      Show less
    </Text>
  ), []);

  return (
    <ReadMore
      numberOfLines={3}
      renderTruncatedFooter={renderTruncatedFooter}
      renderRevealedFooter={renderRevealedFooter}
      onReadyStateChange={state => setIsExpanded(state === 'expanded')}
    >     
      <Text style={styles.descText}> {text} </Text>
    </ReadMore>
  );
});

const ProductDetails = ({ route }) => {
  const [count, setCount] = useState(1);
  const { item } = route.params;
  const [book,setbook] = useState("");
  const navigation = useNavigation();
  const increment = React.useCallback(() => {
    setCount(count => count + 1);
  }, []);
  
  const decrement = React.useCallback(() => {
    setCount(count => (count > 1 ? count - 1 : count));
  }, []);

  const handleGetBook = async () => {
    try {
      const url = `${API_CONFIG.HOST}${API_CONFIG.GETBOOK}${item.id}/`;
      const response = await axios.get(url,{
      });
      if (response.data.status === 'success') {
        setbook(response.data.book)
      } else if (response.data.status === 'error') {
        console.log('Failed get book');
      }
    } catch (error) {
      console.error(error);
    }
  };

  
  const dispatch = useDispatch(); 
  const handleAddToCart = async (book) => {
    try {
      const url = `${API_CONFIG.HOST}${API_CONFIG.ADDTOCART}`;
      const response = await axios.post(url, {
          id: book.id,
          quantity: count
      },{headers: {
        'X-CSRFToken': await AsyncStorage.getItem('csrftoken'),
        'Content-Type': 'application/json'
      }});
        
      console.log(count)
        if (response.data.status=='success') {
            console.log(response.data.message);
            const bookToAdd = {
              book: book,
              price: book.price,
              pricesale: book.pricesale,
              quantity: count,
              total_price:count *  book.pricesale > 0 ? book.pricesale  : book.price 
            };
            dispatch(addToCart(bookToAdd)); // Cập nhật giỏ hàng trên ứng dụng
            
        } else {
            console.log('Failed to add item to cart');
        }
    } catch (error) {
        console.error(error);
    }
  }

  const handleBuyNow = async (book) =>{
    handleAddToCart(book)
    navigation.navigate('Cart')
    setCount(1);
    alert('Add product successfully')
  }
  const handleAdd = async (book) =>{
    handleAddToCart(book)
    setCount(1);
    alert('Add product successfully')
  }


  React.useEffect(() => {handleGetBook()}, [])
  return (
    <ScrollView>
        <SafeAreaView style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Ionicons name='chevron-back-circle' color={themeColors.primary} size={30}></Ionicons>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{}}>
          <Ionicons name='heart' size={30} color={themeColors.primary}></Ionicons>
        </TouchableOpacity>
      </View>
      <Image style={styles.image} source={{uri:book.image}}></Image>
      {/* Details */}
      <View style={styles.details}>

        {/* Top details */}
        <View style={styles.titleRow}>
          <Text style={styles.title}>{book.name}</Text>

          <View style={styles.priceWrapper}>
          <Text style={styles.price}>{parseInt(book.price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</Text>
          </View>

        </View>

        {/* Bottom details */}
        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            {[1,2,3,4,5].map((index)=>(<Ionicons key={index} name='star' size={28} color="gold"></Ionicons>))}
            <Text style={styles.textRating}>  (4.9)</Text>
          </View>

          <CountDisplay count={count} increment={increment} decrement={decrement}/>
        </View>

        {/* Description */}
        <View style={styles.desciptionWrapper}>
          <Text style={styles.desciption}>Description</Text>
          <ReadMoreText text={book.description} />
        </View>

        {/* Location */}
        <View style = {{marginBottom: 10}}>
          <View style={styles.location}>
            <View style={styles.flexDirec}>
              <Ionicons name='location-outline' size={20}></Ionicons>
              <Text>Bình Dương</Text>
            </View>
            <View style={styles.flexDirec}>
              <MaterialCommunityIcons name='truck-delivery-outline' size={20}></MaterialCommunityIcons>
              <Text> Free Delivery</Text>
            </View>
            
          </View>
        </View>

        {/* Cart */}
        <View style={styles.cardRow}>
          <TouchableOpacity onPress={()=>{handleBuyNow(book)}} style={styles.cartBtn}>
            <Text style={styles.cartTitle}>Buy now</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{handleAdd(book)}} style={styles.addCart}>
            <Fontisto name='shopping-bag' size={22} color={themeColors.lightWhite} style></Fontisto>
          </TouchableOpacity>
        </View> 
      </View>
    </SafeAreaView>
    </ScrollView>
    
  )
}

export default ProductDetails
