import {Text, View, SafeAreaView, TextInput, Image, TouchableOpacity, Pressable } from 'react-native'
import React,{useState} from 'react'
import { styles } from './editProfile.style';
import {AntDesign, Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
import { themeColors, themeSize } from '../constants/theme';
import AppBarWrapper from '../constants/AppBarWrapper';
import { Dropdown } from 'react-native-element-dropdown';
import { ScrollView } from 'react-native-virtualized-view';
import axios from 'axios';
import API_CONFIG from '../config'
export default function EditProfile () {

  const [email, setEmail] = React.useState('');
  const [firstname, setFirstname] = React.useState('');
  const [lastname, setLastname] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [district, setDistrict] = React.useState('');
  const [city, setCity] = React.useState('');

  const districtData = [{key:'Q1', value:'Quận 1'}, {key:'Q2', value:'Quận 2'}, {key:'Q3', value:'Quận 3'}, {key:'BT', value:'Bình Tân'}, {key:'TB', value:'Tân Bình'}]
  const cityData = [{key:'hcm', value:'Hồ Chí Minh'},{key:'st', value:'Sóc Trăng'}, {key:'bd', value:'Bình Dương'}, {key:'tn', value:'Tây Ninh'}]

  const handleGetProfile = async () => {
    try {
      const url = `${API_CONFIG.HOST}${API_CONFIG.PROFILE}`;
      const response = await axios.get(url);
      if (response.data.status === 'success') {
        const userDataFromApi = response.data.user;
        const addressDataFromApi = response.data.address;
        setFirstname(userDataFromApi.first_name)
        setLastname(userDataFromApi.last_name)
        setEmail(userDataFromApi.email)
        setPhone(addressDataFromApi.phone)
        setAddress(addressDataFromApi.address)
  
        const districtFromApi = addressDataFromApi.district;
        const cityFromApi = addressDataFromApi.city;
  
        const foundDistrict = districtData.find(d => d.value === districtFromApi)
        const foundCity = cityData.find(c => c.value === cityFromApi)
  
        setDistrict(foundDistrict);
        setCity(foundCity);


      } else if (response.data.status === 'error') {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  const handleUpdateProfile = async () => {
    try {
      console.log(district.value)
      console.log(city.value)

      if (!firstname || !lastname || !email || !phone || !address || !district || !city) {
        alert('Please provide complete information.');
        return;
      }
      const url = `${API_CONFIG.HOST}${API_CONFIG.UPDATE_PROFILE}`;
      const response = await axios.post(url, { 
        first_name: firstname,
        last_name: lastname,
        email: email,
        phone: phone,
        address: address,
        district: district.value ,
        city: city.value,
      });
      if (response.data.status === 'success') {
        alert('Profile updated successfully');

      } else if (response.data.status === 'error') {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };
  React.useEffect(() => {
    console.log(`City is now: ${city.value}`);
    console.log(`District is now: ${district.value}`);
  }, [city, district]); 
  React.useEffect(() => {
    handleGetProfile()
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <AppBarWrapper title="EDIT PROFILE"></AppBarWrapper>
      <ScrollView>
      <View style={styles.header}>
        <View style={styles.imgContainer}>
          <Image style={styles.avatar} source={{uri: 'https://img.freepik.com/free-photo/3d-illustration-teenager-with-funny-face-glasses_1142-50955.jpg?t=st=1702740564~exp=1702744164~hmac=bb277f08e5038ab61d7593e6c5d4956cc14cc2ec077467ab2901a967f147bdd8&w=826'}}></Image>
          <Text style={styles.name}>{firstname} {lastname} </Text>
        </View>     
      </View>
      
      <View style={styles.body}>
        <View style={styles.row}>
          <Text style={styles.text}>First name: </Text>
          <TextInput style={styles.input} value={firstname} onChangeText={text => setFirstname(text)} />
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Last name: </Text>
          <TextInput style={styles.input} value={lastname} onChangeText={text => setLastname(text)} />
        </View>          
        <View style={styles.row}>
          <Text style={styles.text}>Phone: </Text>
          <TextInput style={styles.input} value={phone} onChangeText={text => setPhone(text)} />
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Email: </Text>
          <TextInput style={styles.input} value={email} onChangeText={text => setEmail(text)} />
        </View>
        {/* <View style={styles.row}>
          <Text style={styles.text}>Change password: </Text>
          <TextInput secureTextEntry style={styles.input} value='456678'></TextInput>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Confirm password: </Text>
          <TextInput secureTextEntry style={styles.input} value='456678'></TextInput>
        </View> */}
        <View style={styles.row}>
          <Text style={styles.text}>Address: </Text>
          <TextInput style={styles.input} value={address}  onChangeText={text => setAddress(text)} />
        </View>
        
        <View style={styles.row}>
            <Text style={styles.text}>Disttrict: </Text>
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
              setDistrict(item);
            }}
            ></Dropdown>
            </View>
            
          </View> 

          <View style={styles.row}>
          <Text style={styles.text}>City: </Text>
            <View style={styles.inputStyleText}>
            <Dropdown style={styles. dropdown}
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

      </View>
     
      <View style={styles.footer}>

        <TouchableOpacity onPress={handleUpdateProfile}>
          <View style={styles.edit}>
            <Text  style={styles.editText}>Save</Text>
            <AntDesign name='save' color={themeColors.primary} size={22}></AntDesign>
          </View>          
        </TouchableOpacity>   

      </View>
      </ScrollView>
    </SafeAreaView>
  )
}