
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

export default function SendBpay({ navigation }) {

    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />
            <View style={styles.topNavContainer}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Image source={backIcon} style={{ width: 20, height: 14 }} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("ConfirmTransfer")}
                >
                    <Text style={{ color: 'white' }}>CONTINUE</Text>
                </TouchableOpacity>
            </View>
            <Text style={{ color: 'white', fontSize: 20, marginVertical: hp('2%') }}>Send BPAY</Text>
            <LinearGradient
                style={styles.settingPad}
                colors={["#D98F26", "#BF8122", "#AB761F", "#A4721E", "#A9761F", "#B98221", "#D39525", "#D79826", "#FDF576", "#F4CC69"]}
                start={[0, 0]}
                end={[1, 0]}
                locations={[0, 0.048, 0.085, 0.1201, 0.19, 0.27, 0.37, 0.38, 0.78, 1]}
            >
                <TextInput
                    style={styles.innerGradient}
                    placeholderTextColor="#555"
                    placeholder="Address or name "
                />
                <TouchableOpacity
                    style={{ position: 'absolute', backgroundColor: '#000', left: wp('50%'), top: hp('3%'), zIndex: 9999 }}
                >
                    <Image
                        source={minuseIcon}
                        style={{ width: 20, height: 20 }}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ position: 'absolute', backgroundColor: '#000', left: wp('65%'), top: hp('2.7%'), zIndex: 9999 }}
                >
                    <Text
                        style={{ color: '#D98F26', fontSize: 17 }}
                    >
                        PASTE
                    </Text>
                </TouchableOpacity>
            </LinearGradient>
            <LinearGradient
                style={styles.settingPad}
                colors={["#D98F26", "#BF8122", "#AB761F", "#A4721E", "#A9761F", "#B98221", "#D39525", "#D79826", "#FDF576", "#F4CC69"]}
                start={[0, 0]}
                end={[1, 0]}
                locations={[0, 0.048, 0.085, 0.1201, 0.19, 0.27, 0.37, 0.38, 0.78, 1]}
            >
                <TextInput
                    style={styles.innerGradient}
                    placeholder="Amount Bpay"
                    placeholderTextColor="#555"
                />
                <TouchableOpacity
                    style={{ position: 'absolute', backgroundColor: '#000', left: wp('50%'), top: hp('3%'), zIndex: 9999 }}
                >
                    <Text
                        style={{ color: '#D98F26', fontSize: 17 }}
                    >
                        MAX
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ position: 'absolute', backgroundColor: '#000', left: wp('65%'), top: hp('3%'), zIndex: 9999 }}
                >
                    <Text style={{ color: '#D98F26', fontSize: 17 }}>PASTE</Text>
                </TouchableOpacity>
            </LinearGradient>
            <View>
                <Text style={{ color: 'white', marginTop: hp('7%'), marginBottom: hp('2%') }}>OPTIONAL</Text>
                <LinearGradient
                    style={styles.settingPad2}
                    colors={["#D98F26", "#BF8122", "#AB761F", "#A4721E", "#A9761F", "#B98221", "#D39525", "#D79826", "#FDF576", "#F4CC69"]}
                    start={[0, 0]}
                    end={[1, 0]}
                    locations={[0, 0.048, 0.085, 0.1201, 0.19, 0.27, 0.37, 0.38, 0.78, 1]}
                >
                    <TextInput
                        style={styles.innerGradient}
                        placeholder="Memo"
                        placeholderTextColor="#555"
                    />
                    <TouchableOpacity style={{ position: 'absolute', left: wp('55%'), top: hp('3%'), zIndex: 9999 }} >
                        <Image
                            source={minuseIcon}
                            style={{ width: 20, height: 20 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ position: 'absolute', left: wp('68%'), top: hp('2.2%'), zIndex: 9999 }}
                    >
                        <Image
                            source={etherIcon}
                            style={{ width: 28, height: 28 }}
                        />
                    </TouchableOpacity>
                </LinearGradient>
            </View>
            <BottomNav />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center'
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
        width: wp('85%'),
        height: hp('9%'),
        alignItems: 'center',
        borderRadius: 5,
        padding: 1,
    },
    innerGradient: {
        backgroundColor: '#000',
        width: '100%',
        height: '100%',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: wp('5%'),
        color: 'white',
        paddingRight: wp('30%')
    },
    topNavContainer: {
        width: wp('100%'),
        height: hp('10%'),
        flexDirection: 'row',
        padding: wp('5%'),
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    }
});
