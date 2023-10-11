
import * as React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { StyleSheet, ImageBackground } from 'react-native';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Checkbox from 'expo-checkbox';
import { useState } from 'react';
import { LinearGradient } from "expo-linear-gradient";
import GradientText from '../component/GradientText';

const logoImage = require("../../assets/logo.png");
const BeeIcon = require("../../assets/icon_1.png");
const SwapIcon = require("../../assets/swap.png");
const DiscoverIcon = require("../../assets/discover.png");
const BrowserIcon = require("../../assets/browser.png");
const SettingIcon = require("../../assets/settings.png");

const backIcon = require("../../assets/backIcon.png");
const beaconIcon = require("../../assets/beacon.png");
const downloadIcon = require("../../assets/download.png");
const uploadIcon = require("../../assets/upload.png");
const buyIcon = require("../../assets/buy.png");
const tradeIcon = require("../../assets/newtrade.png");
const transactionImage = require("../../assets/transaction.png");

export default function Transaction({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />
            <View style={styles.topNavContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                    >
                        <Image source={backIcon} style={{ width: 20, height: 14 }} />
                    </TouchableOpacity>
                    <Text style={{ color: 'white', fontSize: 18 }}>BNB Beacon Chain</Text>
                </View>
                <Image source={beaconIcon} style={{ width: 24, height: 14 }} />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: wp('90%') }}>
                <Text style={{ color: 'white', fontSize: 18 }}>coin</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: 'white' }}>$240.99</Text>
                    <Text style={{ color: 'red' }}>-0.8%</Text>
                </View>
            </View>
            <Image source={logoImage} style={styles.logo} />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                < Text style={{ color: 'white', fontSize: 26 }}>0 Bpay</Text>
            </View >

            <View style={styles.transactionContainer}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("SearchReceive", { activity: "send" })}
                    style={{ flexDirection: 'column', alignItems: 'center', gap: 8 }}
                >
                    <LinearGradient
                        style={styles.circlePlus}
                        colors={["#D98F26", "#BF8122", "#AB761F", "#A4721E", "#A9761F", "#B98221", "#D39525", "#D79826", "#FDF576", "#F4CC69"]}
                        start={[0, 0]}
                        end={[1, 0]}
                        locations={[0, 0.048, 0.085, 0.1201, 0.19, 0.27, 0.37, 0.38, 0.78, 1]}
                    >
                        <View style={styles.innerCircle}>
                            <Image source={uploadIcon} />
                        </View>
                    </LinearGradient>
                    <Text style={{ color: 'white' }}>Send</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("SearchReceive", { activity: "receive" })}
                    style={{ flexDirection: 'column', alignItems: 'center', gap: 8 }}
                >
                    <LinearGradient
                        style={styles.circlePlus}
                        colors={["#D98F26", "#BF8122", "#AB761F", "#A4721E", "#A9761F", "#B98221", "#D39525", "#D79826", "#FDF576", "#F4CC69"]}
                        start={[0, 0]}
                        end={[1, 0]}
                        locations={[0, 0.048, 0.085, 0.1201, 0.19, 0.27, 0.37, 0.38, 0.78, 1]}
                    >
                        <View style={styles.innerCircle}>
                            <Image source={downloadIcon} />
                        </View>
                    </LinearGradient>
                    <Text style={{ color: 'white' }}>Receive</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                    <LinearGradient
                        style={styles.circlePlus}
                        colors={["#D98F26", "#BF8122", "#AB761F", "#A4721E", "#A9761F", "#B98221", "#D39525", "#D79826", "#FDF576", "#F4CC69"]}
                        start={[0, 0]}
                        end={[1, 0]}
                        locations={[0, 0.048, 0.085, 0.1201, 0.19, 0.27, 0.37, 0.38, 0.78, 1]}
                    >
                        <View style={styles.innerCircle}>
                            <Image source={buyIcon} />
                        </View>
                    </LinearGradient>
                    <Text style={{ color: 'white' }}>Buy</Text>
                </View>
                <View style={{ flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                    <LinearGradient
                        style={styles.circlePlus}
                        colors={["#D98F26", "#BF8122", "#AB761F", "#A4721E", "#A9761F", "#B98221", "#D39525", "#D79826", "#FDF576", "#F4CC69"]}
                        start={[0, 0]}
                        end={[1, 0]}
                        locations={[0, 0.048, 0.085, 0.1201, 0.19, 0.27, 0.37, 0.38, 0.78, 1]}
                    >
                        <View style={styles.innerCircle}>
                            <Image source={tradeIcon} />
                        </View>
                    </LinearGradient>
                    <Text style={{ color: 'white' }}>Trade</Text>
                </View>
            </View>

            <LinearGradient
                style={{ width: wp('100%'), height: 2 }}
                colors={["#D98F26", "#BF8122", "#AB761F", "#A4721E", "#A9761F", "#B98221", "#D39525", "#D79826", "#FDF576", "#F4CC69"]}
                start={[0, 0]}
                end={[1, 0]}
                locations={[0, 0.048, 0.085, 0.1201, 0.19, 0.27, 0.37, 0.38, 0.78, 1]}
            >
            </LinearGradient>

            <Image source={transactionImage} style={{ marginVertical: hp('4%') }} />
            <Text style={{ color: 'white', fontSize: 19 }}>Transactions will appear here</Text>


            <View style={styles.bottomNav}>
                <TouchableOpacity style={styles.tabItem}>
                    <Image source={BeeIcon} style={{ width: 30, height: 30 }} />
                    <Text style={{ color: '#BF8122' }}> Wallet</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItem}>
                    <Image source={SwapIcon} style={{ width: 20, height: 20 }} />
                    <Text style={{ color: '#fff' }}> Swap</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItem}>
                    <Image source={DiscoverIcon} style={{ width: 20, height: 20 }} />
                    <Text style={{ color: '#fff' }}> Discover</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItem}>
                    <Image source={BrowserIcon} style={{ width: 20, height: 20 }} />
                    <Text style={{ color: '#fff' }}> Browser</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItem}>
                    <Image source={SettingIcon} style={{ width: 20, height: 20 }} />
                    <Text style={{ color: '#fff' }}> Settings</Text>
                </TouchableOpacity>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center'
    },
    logo: {
        width: wp('14%'),
        height: wp('14%'),
    },
    circlePlus: {
        width: 40,
        height: 40,
        borderRadius: 20,
        padding: 2
    },
    innerCircle: {
        width: '100%',
        height: '100%',
        borderRadius: 16,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    bottomNav: {
        width: wp('100%'),
        height: hp('10%'),
        borderTopColor: '#BF8122',
        borderTopWidth: 1,
        marginTop: hp('90%'),
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: wp('5%'),
        alignItems: 'flex-end',
        paddingBottom: 10
    },
    tabItem: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    topNavContainer: {
        width: wp('100%'),
        height: hp('10%'),
        flexDirection: 'row',
        padding: wp('5%'),
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    transactionContainer: {
        width: wp('80%'),
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: hp('2%'),
        marginBottom: hp('3.2%'),
        overflow: 'scroll',
    }
});
