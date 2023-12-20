import { View, Text, FlatList, TouchableOpacity, Pressable, StyleSheet, Image, SafeAreaView } from 'react-native'
import React,{useState} from 'react';
import { styles, filterData } from './categoryItem.styles';
import axios from 'axios';
import API_CONFIG from '../../config'

export default function CategoryItem({ Id, onCategorySelect }) {

  const [indexCheck, setIndexCheck] = useState("0");
  const [categoryData,setCategoryData] = useState("");
  React.useEffect(() => {
    handleCategories()
    setIndexCheck(Id)
  }, [Id])
  const handleCategories = async () => {
    try {
      const response = await axios.get(`${API_CONFIG.HOST}${API_CONFIG.CATEGORIES}`); 
      if (response.data.status === 'success') {
        console.log('successfully get Categories')
        setCategoryData(response.data.data)
      } else if (response.data.status === 'error') {      
        console.log(response.error);
      }
    } catch (error) {
      // handle error here
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>         
        <FlatList 
        horizontal ={true} 
        showsHorizontalScrollIndicator = {false} 
        data={categoryData} 
        keyExtractor={(item)=> item.id} 
        extraData={indexCheck} 
        renderItem={({item, index})=>(
          <Pressable onPress={() => {
            setIndexCheck(item.id);
            onCategorySelect(item.id);
          }}>
            <View style={indexCheck === item.id ? {...styles.smallCardSelected}:{...styles.smallCard}}>
              <Image style = {{width: 50, height:50, margin: 5}} source={{uri: item.icon}}></Image>
              <Text style={indexCheck === item.id ? {...styles.text}:{...styles.textSelected}}>{item.name}</Text>
            </View>
          </Pressable>
        )}>
        </FlatList>       
    </SafeAreaView>
  )
}