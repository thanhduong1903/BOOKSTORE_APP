import {Text, View, SafeAreaView, TextInput, Image, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import AppBarWraper from '../constants/AppBarWrapper';
import { styles } from './profile.styles';
import {AntDesign} from '@expo/vector-icons';
import { themeColors } from '../constants/theme';

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AppBarWraper title="PROFILE"></AppBarWraper>
      <View style={styles.header}>
        <View style={styles.imgContainer}>
          <Image style={styles.avatar} source={{uri: 'https://img.freepik.com/free-photo/3d-illustration-teenager-with-funny-face-glasses_1142-50955.jpg?t=st=1702740564~exp=1702744164~hmac=bb277f08e5038ab61d7593e6c5d4956cc14cc2ec077467ab2901a967f147bdd8&w=826'}}></Image>
          <Text style={styles.name}>Matthew</Text>
        </View>     
      </View>
      <View style={styles.body}>
        <View style={styles.row}>
          <Text style={styles.text}>Name: </Text>
          <TextInput style={styles.input} value='Lý Thanh Dương'></TextInput>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Day of birth: </Text>
          <TextInput style={styles.input} value='19/03/2001'></TextInput>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Address: </Text>
          <TextInput style={styles.input} value='20 Thân Nhân Trung'></TextInput>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>ID: </Text>
          <TextInput style={styles.input} value='1233456678910'></TextInput>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Password: </Text>
          <TextInput secureTextEntry style={styles.input} value='456678'></TextInput>
        </View>

      </View>
      <View style={styles.footer}>
        <TouchableOpacity>
          <View style={styles.edit}>
            <Text  style={styles.editText}>Edit</Text>
            <AntDesign name='edit' color={themeColors.primary} size={22}></AntDesign>
          </View>          
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Profile

