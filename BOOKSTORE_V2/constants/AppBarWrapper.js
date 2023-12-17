import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import { themeColors } from './theme';
import { styles } from './appBarWrapper.styles';
import {Ionicons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
export default function AppBarWrapper({title}) {
  const navigation = useNavigation();
  return (
    <SafeAreaView style ={styles.container}>
      <View style={styles._appBarWrapper}>
        <View style={styles.appBar}>
          <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Ionicons name='chevron-back-circle' color={themeColors.primary} size={30}></Ionicons>
          </TouchableOpacity>
          <Text style={styles.locationText}>{title}</Text>
          <Text style={styles.textHiden}>---</Text>
        </View>        
      </View>
    </SafeAreaView>
  )
}