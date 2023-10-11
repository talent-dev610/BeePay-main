
import { LinearGradient } from 'expo-linear-gradient';
import * as React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const phraseImage = require("../../assets/phrase.png")

export default function Backup({ navigation }) {

  return (
    <>
      <View style={styles.container}>
        <StatusBar hidden={true} />

        <Image source={phraseImage} style={{ width: hp('15%'), height: hp('17%'), marginTop: hp('9%') }} />
        <Text style={{ color: 'white', fontSize: hp('3%'), fontWeight: '600', marginTop: hp('4%') }}>Back up secret phrase</Text>
        <Text style={{ color: 'gray', fontSize: hp('1.8%'), width: wp('70%'), textAlign: 'center', marginTop: hp('6%') }}>
          Your secret phrase is the most master key to your wallet, and anyone that has it can access your crypto.
          Never share it!
        </Text>
        <TouchableOpacity
        >
          <LinearGradient
            style={styles.settingPad2}
            colors={["#D98F26", "#BF8122", "#AB761F", "#A4721E", "#A9761F", "#B98221", "#D39525", "#D79826", "#FDF576", "#F4CC69"]}
            start={[0, 0]}
            end={[1, 0]}
            locations={[0, 0.048, 0.085, 0.1201, 0.19, 0.27, 0.37, 0.38, 0.78, 1]}
          >
            <View style={styles.innerGradient}>
              <Text style={{ alignSelf: 'center', color: '#888' }}>Back up to iCloud</Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginTop: hp('3%') }} onPress={() => navigation.navigate("Agreement")}>
          <Text style={{ color: '#888', fontWeight: '500' }}>Back up to manually</Text>
        </TouchableOpacity>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center'
  },
  settingPad2: {
    width: wp('70%'),
    height: hp('6%'),
    borderRadius: 5,
    padding: 1,
    marginTop: hp('27%')
  },
  innerGradient: {
    backgroundColor: '#000',
    width: '100%',
    height: '100%',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
