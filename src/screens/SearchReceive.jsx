
import * as React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const backIcon = require("../../assets/backIcon.png");
const BNBIcon = require("../../assets/coin/bnb.png");
const bitcoinIcon = require("../../assets/coin/bitcoin.png");
const EthereumIcon = require("../../assets/coin/ethereum.png");
const trustWalletIcon = require("../../assets/coin/trustwallet.png");
const AeternityIcon = require("../../assets/coin/aeternity.png");
const AionIcon = require("../../assets/coin/aion.png");
const AlgorandIcon = require("../../assets/coin/algorand.png");

export default function SearchReceive({ navigation, route }) {

    const activity = route.params.activity;
    console.log(activity)

    const gotoNextScreen = () => {
        console.log(activity)
        if (activity == "send") navigation.navigate("SendBpay");
        else navigation.navigate("ReceiveBpay");
    }
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
                    <Text style={{ color: 'white', fontSize: 18 }}>Search - Receive</Text>
                </View>
            </View>

            <View style={{flex: 1, overflow: 'scroll'}}>
                <ScrollView>
                    <TouchableOpacity
                        onPress={() => gotoNextScreen()}
                        style={styles.coinItem}>
                        <Image source={BNBIcon} />
                        <View style={styles.itemRight}>
                            <Text style={{ color: 'white', fontSize: 18 }}>BNB Beacon Chain</Text>
                            <Text style={{ color: 'white', fontSize: 18 }}>0</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => gotoNextScreen()}
                        style={styles.coinItem}>
                        <Image source={bitcoinIcon} />
                        <View style={styles.itemRight}>
                            <Text style={{ color: 'white', fontSize: 18 }}>Bitcoin</Text>
                            <Text style={{ color: 'white', fontSize: 18 }}>0</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => gotoNextScreen()}
                        style={styles.coinItem}>
                        <Image source={EthereumIcon} />
                        <View style={styles.itemRight}>
                            <Text style={{ color: 'white', fontSize: 18 }}>Ethereum</Text>
                            <Text style={{ color: 'white', fontSize: 18 }}>0</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => gotoNextScreen()}
                        style={styles.coinItem}>
                        <Image source={BNBIcon} />
                        <View style={styles.itemRight}>
                            <Text style={{ color: 'white', fontSize: 18 }}>BNB Smart Chain</Text>
                            <Text style={{ color: 'white', fontSize: 18 }}>0</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => gotoNextScreen()}
                        style={styles.coinItem}>
                        <Image source={trustWalletIcon} />
                        <View style={styles.itemRight}>
                            <Text style={{ color: 'white', fontSize: 18 }}>Trust Wallet</Text>
                            <Text style={{ color: 'white', fontSize: 18 }}>0</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => gotoNextScreen()}

                        style={styles.coinItem}>
                        <Image source={AeternityIcon} />
                        <View style={styles.itemRight}>
                            <Text style={{ color: 'white', fontSize: 18 }}>Aeternity</Text>
                            <Text style={{ color: 'white', fontSize: 18 }}>0</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => gotoNextScreen()}
                        style={styles.coinItem}>
                        <Image source={AionIcon} />
                        <View style={styles.itemRight}>
                            <Text style={{ color: 'white', fontSize: 18 }}>Aion</Text>
                            <Text style={{ color: 'white', fontSize: 18 }}>0</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => gotoNextScreen()}
                        style={styles.coinItem}>
                        <Image source={AlgorandIcon} />
                        <View style={styles.itemRight}>
                            <Text style={{ color: 'white', fontSize: 18 }}>Algorand</Text>
                            <Text style={{ color: 'white', fontSize: 18 }}>0</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C1C1E',
        alignItems: 'center'
    },
    settingPad: {
        width: wp('85%'),
        height: hp('10%'),
        alignItems: 'center',
        borderRadius: 5,
        padding: 1,
        marginTop: hp('2%')
    },
    topNavContainer: {
        width: wp('100%'),
        height: hp('14%'),
        flexDirection: 'row',
        padding: wp('5%'),
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        backgroundColor: '#1C1C1E'
    },
    coinItem: {
        width: wp('100%'),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingLeft: wp('5%'),
        marginTop: hp('3%')
    },
    itemRight: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: wp('6%'),
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        paddingBottom: 16
    }
});
