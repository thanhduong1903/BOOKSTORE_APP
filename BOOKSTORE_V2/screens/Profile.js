import {Text, View, SafeAreaView, TextInput, Image, TouchableOpacity, Pressable } from 'react-native'
import React,{useState} from 'react'
import AppBarWraper from '../constants/AppBarWrapper';
import { styles } from './profile.styles';
import {AntDesign} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../constants/theme';
import axios from 'axios';
import API_CONFIG from '../config'
import { useDispatch } from 'react-redux';
import { clearCart } from '../Redux/CartSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = () => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState('');
  const [addressData, setAddressData] = useState('');

  const dispatch = useDispatch(); 

  const handleLogOut = async () => {
    try {
        const url = `${API_CONFIG.HOST}${API_CONFIG.LOGOUT}`;
        const response = await axios.post(url);
        if (response.data.status === 'success') {      
          dispatch(clearCart());
          navigation.navigate('First Look');
          console.log(response.data.message);

          await AsyncStorage.removeItem('csrftoken');
          await AsyncStorage.removeItem('username');
          await AsyncStorage.removeItem('password');
          
        }else if (response.data.status === 'error') {      
            console.log(response.data.message);
        }
    } catch (error) {
        console.error(error);
    }
};
const handleGetProfile = async () => {
  try {
    const url = `${API_CONFIG.HOST}${API_CONFIG.PROFILE}`;
    console.log(url)
    const response = await axios.get(url);
    if (response.data.status === 'success') {

      setUserData(response.data.user)
      setAddressData(response.data.address)

      console.log(userData)
      console.log(addressData)

    } else if (response.data.status === 'error') {
      console.log(response.data.message);
    }
  } catch (error) {
    console.error(error);
  }
};
React.useEffect(() => {
  const unsubscribe = navigation.addListener('focus', () => {
    handleGetProfile();
  });

  return unsubscribe;
}, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <AppBarWraper title="PROFILE"></AppBarWraper>
      <View style={styles.header}>
        <View style={styles.imgContainer}>
          <Image style={styles.avatar} source={{uri: 'https://img.freepik.com/free-photo/3d-illustration-teenager-with-funny-face-glasses_1142-50955.jpg?t=st=1702740564~exp=1702744164~hmac=bb277f08e5038ab61d7593e6c5d4956cc14cc2ec077467ab2901a967f147bdd8&w=826'}}></Image>
          <Text style={styles.name}>{userData.first_name} {userData.last_name}</Text>
        </View>     
      </View>
      <View style={styles.body}>
        <View style={styles.row}>
          <Text style={styles.text}>First name: </Text>
          <Text style={styles.inputStyleText}>{userData.first_name}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Last name: </Text>
          <Text style={styles.inputStyleText}>{userData.last_name}</Text>
        </View>  
        <View style={styles.row}>
          <Text style={styles.text}>Phone </Text>
          <Text style={styles.inputStyleText}>{addressData.phone}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Mail: </Text>
          <Text style={styles.inputStyleText}>{userData.email}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Address: </Text>
          <Text style={styles.inputStyleText} >{addressData.address}, {addressData.district}, {addressData.city}</Text>
        </View>
      </View>
      <View style={styles.footer}>
      <TouchableOpacity onPress={()=> navigation.navigate('EditProfile')}>
          <View style={styles.edit}>
            <Text  style={styles.editText}>Edit</Text>
            <AntDesign name='edit' color={themeColors.primary} size={22}></AntDesign>
          </View>          
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogOut}>
          <View style={styles.edit}>
            <Text  style={styles.editText}>LogOut</Text>
            <AntDesign name='logout' color={themeColors.primary} size={22}></AntDesign>
          </View>          
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Profile

