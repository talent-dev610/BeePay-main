import React, { useCallback } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ResizeMode } from 'expo-av';
import VideoPlayer from 'expo-video-player';
import { useFocusEffect } from '@react-navigation/native';

export default function SplashScreen({ navigation }) {

  useFocusEffect(
    useCallback(() => {
      const interval = setInterval(() => {
        navigation.navigate('HomeScreen');
      }, 4000);

      return () => clearInterval(interval);
    }, [])
  );

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
      alignItems: 'center',
      justifyContent: 'center',
      width: wp('100%'),
      height: hp('100%')
    }
  });


  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <VideoPlayer
        videoProps={{
          shouldPlay: true,
          resizeMode: ResizeMode.CONTAIN,
          isLooping: true,
          source: require("../../assets/coin.mp4"),
        }}
      />
    </View>
  );
}