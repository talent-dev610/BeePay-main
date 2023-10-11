
import * as React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import OTPInputView from '@twotalltotems/react-native-otp-input'


export default function Passcode({ navigation, route }) {
    const ownWallet = route.params.ownWallet;

    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />
            <Text
                style={{ color: 'white', fontWeight: '500', fontSize: hp('2.4%'), marginTop: hp('20%') }}
            >
                Create Passcode
            </Text>
            <OTPInputView
                pinCount={6}
                secureTextEntry={true}
                autoFocusOnLoad
                codeInputFieldStyle={styles.underlineStyleBase}
                onCodeFilled={(code) => {
                    console.log(`Code is ${code}`)
                    if (!ownWallet) navigation.navigate("Backup")
                    else navigation.navigate("ImportPhase")
                }}
                style={{ width: wp('80%'), color: 'white', alignSelf: 'center', marginTop: hp('24%'), position: 'absolute' }}
            />
            <Text style={{ color: 'gray', textAlign: 'center', width: wp('80%'), marginTop: hp('10%'), fontSize: hp('1.8%') }}>Add an extra layer of security when using the app</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center'
    },
    underlineStyleBase: {
        width: 30,
        height: 45,
        borderWidth: 0,
        fontSize: 30
    },
});
