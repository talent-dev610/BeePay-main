
import * as React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { StyleSheet, ImageBackground } from 'react-native';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Checkbox from 'expo-checkbox';
import { useState } from 'react';
import { LinearGradient } from "expo-linear-gradient";

const userImage = require("../../assets/user.png");
const logoImage = require("../../assets/logo.png");
const backgroundImage = require("../../assets/back.png");

export default function BoardScreen({ navigation }) {
  const [checked, setChecked] = useState(false);

  const handlePress = () => {
    setChecked(!checked);
  };
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <ImageBackground source={backgroundImage}
        resizeMode='stretch'
        style={styles.imageBackgorund}>
      </ImageBackground>
      <Image source={logoImage} style={styles.logo} />
      <Text style={{ color: '#BF8122', fontSize: hp('2.5%'), marginVertical: hp('2%') }}>Welcome to bee pay</Text>
      <LinearGradient
        style={styles.settingPad}
        colors={["#D98F26", "#BF8122", "#AB761F", "#A4721E", "#A9761F", "#B98221", "#D39525", "#D79826", "#FDF576", "#F4CC69"]}
        start={[0, 0]}
        end={[1, 0]}
        locations={[0, 0.048, 0.085, 0.1201, 0.19, 0.27, 0.37, 0.38, 0.78, 1]}
      >
        <Image source={userImage} style={{ width: hp('11%'), height: hp('11%'), borderRadius: wp('30%'), backgroundColor: '#555' }} />
        <TouchableOpacity style={styles.custombutton}>
          <Text style={{ fontSize: hp('2.5%'), color: 'white', alignSelf: 'center' }}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.custombutton}>
          <Text style={{ fontSize: hp('2.5%'), color: 'white', alignSelf: 'center' }}>Sign up</Text>
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 8, width: wp('65%') }}>
          <View style={{ flexDirection: 'row', height: 15, alignItems: 'center' }}>
            <Checkbox
              value={checked}
              onValueChange={handlePress}
              style={{ width: 14, height: 14, borderWidth: 1 }}
              color={checked ? 'green' : 'black'}
            />
            <Text style={{ fontSize: 10, marginLeft: 8 }}>Remember me</Text>
          </View>
          <TouchableOpacity>
            <Text style={{ fontSize: 10 }}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={[styles.custombutton, { width: wp('50%'), marginTop: hp('6%') }]} onPress={() => navigation.navigate("Dashboard")} >
          <Text style={{ fontSize: hp('2.2%'), color: 'white', alignSelf: 'center' }} >Get Refferal Code</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffF',
    alignItems: 'center'
  },
  logo: {
    width: wp('18%'),
    height: wp('18%'),
    marginTop: hp('13%'),
  },
  settingPad: {
    width: wp('75%'),
    height: hp('52%'),
    alignItems: 'center',
    borderRadius: 20,
    padding: wp('5%')
  },
  custombutton: {
    width: '100%',
    paddingVertical: 10,
    borderRadius: 8,
    textAlign: 'center',
    backgroundColor: 'black',
    marginVertical: hp('1.6%')
  },
  imageBackgorund: {
    flex: 1,
    justifyContent: 'center',
    width: wp('100%'),
    height: hp('100%'),
    position: 'absolute'
  }
});
