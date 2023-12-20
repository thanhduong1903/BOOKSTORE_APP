import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React,{useState} from 'react'
import { styles } from './bestSeller.styles'
import {Ionicons} from '@expo/vector-icons'
import { themeColors } from '../../constants/theme'
import BestSellerCardView from './BestSellerCardView'
import axios from 'axios';
import API_CONFIG from '../../config'
export default function BestSeller() {
  const [bestseller,setBestSeller] = useState("");
  React.useEffect(() => {handleBestSeller()}, [])


  const handleBestSeller = async () => {
    try {
      const response = await axios.get(`${API_CONFIG.HOST}${API_CONFIG.BESTSELERBOOK}`);
    
      if (response.data.status === 'success') {
        setBestSeller(response.data.data)
        console.log('successfully get best seller')
      } else if (response.data.status === 'error') {      
        console.log(response.error);
      }
    } catch (error) {
      // handle error here
      console.log(error);
    }
  };

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headrerTitle}>Best seller</Text>
          <TouchableOpacity>
            <Ionicons name='ios-grid' size={24} color={themeColors.primary}></Ionicons>
          </TouchableOpacity>
        </View>        
      </View>
      <View>
        <FlatList data={bestseller} 
        renderItem={({item})=><BestSellerCardView item ={item}/>} 
        contentContainerStyle={{columnGap: 16}}
         horizontal>
        </FlatList>
      </View>
    </View>
    
  )
}