import { Animated, View, Text, TouchableOpacity, Image, TextInput, Alert } from 'react-native';
import React, { useRef, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import styles from './login.styles';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import API_CONFIG from '../../config'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/CartSlice';
export default function Login() {
  const navigation = useNavigation();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const dispatch = useDispatch();

  const handleGetCart = async () => {
    try {
      const response = await axios.get(`${API_CONFIG.HOST}${API_CONFIG.GETCART}`);
      if (response.data.status === 'success') {
        const cart = response.data.cart;
        if (typeof cart === 'object' && cart !== null) {
          Object.values(cart).forEach(item => {
            item.book.image = API_CONFIG.HOST+item.book.image
            dispatch(addToCart(item));
          });
          console.log(response.data.message);
        } else {
          console.log('Cart is not an object');
        }
      } else if (response.data.status === 'error') {
        console.log(response.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogin = async () => {
    try {
      const url = `${API_CONFIG.HOST}${API_CONFIG.LOGIN}`;
      const response = await axios.post(url, {
        username: username,
        password: password
      });

      if (response.data.status === 'success') {
        
        AsyncStorage.setItem('csrftoken', response.data.csrfToken);
        AsyncStorage.setItem('username', username);
        AsyncStorage.setItem('password', password);

        handleGetCart()
        navigation.navigate('Bottom Navigation', { screen: "Home" });
        console.log(response.data.message);
      } else if (response.data.status === 'error') {
        Alert.alert(response.data.message);
        console.log(response.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.topView}>
          <Image style={styles.topViewLogo} source={require('../../assets/images/logo.png')}></Image>
          <Text style={styles.topViewtext}>Sign In</Text>
          <Text style={styles.text}>Sign In to experience now </Text>

        </View>

        <View style={styles.midView}>
          <View style={styles.inputStyle}>
            <FontAwesome style={styles.inputStyleIcon} name='user-o' size={20}></FontAwesome>
            <TextInput
              style={styles.inputStyleText}
              placeholder='Username'
              onChangeText={text => setUsername(text)}
              value={username}
            ></TextInput>
          </View>

          <View style={styles.inputStyle}>
            <Ionicons style={styles.inputStyleIcon} name='lock-closed-outline' size={20}></Ionicons>
            <TextInput
              secureTextEntry
              style={styles.inputStyleText}
              placeholder='Password'
              onChangeText={text => setPassword(text)}
              value={password}
            ></TextInput>
          </View>
        </View>
        <View style={styles.bottomView}>

          <TouchableOpacity onPress={handleLogin}>
            <View style={styles.signInStyle}>
              <Text style={styles.signInStyleText}>Sign-in</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { }}>
            <View style={styles.forgotStyle}>
              <Text style={styles.forgotText}>Forgot password?</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}