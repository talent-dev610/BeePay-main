
import * as React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { LinearGradient } from "expo-linear-gradient";

const panelImage = require("../../assets/panel.png");

export default function Dashboard({ navigation }) {

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Image source={panelImage} style={{ marginTop: hp('12%'), width: wp('84%'), height: hp('22%') }} resizeMode='stretch' />
      <Text style={{ position: 'absolute', top: hp('23%'), color: '#D98F26', fontSize: 20 }}>4121 1324 3463 4564  </Text>
      <LinearGradient
        style={styles.linearPad}
        colors={["#D98F26", "#BF8122", "#AB761F", "#A4721E", "#A9761F", "#B98221", "#D39525", "#D79826", "#FDF576", "#F4CC69"]}
        start={[0, 0]}
        end={[1, 0]}
        locations={[0, 0.048, 0.085, 0.1201, 0.19, 0.27, 0.37, 0.38, 0.78, 1]}
      >
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.buttonText}>
            Get Your Profile
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate("Agreement")}>
          <Text style={styles.buttonText}>
            Crypto Index Fund
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.buttonText}>
            Staking
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate("AddToken")}>
          <Text style={styles.buttonText}>
            Stocks
          </Text>
        </TouchableOpacity>

      </LinearGradient>

      <TouchableOpacity style={[styles.buttonStyle, { width: wp('90%'), height: hp('7%'), marginTop: hp('5%') }]}>

      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffF',
    alignItems: 'center'
  },
  linearPad: {
    width: wp('80%'),
    height: hp('33%'),
    marginTop: hp('11.8%'),
    borderRadius: 12,
    paddingHorizontal: 6,
    paddingVertical: hp('5%'),
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  buttonStyle: {
    width: wp('70%'),
    paddingVertical: 8,
    textAlign: 'center',
    alignSelf: 'center',
    backgroundColor: 'black',
    borderRadius: 8,
  },
  buttonText: {
    color: '#ffB266',
    fontSize: 14,
    fontWeight: '600',
    alignSelf: 'center'
  }

});
