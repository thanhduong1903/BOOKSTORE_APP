import {Text, View, SafeAreaView, TextInput, Image, TouchableOpacity, Pressable } from 'react-native'
import React,{useState} from 'react'
import { styles } from './editProfile.style';
import {AntDesign, Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
import { themeColors, themeSize } from '../constants/theme';
import AppBarWrapper from '../constants/AppBarWrapper';
import { Dropdown } from 'react-native-element-dropdown';
import { ScrollView } from 'react-native-virtualized-view';
export default function EditProfile () {

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmpassword, setConfirmPassword] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [firstname, setFirstname] = React.useState('');
  const [lastname, setLastname] = React.useState('');
  const[district, setDisttrict] = useState(null);
  const[city, setCity] = useState(null);


  const districtData = [{key:'Q1', value:'Quận 1'}, {key:'Q2', value:'Quận 2'}, {key:'Q3', value:'Quận 3'}, {key:'BT', value:'Bình Tân'}, {key:'TB', value:'Tân Bình'}]
  const cityData = [{key:'hcm', value:'Hồ Chí Minh'},{key:'st', value:'Sóc Trăng'}, {key:'bd', value:'Bình Dương'}, {key:'tn', value:'Tây Ninh'}]
  const [valueDropdown, setValueDropdown] = useState(null);
  return (
    <SafeAreaView style={styles.container}>
      <AppBarWrapper title="EDIT PROFILE"></AppBarWrapper>
      <ScrollView>
      <View style={styles.header}>
        <View style={styles.imgContainer}>
          <Image style={styles.avatar} source={{uri: 'https://img.freepik.com/free-photo/3d-illustration-teenager-with-funny-face-glasses_1142-50955.jpg?t=st=1702740564~exp=1702744164~hmac=bb277f08e5038ab61d7593e6c5d4956cc14cc2ec077467ab2901a967f147bdd8&w=826'}}></Image>
          <Text style={styles.name}>Matthew</Text>
        </View>     
      </View>
      
      <View style={styles.body}>
        <View style={styles.row}>
          <Text style={styles.text}>User name: </Text>
          <TextInput style={styles.input} value='Matthew'></TextInput>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>First name: </Text>
          <TextInput style={styles.input} value='Thanh Dương'></TextInput>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Last name: </Text>
          <TextInput style={styles.input} value='Lý'></TextInput>
        </View>          
        <View style={styles.row}>
          <Text style={styles.text}>Phone: </Text>
          <TextInput style={styles.input} value='0785643365'></TextInput>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Email: </Text>
          <TextInput style={styles.input} value='thanhduong1903@gmail.com'></TextInput>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Change password: </Text>
          <TextInput secureTextEntry style={styles.input} value='456678'></TextInput>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Confirm password: </Text>
          <TextInput secureTextEntry style={styles.input} value='456678'></TextInput>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Address: </Text>
          <TextInput style={styles.input} value='20 Thân Nhân Trung'></TextInput>
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
            onChange={item => { setDisttrict(item.value);
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
            onChange={item => { setCity(item.value);
            }}
            ></Dropdown>
            </View>
            
          </View> 

      </View>
     
      <View style={styles.footer}>
        <TouchableOpacity>
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