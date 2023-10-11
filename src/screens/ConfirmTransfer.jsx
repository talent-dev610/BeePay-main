
import * as React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useState } from 'react';
import { LinearGradient } from "expo-linear-gradient";
import { TextInput } from 'react-native-gesture-handler';
import BottomNav from "../component/BottomNav";

const BeeIcon = require("../../assets/icon_1.png");
const SwapIcon = require("../../assets/swap.png");
const DiscoverIcon = require("../../assets/discover.png");
const BrowserIcon = require("../../assets/browser.png");
const SettingIcon = require("../../assets/settings.png");

const backIcon = require("../../assets/backIcon.png");
const minuseIcon = require("../../assets/minuse.png");
const etherIcon = require("../../assets/ether.png");

const CobIcon = require("../../assets/cob.png");


export default function ConfirmTransfer({ navigation }) {

    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />
            <View style={styles.topNavContainer}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Image source={backIcon} style={{ width: 20, height: 14 }} />
                </TouchableOpacity>
                <Text style={{ color: 'white', fontSize: 20 }}>Transfer</Text>
                <TouchableOpacity
                // onPress={() => navigation.goBack()}
                >
                    <Image source={CobIcon} style={{ width: 24, height: 24 }} />
                </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 24, color: 'white' }}>-0.1 BNB</Text>
                <Text style={{ fontSize: 14, color: 'gray' }}>~$20.79</Text>
            </View>

            <View style={{ flex: 1, width: '100%', flexDirection: 'column', justifyContent: 'space-between', padding: 24 }}>
                <View style={{ flexDirection: 'column', gap: 24 }}>
                    <View>
                        <View>
                            <View style={styles.inforItem}>
                                <Text style={{ color: 'white', fontSize: 16 }}>Asset</Text>
                                <Text style={{ color: 'gray' }}>BNB Smart Chain (BNB)</Text>
                            </View>
                            <View style={{ width: '100%', height: 1, backgroundColor: 'gray' }}>
                            </View>
                        </View>
                        <View>
                            <View style={styles.inforItem}>
                                <Text style={{ color: 'white', fontSize: 16 }}>From</Text>
                                <Text style={{ color: 'gray' }}>Main Wallet 1 (0x345...ACD8)</Text>
                            </View>
                            <View style={{ width: '100%', height: 1, backgroundColor: 'gray' }}>
                            </View>
                        </View>
                        <View>
                            <View style={styles.inforItem}>
                                <Text style={{ color: 'white', fontSize: 16 }}>To</Text>
                                <Text style={{ color: 'gray' }}>0x4C0D09785685765...C0A758CE</Text>
                            </View>
                            <View style={{ width: '100%', height: 1, backgroundColor: 'gray' }}>
                            </View>
                        </View>
                    </View>

                    <View>
                        <View>
                            <View style={styles.inforItem}>
                                <Text style={{ color: 'white', fontSize: 16 }}>Network Fee</Text>
                                <Text style={{ color: 'gray' }}>0.000063 BNB ($0.01)</Text>
                            </View>
                            <View style={{ width: '100%', height: 1, backgroundColor: 'gray' }}>
                            </View>
                        </View>
                        <View>
                            <View style={styles.inforItem} >
                                <Text style={{ color: 'white', fontSize: 16 }}>Max Total</Text>
                                <Text style={{ color: 'white' }}>$20.81</Text>
                            </View>
                            <View style={{ width: '100%', height: 1, backgroundColor: 'gray' }}>
                            </View>
                        </View>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate("TransactionDetail")}
                    style={{ width: '100%' }}
                >
                    <LinearGradient
                        style={styles.settingPad2}
                        colors={["#D98F26", "#BF8122", "#AB761F", "#A4721E", "#A9761F", "#B98221", "#D39525", "#D79826", "#FDF576", "#F4CC69"]}
                        start={[0, 0]}
                        end={[1, 0]}
                        locations={[0, 0.048, 0.085, 0.1201, 0.19, 0.27, 0.37, 0.38, 0.78, 1]}
                    >
                        <View style={styles.innerGradient}>
                            <Text style={{ color: 'white', fontSize: 18 }}>Confirm</Text>
                        </View>
                    </LinearGradient>
                </TouchableOpacity>
            </View>


            {/* <BottomNav /> */}
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#000',
        alignItems: 'center',
        flexDirection: 'column'
    },
    inforItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20
    },
    settingPad: {
        width: wp('85%'),
        height: hp('9%'),
        alignItems: 'center',
        borderRadius: 5,
        padding: 1,
        marginTop: hp('6%')
    },
    settingPad2: {
        height: hp('8%'),
        alignItems: 'center',
        borderRadius: 5,
        padding: 1,
        textAlign: 'center'
    },
    innerGradient: {
        backgroundColor: '#000',
        width: '100%',
        height: '100%',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
    },
    topNavContainer: {
        width: wp('100%'),
        height: hp('10%'),
        flexDirection: 'row',
        padding: wp('5%'),
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});
