import { View, FlatList } from 'react-native'
import React,{useState} from 'react';
import styles from './productRaw.styles';
import ProductCardView from './ProductCardView';
import axios from 'axios';
import API_CONFIG from '../../config'
const ProductRaw = () => {
  const [newbook,setNewBook] = useState("");
  React.useEffect(() => {handleNewBooks()}, [])


  const handleNewBooks = async () => {
    try {
      const response = await axios.get(`${API_CONFIG.HOST}${API_CONFIG.NEWBOOKS}`);
    
      if (response.data.status === 'success') {
        setNewBook(response.data.data)
        console.log('successfully get new books')
      } else if (response.data.status === 'error') {      
        console.log(response.error);
      }
    } catch (error) {
      // handle error here
      console.log(error);
    }
  };


  return (
    <View style={styles.container}>
      <FlatList data={newbook}
       renderItem={({item})=><ProductCardView item={item}/>} 
       contentContainerStyle={{columnGap: 16}}
        horizontal>
      </FlatList>
    </View>    
  )
}

export default ProductRaw