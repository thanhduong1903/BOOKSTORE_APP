import { View, Text, TouchableOpacity, Image, Animated } from 'react-native'
import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import styles from './cartItem.styles';
import {SimpleLineIcons, AntDesign} from '@expo/vector-icons'
export default function CartItem() {
  const navigation = useNavigation();
  const [count, setCount] = useState(1);

  const increment = () =>{
    setCount(count + 1);
  }

  const decrement = () =>{
    if(count > 1){
      setCount(count - 1);
    }
  }
 
  return (
    <TouchableOpacity onPress={()=>navigation.navigate("ProductDetails")}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{uri: 'https://img.freepik.com/free-vector/hand-drawn-stack-books-illustration_23-2149329854.jpg?w=826&t=st=1702216106~exp=1702216706~hmac=7a9a2c890ee5c709df50e496b9fbb5c5b563c54aacfed4cf099f05bd94e0f110'}}></Image>
        </View>
        <View style={styles.details}>
          
          <Text style={styles.title} numberOfLines={1}>Nhật ký chú bé nhút nhát</Text>
          <Text style={styles.supplier}numberOfLines={1}>Products</Text>
          <View style={styles.row}>
            <Text style={styles.price}>154.000 vnđ</Text>
            <View style={{...styles.row, marginLeft: 30,}}>
              <TouchableOpacity onPress={()=>decrement()}>
                <SimpleLineIcons name='minus' size={20}></SimpleLineIcons>
              </TouchableOpacity>

              <Text style={styles.textRating}> {" "}{count}{" "} </Text>
              
              <TouchableOpacity onPress={()=>increment()}>
                <SimpleLineIcons name='plus' size={20}></SimpleLineIcons>
              </TouchableOpacity> 
            </View>   
            <View>
              <TouchableOpacity>
                <AntDesign style={{marginLeft: 12,}} name='delete' size={22}></AntDesign>
              </TouchableOpacity>              
            </View>         
          </View>          
        </View>      
      </View>
    </TouchableOpacity>
  )
}