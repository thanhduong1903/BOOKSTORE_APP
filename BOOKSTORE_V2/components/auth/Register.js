import { Switch, View, Text, ScrollView, TouchableOpacity, Image, TextInput, SafeAreaView, Alert } from 'react-native';
import React, { useState } from 'react';
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { styles } from './register.styles';
import { themeColors, themeSize } from '../../constants/theme';
import { SelectList } from 'react-native-dropdown-select-list';
import { useNavigation } from '@react-navigation/native';
import { Dropdown } from 'react-native-element-dropdown';
import API_CONFIG from '../../config'
import axios from 'axios';
export default function Register() {

  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [username, setUsername] = React.useState('');
  const [firstname, setFirstname] = React.useState('');
  const [lastname, setLastname] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmpassword, setConfirmPassword] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [district, setDisttrict] = React.useState('');
  const [city, setCity] = React.useState('');
  const districtData = [{ key: 'Quận 1', value: 'Quận 1' }, { key: 'Quận 2', value: 'Quận 2' }, { key: 'Quận 3', value: 'Quận 3' }, { key: 'Bình Tân', value: 'Bình Tân' }, { key: 'Tân Bình', value: 'Tân Bình' }]
  const cityData = [{ key: 'Hồ Chí Minh', value: 'Hồ Chí Minh' }, { key: 'Sóc Trăng', value: 'Sóc Trăng' }, { key: 'Bình Dương', value: 'Bình Dương' }, { key: 'Tây Ninh', value: 'Tây Ninh' }]
  
  React.useEffect(() => {
    console.log(`City is now: ${city}`);
    console.log(`District is now: ${district}`);
  }, [city, district]); 
  const handleRegister = async () => {
    try {
      if (!firstname || !lastname || !email || !phone || !address || !district || !city||!password||!confirmpassword) {
        alert('Please provide complete information.');
        return;
      }else{
        console.log(username)
        console.log(firstname)
        console.log(lastname)
        console.log(email)
        console.log(phone)
        console.log(address)
        console.log(city)
        console.log(district)
        console.log(password)
        console.log(confirmpassword)
      }
      


      const userData = {
        first_name: firstname,
        last_name: lastname,
        username: username,
        email: email,
        phone: phone,
        address: address,
        city: city,
        district: district,
        password1: password,
        password2: confirmpassword
      };
      const response = await axios.post(`${API_CONFIG.HOST}${API_CONFIG.REGISTER}`, {
        first_name: firstname,
        last_name: lastname,
        username: username,
        email: email,
        phone: phone,
        address: address,
        city: city.value,
        district: district.value,
        password1: password,
        password2: confirmpassword
      });
      if (response.data.status === 'success') {
        console.log(response.data.message);
        Alert.alert(response.data.message);
        navigation.navigate('Login');
      } else if (response.data.status === 'warning') {
        Alert.alert(response.data.error);
        console.info(response.data.field);
        console.info(response.data.error);
      }
    } catch (error) {
      console.log(error);
      if (error.response) {
        console.error("Error from API: ", error.response.data);
      } else {
        console.error("Error: ", error.message);
      }
    }
  };
  

  
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
              <TextInput style={styles.inputStyleText} 
              placeholder='Enter your phone number'       
              onChangeText= {text => setPhone(text)}
              value={phone}
              ></TextInput>
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
              <Ionicons style={styles.inputStyleIcon} name='location-outline' size={20}></Ionicons>
              <TextInput style={styles.inputStyleText} 
              placeholder='Enter your address'
              onChangeText={text => setAddress(text)}
              value={address}
              >          
              </TextInput>
            </View>


            <View style={styles.inputStyle}>
              <MaterialCommunityIcons style={styles.inputStyleIcon} name='city-variant-outline' size={20}></MaterialCommunityIcons>
              <View style={styles.inputStyleText}>
                <Dropdown style={styles.dropdown}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  data={cityData}
                  search
                  maxHeight={300}
                  labelField="value"
                  valueField="key"
                  placeholder="Select city"
                  searchPlaceholder="Search..."
                  value={city}
                  onChange={item => {
                    setCity(item);
                  }}
                ></Dropdown>
              </View>
            </View>


            <View style={styles.inputStyle}>
              <Ionicons style={styles.inputStyleIcon} name='ios-location-outline' size={20}></Ionicons>
              <View style={styles.inputStyleText}>
                <Dropdown style={styles.dropdown}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  data={districtData}
                  search
                  maxHeight={300}
                  labelField="value"
                  valueField="key"
                  placeholder="Select disttrict"
                  searchPlaceholder="Search..."
                  value={district}
                  onChange={item => {
                    setDisttrict(item);
                  }}
                ></Dropdown>
              </View>
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
                <Switch trackColor={{ false: themeColors.primary, true: themeColors.blue }} thumbColor={isEnabled ? themeColors.primary : themeColors.secondary} ios_backgroundColor="#3e3e3e" onValueChange={toggleSwitch} value={isEnabled}></Switch>
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