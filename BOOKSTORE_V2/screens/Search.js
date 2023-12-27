import { TextInput,Text, View, SafeAreaView, TouchableOpacity,FlatList } from 'react-native'
import React from 'react'
import styles from './search.styles'
import { Feather, Ionicons } from '@expo/vector-icons'
import { themeSize, themeColors } from '../constants/theme'
import AppBarWrapper from '../constants/AppBarWrapper'
import axios from 'axios';
import API_CONFIG from '../config'
import CategoryView from '../components/category/CategoryView'
const Search = () => {
  const [products, setProduct] = React.useState('')
  const [search,setSearch] = React.useState('')
  const handleSearch = async () => {
    try {
      const url = `${API_CONFIG.HOST}${API_CONFIG.SEARCH}${search}`;
      const response = await axios.get(url);

      if (response.data.status === 'success') {
        console.log('successfully search')
        setProduct(response.data.books)
      } else if (response.data.status === 'error') {
        console.log(response.error);

      }
    } catch (error) {
      // handle error here
      console.log(error);
    }
  };
  React.useEffect(() => { handleSearch() }, [])



  return (
    <SafeAreaView style={styles.container}>
      <AppBarWrapper title="SEACRH YOUR BOOK"></AppBarWrapper>
      <View style={styles.searchContainer}>

        <TouchableOpacity>
          <Ionicons name='camera-outline' size={themeSize.xLarge} color={themeColors.primary} style={{ marginHorizontal: 10 }}></Ionicons>
        </TouchableOpacity>

        <View style={styles.searchWrapper}>
          <TextInput placeholder='What are you looking for'             
            onChangeText={text => setSearch(text)}
            value={search} style={styles.searchInput}></TextInput>
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={ handleSearch}>
          <Feather name='search' size={24} style={styles.searchIcon}></Feather>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
      {products.length >0 ? (
        <FlatList data={products} renderItem={({item})=><CategoryView item ={item}/>} numColumns={2} >
        </FlatList>
      ) : (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 70, color:'red',textAlign: 'center' }}>Không có sản phẩm</Text>
        </View>
      )}
    </View>  


    </SafeAreaView>
  )
}

export default Search

