
import { LinearGradient } from 'expo-linear-gradient';
import * as React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const defenseImage = require("../../assets/defense.png");
const copyImage = require("../../assets/copy.png");
const warnImage = require("../../assets/warning.png");
const roundInfo = require("../../assets/round.png");

export default function SecretPhrase({ navigation }) {

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.alertMessage}>
        <Image source={warnImage} style={{ width: 20, height: 20 }} />
        <Text style={{ marginRight: 8, color: 'white', fontSize: 13, marginLeft: 4 }}>Never share your secret pharase with anyone.</Text>
        <Image source={roundInfo} style={{ width: 24, height: 24 }} />
      </View>

      <View style={{ flexDirection: 'row', marginTop: hp('7%'), height: hp('32%') }}>
        <View style={{ flexDirection: 'column', paddingRight: 8, height: hp('32%'), justifyContent: 'space-between' }}>
          <View style={styles.linedBox}>
            <Text style={{ color: 'gray' }}>1</Text>
            <Text style={{ color: 'white', marginLeft: 12 }} >used</Text>
          </View>

          <View style={styles.linedBox}>
            <Text style={{ color: 'gray' }}>2</Text>
            <Text style={{ color: 'white', marginLeft: 12 }} >solution</Text>
          </View>

          <View style={styles.linedBox}>
            <Text style={{ color: 'gray' }}>3</Text>
            <Text style={{ color: 'white', marginLeft: 12 }} >liquid</Text>
          </View>

          <View style={styles.linedBox}>
            <Text style={{ color: 'gray' }}>4</Text>
            <Text style={{ color: 'white', marginLeft: 12 }} >already</Text>
          </View>

          <View style={styles.linedBox}>
            <Text style={{ color: 'gray' }}>5</Text>
            <Text style={{ color: 'white', marginLeft: 12 }} >develop</Text>
          </View>

          <View style={styles.linedBox}>
            <Text style={{ color: 'gray' }}>6</Text>
            <Text style={{ color: 'white', marginLeft: 12 }} >denial</Text>
          </View>

        </View>

        <View style={{ flexDirection: 'column', paddingLeft: 8, height: hp('32%'), justifyContent: 'space-between' }}>
          <View style={styles.linedBox}>
            <Text style={{ color: 'gray' }}>7</Text>
            <Text style={{ color: 'white', marginLeft: 12 }} >rival</Text>
          </View>
          <View style={styles.linedBox}>
            <Text style={{ color: 'gray' }}>8</Text>
            <Text style={{ color: 'white', marginLeft: 12 }} >vague</Text>
          </View>
          <View style={styles.linedBox}>
            <Text style={{ color: 'gray' }}>9</Text>
            <Text style={{ color: 'white', marginLeft: 12 }} >library</Text>
          </View>
          <View style={styles.linedBox}>
            <Text style={{ color: 'gray' }}>10</Text>
            <Text style={{ color: 'white', marginLeft: 12 }} >pupil</Text>
          </View>
          <View style={styles.linedBox}>
            <Text style={{ color: 'gray' }}>11</Text>
            <Text style={{ color: 'white', marginLeft: 12 }} >harvest</Text>
          </View>
          <View style={styles.linedBox}>
            <Text style={{ color: 'gray' }}>12</Text>
            <Text style={{ color: 'white', marginLeft: 12 }} >still</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginVertical: hp('9%'), gap: 6 }}>
        <Image source={copyImage} style={{ width: 20, height: 20 }} />
        <Text style={{ color: '#D98F26', fontSize: 18 }}>Copy</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
        <Image source={defenseImage} style={{ width: 18, height: 18 }} />
        <Text style={{ color: '#FF9933', textAlign: 'center', width: wp('70%') }}>
          Never share your secret phrase with anyone, store it securely!
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Verify")}
      >
        <LinearGradient
          style={styles.settingPad2}
          colors={["#D98F26", "#BF8122", "#AB761F", "#A4721E", "#A9761F", "#B98221", "#D39525", "#D79826", "#FDF576", "#F4CC69"]}
          start={[0, 0]}
          end={[1, 0]}
          locations={[0, 0.048, 0.085, 0.1201, 0.19, 0.27, 0.37, 0.38, 0.78, 1]}
        >
          <View style={styles.innerGradient}>
            <Text style={{ color: 'white', fontSize: 18 }}>Continue</Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center'
  },
  alertMessage: {
    flexDirection: 'row',
    borderRadius: 8,
    width: wp('92%'),
    alignItems: 'center',
    backgroundColor: '#332100',
    paddingVertical: 12,
    justifyContent: 'center',
    marginTop: hp('3%'),
  },
  linedBox: {
    borderBottomColor: '#222',
    borderBottomWidth: 1,
    flexDirection: 'row',
    width: wp('40%'),
    paddingBottom: 6,
    marginTop: 12
  },
  settingPad2: {
    width: wp('80%'),
    height: hp('6%'),
    borderRadius: 5,
    padding: 1,
    marginVertical: hp('2%')
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
