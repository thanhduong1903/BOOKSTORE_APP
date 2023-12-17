import { Switch ,View, Text, ScrollView, TouchableOpacity, Image, TextInput ,SafeAreaView  } from 'react-native';
import React, {useState} from 'react';
import {FontAwesome, Ionicons} from '@expo/vector-icons'
import styles from './register.styles';
import { themeColors, themeSize } from '../../constants/theme';


export default function Register() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <SafeAreaView>
      <ScrollView>
      <View style={styles.container}>
        <View style={styles.topView}>
          <Image style={styles.topViewLogo} source={require('../../assets/images/logo.png')}></Image>
          <Text style={styles.topViewtext}>Register</Text>       
          <Text style={styles.text}>Create an account to experience now </Text> 
          
        </View>
        <View style={styles.midView}>
          <View style={styles.inputStyle}>
            <FontAwesome style={styles.inputStyleIcon} name='user-o' size={20}></FontAwesome>
            <TextInput style={styles.inputStyleText} placeholder='Enter your name'></TextInput>
          </View>   
          <View style={styles.inputStyle}>
            <Ionicons style={styles.inputStyleIcon} name='phone-portrait-outline' size={20}></Ionicons>
            <TextInput style={styles.inputStyleText} placeholder='Enter your phone number'></TextInput>
          </View> 
          <View style={styles.inputStyle}>
            <Ionicons style={styles.inputStyleIcon} name='location-outline' size={20}></Ionicons>
            <TextInput style={styles.inputStyleText} placeholder='Enter your address'></TextInput>
          </View> 
          <View style={styles.inputStyle}>
            <Ionicons style={styles.inputStyleIcon} name='mail-outline' size={20}></Ionicons>
            <TextInput style={styles.inputStyleText} placeholder='Enter your Email'></TextInput>
          </View>   
          <View style={styles.inputStyle}>
            <Ionicons style={styles.inputStyleIcon} name='lock-closed-outline' size={20}></Ionicons>
            <TextInput secureTextEntry style={styles.inputStyleText} placeholder='Enter password'></TextInput>
          </View>  
          <View style={styles.inputStyle}>
            <Ionicons style={styles.inputStyleIcon} name='lock-closed-outline' size={20}></Ionicons>
            <TextInput secureTextEntry style={styles.inputStyleText} placeholder='Confirm password'></TextInput>
          </View>   
              
        </View>      
        <View style={styles.bottomView}>      
          <View style={styles.terms}>
            <View style={styles.swicthText}>
            <Switch trackColor={{false: themeColors.primary, true: themeColors.blue}} thumbColor={isEnabled ? themeColors.primary : themeColors.secondary} ios_backgroundColor="#3e3e3e" onValueChange={toggleSwitch} value={isEnabled}></Switch>
            </View>
            <View style={styles.termsText}>
              <Text style={styles.bottomViewText}>I have read & agree to the terms</Text>
            </View>          
          </View>
          
          <TouchableOpacity onPress={()=>{}}>
            <View style={styles.signInStyle}>
              <Text style={styles.signInStyleText}>Create</Text>
            </View>  
          </TouchableOpacity>
        </View>
      </View>      
    </ScrollView>
    </SafeAreaView>    
  )
}