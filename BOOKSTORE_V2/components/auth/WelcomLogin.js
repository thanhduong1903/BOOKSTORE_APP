import { View, Text, SafeAreaView, Image } from 'react-native';
import React, {useRef, useState} from 'react';
import { Video, ResizeMode } from 'expo-av';
import { useNavigation } from '@react-navigation/native';

export default function WelcomLogin(){
  const video = useRef(null);
  const navigation = useNavigation();

  const checkPlaybackStatus = (status) => {
    if (status.didJustFinish) {
      navigation.navigate('First Look');
    }
  }

  return (
    <SafeAreaView style={{flex: 1, alignItems:'center', justifyContent: 'center', backgroundColor: '#fff'}}>
      <Video ref={video} style={{backgroundColor: '#fff', width: 300, height: 300}} source={require('../../assets/images/Wellcome.mp4')}
        resizeMode={ResizeMode.CONTAIN} isLooping={false} shouldPlay onPlaybackStatusUpdate={checkPlaybackStatus}
      />
    </SafeAreaView>
  )
}
