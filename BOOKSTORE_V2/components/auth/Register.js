import { Switch ,View, Text, ScrollView, TouchableOpacity, Image, TextInput ,SafeAreaView ,Alert } from 'react-native';
import React, {useState} from 'react';
import {FontAwesome, Ionicons, MaterialCommunityIcons} from '@expo/vector-icons'
import {styles } from './register.styles';
import { themeColors, themeSize } from '../../constants/theme';
import { SelectList } from 'react-native-dropdown-select-list';
import { useNavigation } from '@react-navigation/native';
import API_CONFIG from '../../config'
import axios from 'axios';
export default function Register() {

  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmpassword, setConfirmPassword] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [firstname, setFirstname] = React.useState('');
  const [lastname, setLastname] = React.useState('');

  const user = {
    first_name: firstname,
    last_name: lastname,
    username: username,
    email: email,
    password1: password,
    password2: confirmpassword
  };
  const handleRegister = async () => {
   
    try {
        const response = await axios({
            method: 'post',
            url: `${API_CONFIG.HOST}${API_CONFIG.REGISTER}`,
            headers: { 'Content-Type': 'application/json' },
            data: user
        });
        if (response.data.status === 'success') {
          console.log(response.data.message);
          Alert.alert(response.data.message);
          navigation.navigate('Login');
        } else if (response.data.status === 'error') {     
            Alert.alert(response.data.error);
            console.error(response.data.message); 
            console.error(response.data.error);
        }
    } catch (error) {
      console.log(error);
      console.error("Error from API: ", error.response.data);
    }
};
  const[district, setDisttrict] = useState("");
  const[city, setCity] = useState("");
  const districtData = [{key:'Q1', value:'Quận 1'}, {key:'Q2', value:'Quận 2'}, {key:'Q3', value:'Quận 3'}, {key:'BT', value:'Bình Tân'}, {key:'TB', value:'Tân Bình'}]
  const cityData = [{key:'hcm', value:'Hồ Chí Minh'},{key:'st', value:'Sóc Trăng'}, {key:'bd', value:'Bình Dương'}, {key:'tn', value:'Tây Ninh'}]
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
            <TextInput 
            style={styles.inputStyleText}
            placeholder='Enter user name'
            onChangeText={text => setUsername(text)}
            value={username}
            ></TextInput>
          </View>   

          <View style={styles.inputStyle}>
            <FontAwesome style={styles.inputStyleIcon} name='user-o' size={20}></FontAwesome>
            <TextInput
             style={styles.inputStyleText}
             placeholder='Enter your first name'
             onChangeText={text => setFirstname(text)}
             value={firstname}
             ></TextInput>
          </View>   

          <View style={styles.inputStyle}>
            <FontAwesome style={styles.inputStyleIcon} name='user-o' size={20}></FontAwesome>
            <TextInput style={styles.inputStyleText}
             placeholder='Enter your last name'
             onChangeText={text => setLastname(text)}
             value={lastname}
             ></TextInput>
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
            <Ionicons style={styles.inputStyleIcon} name='ios-location-outline' size={20}></Ionicons>
            <View style={styles.inputStyleText}>
              <SelectList   setSelected={setDisttrict} data={districtData} placeholder='Select your disttrict' defaultOption={{key:'Q1', value:'Quận 1'}}></SelectList>
            </View>
            
          </View>

          <View style={styles.inputStyle}>
            <MaterialCommunityIcons style={styles.inputStyleIcon} name='city-variant-outline' size={20}></MaterialCommunityIcons>
            <View style={styles.inputStyleText}>
              <SelectList style={styles.inputStyleText}  setSelected={setCity} data={cityData} placeholder='Select your disttrict' defaultOption={{key:'hcm', value:'Hồ Chí Minh'}}></SelectList>
            </View>
            
          </View>

          <View style={styles.inputStyle}>
            <Ionicons style={styles.inputStyleIcon} name='mail-outline' size={20}></Ionicons>
            <TextInput
             style={styles.inputStyleText}
             placeholder='Enter your Email'
             onChangeText={text => setEmail(text)}
             value={email}
             ></TextInput>
          </View>   
          
          <View style={styles.inputStyle}>
            <Ionicons style={styles.inputStyleIcon} name='lock-closed-outline' size={20}></Ionicons>
            <TextInput
             secureTextEntry
              style={styles.inputStyleText}
              placeholder='Enter password'
              onChangeText={text => setPassword(text)}
              value={password}
              ></TextInput>
          </View>  

          <View style={styles.inputStyle}>
            <Ionicons style={styles.inputStyleIcon} name='lock-closed-outline' size={20}></Ionicons>
            <TextInput
             secureTextEntry
              style={styles.inputStyleText}
              placeholder='Confirm password'
              onChangeText={text => setConfirmPassword(text)}
              value={confirmpassword}
              ></TextInput>
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
          
          <TouchableOpacity onPress={handleRegister}>
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