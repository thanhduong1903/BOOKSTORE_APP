import { Animated ,View, Text, TouchableOpacity, Image, TextInput,Alert   } from 'react-native';
import React, {useRef, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FontAwesome, Ionicons} from '@expo/vector-icons'
import styles from './login.styles';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import API_CONFIG from '../../config'
export default function Login() {        
  const navigation = useNavigation();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = async () => {
    try {

      // const response = await axios.post("http://192.168.1.11:8000/user/login/", {
      //   username: username,
      //   password: password
      // });
      const response = await axios.post(`${API_CONFIG.HOST}${API_CONFIG.LOGIN}`, {
        username: username,
        password: password
      });
  
      if (response.data.status === 'success') {
        navigation.navigate('Bottom Navigation', {screen: "Home"});
      } else if (response.data.status === 'error') {      
        Alert.alert(response.data.message);
        console.log(response.data.message);
      }
    } catch (error) {
      // handle error here
      console.log(error);
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
              placeholder='User name'
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

          <TouchableOpacity onPress={()=>{}}>
            <View style={styles.forgotStyle}>
              <Text style={styles.forgotText}>Forgot password?</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>      
    </SafeAreaView>
  )
}