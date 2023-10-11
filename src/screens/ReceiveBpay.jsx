
import * as React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LinearGradient } from "expo-linear-gradient";

const nextIcon = require("../../assets/nextIcon.png");
const backIcon = require("../../assets/backIcon.png");
const QRImage = require("../../assets/qr.png");
const copyIcon = require("../../assets/copy_outline.png");
const labelIcon = require("../../assets/label.png");
const shareIcon = require("../../assets/share.png");
const depositIcon = require("../../assets/deposit.png");

export default function ReceiveBpay({ navigation }) {

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
                    <Text style={{ color: 'white', fontSize: 18 }}>Receive Bpay</Text>
                </View>
            </View>

            <Image style={{ marginTop: hp('10%') }} source={QRImage} />
            <Text style={{ color: 'white', width: wp('55%'), textAlign: 'center', marginTop: hp('2%') }}>0x092357278979c8789434645837537868a867e098b</Text>

            <View style={styles.transactionContainer}>
                <View style={{ flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                    <LinearGradient
                        style={styles.circlePlus}
                        colors={["#D98F26", "#BF8122", "#AB761F", "#A4721E", "#A9761F", "#B98221", "#D39525", "#D79826", "#FDF576", "#F4CC69"]}
                        start={[0, 0]}
                        end={[1, 0]}
                        locations={[0, 0.048, 0.085, 0.1201, 0.19, 0.27, 0.37, 0.38, 0.78, 1]}
                    >
                        <TouchableOpacity style={styles.innerCircle}>
                            <Image source={copyIcon} />
                        </TouchableOpacity>
                    </LinearGradient>
                    <Text style={{ color: 'white' }}>Copy</Text>
                </View>
                <View style={{ flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                    <LinearGradient
                        style={styles.circlePlus}
                        colors={["#D98F26", "#BF8122", "#AB761F", "#A4721E", "#A9761F", "#B98221", "#D39525", "#D79826", "#FDF576", "#F4CC69"]}
                        start={[0, 0]}
                        end={[1, 0]}
                        locations={[0, 0.048, 0.085, 0.1201, 0.19, 0.27, 0.37, 0.38, 0.78, 1]}
                    >
                        <TouchableOpacity style={styles.innerCircle}>
                            <Image source={labelIcon} />
                        </TouchableOpacity>
                    </LinearGradient>
                    <Text style={{ color: 'white' }}>Set Amount</Text>
                </View>
                <View style={{ flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                    <LinearGradient
                        style={styles.circlePlus}
                        colors={["#D98F26", "#BF8122", "#AB761F", "#A4721E", "#A9761F", "#B98221", "#D39525", "#D79826", "#FDF576", "#F4CC69"]}
                        start={[0, 0]}
                        end={[1, 0]}
                        locations={[0, 0.048, 0.085, 0.1201, 0.19, 0.27, 0.37, 0.38, 0.78, 1]}
                    >
                        <TouchableOpacity style={styles.innerCircle}>
                            <Image source={shareIcon} />
                        </TouchableOpacity>
                    </LinearGradient>
                    <Text style={{ color: 'white' }}>Share</Text>
                </View>
            </View>

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
                            <Image source={depositIcon} style={{ width: 15, height: 15 }} />
                        </View>
                    </LinearGradient>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ color: 'white' }}>Deposit from exchange</Text>
                        <Text style={{ color: '#888', width: wp('40%') }}>By direct transfer from your account</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Transaction")}
                    >
                        <Image source={nextIcon} />
                    </TouchableOpacity>
                </View>
            </LinearGradient>

        </View >
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
        height: hp('13%'),
        alignItems: 'center',
        borderRadius: 5,
        padding: 1,
        marginTop: hp('2%')
    },
    innerGradient: {
        backgroundColor: '#000',
        width: '100%',
        height: '100%',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: wp('5%')
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
    topNavContainer: {
        width: wp('100%'),
        height: hp('10%'),
        flexDirection: 'row',
        padding: wp('5%'),
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        backgroundColor: '#1C1C1E'
    },
    transactionContainer: {
        width: wp('80%'),
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: hp('2%'),
        marginBottom: hp('4%')
    }
});
