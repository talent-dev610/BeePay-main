
import * as React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Checkbox from 'expo-checkbox';
import { useState } from 'react';
import { LinearGradient } from "expo-linear-gradient";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Agreement({ navigation }) {
  const [termChecked, termSetChecked] = useState(false);
  const [policyChecked, policySetChecked] = useState(false);

  const termPress = () => {
    termSetChecked(!termChecked);
  };

  const policyPress = () => {
    policySetChecked(!policyChecked);
  };
  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.linearPad}
        colors={["#D98F26", "#BF8122", "#AB761F", "#A4721E", "#A9761F", "#B98221", "#D39525", "#D79826", "#FDF576", "#F4CC69"]}
        start={[0, 0]}
        end={[1, 0]}
        locations={[0, 0.048, 0.085, 0.1201, 0.19, 0.27, 0.37, 0.38, 0.78, 1]}
      >
        <StatusBar hidden={true} />
        <View style={styles.headerView}>

          <TouchableOpacity>
            <MaterialCommunityIcons name='chevron-left' size={hp('4.5%')} />
          </TouchableOpacity>
          <Text style={styles.headerTitle} >Terms and Conditions</Text>
          <MaterialCommunityIcons name='chevron-right' size={hp('4.5%')} color={"gray"} />
        </View>

        <Text style={styles.headerSubTitle}>Terms and Conditions</Text>

        <ScrollView style={{ width: wp('90%'), alignSelf: 'center', maxHeight: hp('50%') }}>

          <Text style={styles.policyText}>

            Please read these terms and conditions carefully before using Our Service.
            Interpretation and Definitions Interpretation

            The words of which the initial letter is capitalized have meanings defined under the
            following conditions. The following definitions shall have the same meaning
            regardless of whether they appear in singular or in plural Definitions.

            For the burnoses of these Terms of Service:

            "Affillate" means an entity that controls, is controlled by or is under commom
            control with a party, where "control" means ownership of 50% or more of the shares,
            equity interest or other securities entitled to vote for election of directors or other
            managing authority.
            "Account" means a unique account created for You to access our Service or parts of our Service.

            "Company" (referred to as either "the Company", "We", "Us" or "Our" in this
            Agreement) refers to Crocisive.
            "Country" refers to India.
            "Content" refers to content such as text,
            images, or other information that can be posted, uploaded, linked or to other
            The words of which the initial letter is capitalized have meanings defined under the

            wise madde available by You, regardless of the form of that content.
          </Text>

        </ScrollView>
        <View style={styles.agreeItem}>
          <Checkbox value={termChecked} onValueChange={termPress} style={styles.checkBox} />
          <Text style={{ color: 'black', fontSize: hp('1.9%'), fontWeight: '400' }}> I agree with Terms and Conditions</Text>
        </View>

        <View style={styles.agreeItem}>
          <Checkbox value={policyChecked} onValueChange={policyPress} style={styles.checkBox} checked={true} />
          <Text style={{ color: 'black', fontSize: hp('1.9%'), fontWeight: '400', alignSelf: 'center' }}> I agree with Crocisive Privacy Policy</Text>
        </View>

        <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate("SecretPhrase")}>
          <Text style={{ alignSelf: 'center', color: 'white', fontSize: hp('2.5%'), fontWeight: '900' }}>Continue</Text>
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
  linearPad: {
    width: wp('100%'),
    height: hp('100%')
  },
  agreeItem: {
    flexDirection: 'row',
    marginTop: hp('2%'),
    alignItems: 'center',
    marginLeft: wp('8%')
  },
  buttonStyle: {
    backgroundColor: 'black',
    width: wp('80%'),
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: hp('4%')
  },
  checkBox: {
    backgroundColor: 'black',
    borderRadius: 14,
    width: 14,
    height: 14,
    alignSelf: 'center'
  },
  headerView: {
    width: wp('90%'),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp('8%')
  },
  headerTitle: {
    color: 'black',
    fontSize: hp('2.8%'),
    textAlign: 'center',
    alignSelf: 'center',
    fontWeight: '500'
  },
  headerSubTitle: {
    fontSize: hp('2%'),
    paddingLeft: wp('8%'),
    fontWeight: '900',
    marginVertical: hp('2%')
  },
  policyText: {
    color: 'black',
    fontSize: 15,
    width: wp('70%'),
    marginLeft: wp('10%')
  }

});
