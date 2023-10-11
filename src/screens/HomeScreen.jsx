
import * as React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { StyleSheet, ImageBackground } from 'react-native';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useState } from 'react';
import { LinearGradient } from "expo-linear-gradient";
import GradientText from '../component/GradientText';
import BottomNav from "../component/BottomNav"

const logoImage = require("../../assets/logo.png");
const backgroundImage = require("../../assets/back2.png");
const nextIcon = require("../../assets/nextIcon.png");
const downIcon = require("../../assets/downIcon.png");

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />
            <ImageBackground source={backgroundImage}
                resizeMode='stretch'
                style={styles.imageBackgorund}>
            </ImageBackground>
            <Image source={logoImage} style={styles.logo} />
            <Text style={{ color: '#BF8122', fontSize: hp('3.5%'), marginVertical: hp('2%') }}>Beepay</Text>
            <Text style={{ color: 'white', width: wp('75%'), textAlign: 'center', fontSize: hp('2.5%'), marginTop: -hp('1.5%') }} >
                Join 60M+ people shaping the futured of the internet with us
            </Text>
            <LinearGradient
                style={styles.settingPad}
                colors={["#D98F26", "#BF8122", "#AB761F", "#A4721E", "#A9761F", "#B98221", "#D39525", "#D79826", "#FDF576", "#F4CC69"]}
                start={[0, 0]}
                end={[1, 0]}
                locations={[0, 0.048, 0.085, 0.1201, 0.19, 0.27, 0.37, 0.38, 0.78, 1]}
            >
                <View style={styles.innerGradient}>
                    <LinearGradient
                        style={styles.circlePlus}
                        colors={["#D98F26", "#BF8122", "#AB761F", "#A4721E", "#A9761F", "#B98221", "#D39525", "#D79826", "#FDF576", "#F4CC69"]}
                        start={[0, 0]}
                        end={[1, 0]}
                        locations={[0, 0.048, 0.085, 0.1201, 0.19, 0.27, 0.37, 0.38, 0.78, 1]}
                    >
                        <View style={styles.innerCircle}>
                            <GradientText style={{ fontSize: 30, marginTop: -5 }}>+</GradientText>
                        </View>
                    </LinearGradient>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ color: '#BF8122' }}>I don't have a wallet</Text>
                        <Text style={{ color: '#888', width: wp('40%') }}>Create a new multi-chain wallet</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Passcode", { ownWallet: false })}
                    >
                        <Image source={nextIcon} />
                    </TouchableOpacity>
                </View>
            </LinearGradient>
            <LinearGradient
                style={styles.settingPad}
                colors={["#D98F26", "#BF8122", "#AB761F", "#A4721E", "#A9761F", "#B98221", "#D39525", "#D79826", "#FDF576", "#F4CC69"]}
                start={[0, 0]}
                end={[1, 0]}
                locations={[0, 0.048, 0.085, 0.1201, 0.19, 0.27, 0.37, 0.38, 0.78, 1]}
            >
                <View style={styles.innerGradient}>
                    <LinearGradient
                        style={styles.circlePlus}
                        colors={["#D98F26", "#BF8122", "#AB761F", "#A4721E", "#A9761F", "#B98221", "#D39525", "#D79826", "#FDF576", "#F4CC69"]}
                        start={[0, 0]}
                        end={[1, 0]}
                        locations={[0, 0.048, 0.085, 0.1201, 0.19, 0.27, 0.37, 0.38, 0.78, 1]}
                    >
                        <View style={styles.innerCircle}>
                            <Image source={downIcon} />
                        </View>
                    </LinearGradient>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ color: '#BF8122' }}>I already have a wallet</Text>
                        <Text style={{ color: '#888', width: wp('40%') }}>Create a new multi-chain wallet</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Passcode", { ownWallet: true })}
                    >
                        <Image source={nextIcon} />
                    </TouchableOpacity>
                </View>
            </LinearGradient>
            <BottomNav />
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
        width: wp('85%'),
        height: hp('12%'),
        alignItems: 'center',
        borderRadius: 14,
        padding: 1,
        marginTop: hp('8%')
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
    },
    innerGradient: {
        backgroundColor: '#000',
        width: '100%',
        height: '100%',
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    circlePlus: {
        width: 40,
        height: 40,
        borderRadius: 20,
        padding: 2
    },
    innerCircle: {
        backgroundColor: '#000',
        width: '100%',
        height: '100%',
        borderRadius: 16,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    }
});
