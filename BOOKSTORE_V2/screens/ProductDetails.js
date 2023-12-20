import { Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import React, {useState, useCallback, memo} from 'react'
import styles from './productDetails.styles'
import {Ionicons, SimpleLineIcons, MaterialCommunityIcons, Fontisto} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import {themeColors, themeSize} from '../constants/theme'
import { ScrollView } from 'react-native-virtualized-view'
import ReadMore from 'react-native-read-more-text'

const CountDisplay = memo(({ count }) => (
  <Text style={styles.textRating}> {" "}{count}{" "} </Text>
));

const ReadMoreText = ({ text }) => {
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
};

const ProductDetails = ({ route }) => {
  const [count, setCount] = useState(1);
  const { item } = route.params;
  const [book,setbook] = useState("");
  React.useEffect(() => {setbook(item)}, [item])
  
  const increment = useCallback(() => {
    setCount(count => count + 1);
  }, []);
  
  const decrement = useCallback(() => {
    setCount(count => (count > 1 ? count - 1 : count));
  }, []);

  const navigation = useNavigation();
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

          <View style={styles.rating}>
          <TouchableOpacity onPress={decrement}>
            <SimpleLineIcons name='minus' size={20}></SimpleLineIcons>
          </TouchableOpacity>

          <CountDisplay count={count} />
          
          <TouchableOpacity onPress={increment}>
            <SimpleLineIcons name='plus' size={20}></SimpleLineIcons>
          </TouchableOpacity>
          </View>
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
    </ScrollView>
    
  )
}

export default ProductDetails
