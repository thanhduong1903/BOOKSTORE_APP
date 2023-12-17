import { View, Text, FlatList, TouchableOpacity, Pressable, StyleSheet, Image, SafeAreaView } from 'react-native'
import React,{useState} from 'react';
import { filterData } from './categoryMenu.styles';
import { themeColors, themeSize } from '../../constants/theme';
import {Ionicons} from '@expo/vector-icons';

export default function CategoryMenu() {
  const [indexCheck, setIndexCheck] = useState("0");
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headrerTitle}>Categories</Text>
          <TouchableOpacity>
            <Ionicons name='ios-grid' size={24} color={themeColors.primary}></Ionicons>
          </TouchableOpacity>
        </View>
        <FlatList horizontal ={true} showsHorizontalScrollIndicator = {false} data={filterData} keyExtractor={(item)=> item.id} extraData={indexCheck} renderItem={({item, index})=>(
          <Pressable onPress={()=>{setIndexCheck(item.id)}}>
            <View style={indexCheck === item.id ? {...styles.smallCardSelected}:{...styles.smallCard}}>
              <Image style = {{width: 50, height:50, margin: 5}} source={item.image}></Image>
              <Text style={indexCheck === item.id ? {...styles.text}:{...styles.textSelected}}>{item.name}</Text>
            </View>
          </Pressable>
        )}>
        </FlatList>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  smallCard:{
    borderRadius: 8,
    backgroundColor: themeColors.white,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: 100,
    height: 90,
    margin:10,
    color: themeColors.primary,
  },
  smallCardSelected:{
    borderRadius: 10,
    backgroundColor: themeColors.primary,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: 100,
    height: 90,
    margin:10,
  },

  text:{
    color: themeColors.white, fontFamily:'bold', fontSize: 11,
  },
  textSelected:{
    color: themeColors.primary, fontFamily:'bold', fontSize: 11,
  },

  container:{
    marginTop: 12,
    padding: 5,
    marginHorizontal: 15,    
    backgroundColor: themeColors.secondary,
    borderRadius: 5,
  },
  header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
   
    // marginVertical: 10,
  },

  headrerTitle:{
    fontFamily: 'bold',
    fontSize: themeSize.large,
    color: themeColors.primary,
  },
})
