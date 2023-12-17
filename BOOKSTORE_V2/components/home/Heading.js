import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './heading.styles'
import {Ionicons} from '@expo/vector-icons'
import { themeColors, themeSize } from '../../constants/theme'

export default function Headings() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headrerTitle}>New books</Text>
        <TouchableOpacity>
          <Ionicons name='ios-grid' size={24} color={themeColors.primary}></Ionicons>
        </TouchableOpacity>
      </View>      
    </View>
  )
}