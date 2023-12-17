import { View, Text, FlatList, TouchableOpacity, Pressable, StyleSheet, Image, SafeAreaView } from 'react-native'
import React,{useState} from 'react';
import { styles, filterData } from './categoryItem.styles';


export default function CategoryItem() {
  const [indexCheck, setIndexCheck] = useState("0");
  return (
    <SafeAreaView style={styles.container}>         
        <FlatList horizontal ={true} showsHorizontalScrollIndicator = {false} data={filterData} keyExtractor={(item)=> item.id} extraData={indexCheck} renderItem={({item, index})=>(
          <Pressable onPress={()=>{setIndexCheck(item.id)}}>
            <View style={indexCheck === item.id ? {...styles.smallCardSelected}:{...styles.smallCard}}>
              <Image style = {{width: 50, height:50, margin: 5}} source={item.image}></Image>
              <Text style={indexCheck === item.id ? {...styles.text}:{...styles.textSelected}}>{item.name}</Text>
            </View>
          </Pressable>
        )}>
        </FlatList>       
    </SafeAreaView>
  )
}