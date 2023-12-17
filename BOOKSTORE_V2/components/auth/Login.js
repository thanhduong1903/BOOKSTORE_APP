import { Animated ,View, Text, ScrollView, TouchableOpacity, Image, TextInput   } from 'react-native';
import React, {useRef, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FontAwesome, Ionicons} from '@expo/vector-icons'
import styles from './login.styles';
import { useNavigation } from '@react-navigation/native';


export default function Login() {        
  const navigation = useNavigation();
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
            <TextInput style={styles.inputStyleText} placeholder='User name'></TextInput>
          </View>    
          <View style={styles.inputStyle}>
            <Ionicons style={styles.inputStyleIcon} name='lock-closed-outline' size={20}></Ionicons>
            <TextInput secureTextEntry style={styles.inputStyleText} placeholder='Password'></TextInput>
          </View>          
        </View>      
        <View style={styles.bottomView}>
          <TouchableOpacity onPress={()=>navigation.navigate('Stack',{screen:"Home"})}>
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