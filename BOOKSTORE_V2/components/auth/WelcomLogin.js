import { View, Text, SafeAreaView, Image } from 'react-native';
import React, {useRef, useState} from 'react';
import { Video, ResizeMode } from 'expo-av';
export default function WelcomLogin(){
  const video = useRef(null);
  const [status, setStatus] = React.useState({})
  return (
    <SafeAreaView style={{flex: 1, alignItems:'center', justifyContent: 'center', backgroundColor: '#fff'}}>
      {/* <Text>WELLCOME</Text> */}
      <Video ref={video} style={{backgroundColor: '#fff', width: 300, height: 300}} source={require('../../assets/images/Wellcome.mp4')}
        resizeMode={ResizeMode.CONTAIN} isLooping={false} shouldPlay
      />
      {/* <Video source={require('../../assets/images/Wellcome.mp4')} controls={false}></Video> */}
    </SafeAreaView>
  )
}

