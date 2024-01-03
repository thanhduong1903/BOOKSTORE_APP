import { View,FlatList,Text } from 'react-native'
import React from 'react';
import styles from './categoryRaw.styles';
import {Ionicons} from '@expo/vector-icons';
import CategoryView from './CategoryView';
import axios from 'axios';
import API_CONFIG from '../../config'

export default function CategoryRaw({categoryID}) {

  const [products,setProduct] = React.useState('')
  const handleBookByCategory = async () => {
    try {
      const url = `${API_CONFIG.HOST}${API_CONFIG.BOOKBYCATEGORY}${categoryID}/`;
      console.log(url);
      const response = await axios.get(url); 

      if (response.data.status === 'success') {
        console.log('successfully get Book By Category')
        setProduct(response.data.data)

      } else if (response.data.status === 'error') {      
        console.log(response.error);

      }
    } catch (error) {
      // handle error here
      console.log(error);
    }
  };
  React.useEffect(() => {handleBookByCategory()}, [])
  return (
    <View style={styles.container}>
    {products.length >0 ? (
      <FlatList data={products} renderItem={({item})=><CategoryView item ={item}/>} numColumns={2} >
      </FlatList>
    ) : (
      <View style={styles.textNotificate}>
        <Ionicons style={styles.iconWarn} name='notifications-outline'></Ionicons>
        <Text style={styles.text}>SẢN PHẨM ĐANG ĐƯỢC CẬP NHẬT...</Text>
      </View>
    )}
  </View>  
  )
}