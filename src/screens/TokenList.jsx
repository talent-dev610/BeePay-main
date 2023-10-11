
import * as React from 'react';
import { useState } from 'react';
import { View, Text, StatusBar, Switch } from 'react-native';
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

export default function TokenList({ navigation }) {

    const [bnbSwitch, setBNBSwitch] = useState(true)
    const [btcSwitch, setBTCSwitch] = useState(true)
    const [ethSwitch, setETHSwitch] = useState(true)
    const [bnb2Switch, setBNB2Switch] = useState(false)
    const [twtSwitch, setTWTSwitch] = useState(false)
    const [aeSwitch, setAESwitch] = useState(true)
    const [aionSwitch, setAionSwitch] = useState(true)
    const [algoSwitch, setALGOSwitch] = useState(false)

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
                    <Text style={{ color: 'white', fontSize: 18 }}>Search</Text>
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate("TokenNetwork")}
                >
                    <Text style={{ color: 'white', fontSize: 28 }}>+</Text>
                </TouchableOpacity>
            </View>
            <View style={{ width: wp('100%'), height: hp('80%') }}>
                <ScrollView style={{ width: wp('100%'), overflow: 'scroll' }}>
                    <TouchableOpacity
                        style={styles.coinItem}>
                        <Image source={BNBIcon} />
                        <View style={styles.itemRight}>
                            <View>
                                <Text style={{ color: 'white', fontSize: 18 }} >BNB</Text>
                                <Text style={{ color: 'white', fontSize: 14 }}>BNB Beacon Chain</Text>
                            </View>
                            <Switch
                                value={bnbSwitch}
                                thumbColor={bnbSwitch ? '#CF9132' : '#f4f3f4'}
                                onValueChange={(e) => setBNBSwitch(e)}
                                trackColor={{ false: '#767577', true: '#BF8122' }}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.coinItem}>
                        <Image source={bitcoinIcon} />
                        <View style={styles.itemRight}>
                            <View>
                                <Text style={{ color: 'white', fontSize: 18 }}>BTC</Text>
                                <Text style={{ color: 'white', fontSize: 14 }}>Bitcoin</Text>
                            </View>
                            <Switch
                                value={btcSwitch}
                                thumbColor={btcSwitch ? '#CF9132' : '#f4f3f4'}
                                onValueChange={(e) => setBTCSwitch(e)}
                                trackColor={{ false: '#767577', true: '#BF8122' }}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.coinItem}>
                        <Image source={EthereumIcon} />
                        <View style={styles.itemRight}>
                            <View>
                                <Text style={{ color: 'white', fontSize: 18 }}>ETH</Text>
                                <Text style={{ color: 'white', fontSize: 14 }}>Ethereum</Text>
                            </View>
                            <Switch
                                value={ethSwitch}
                                thumbColor={ethSwitch ? '#CF9132' : '#f4f3f4'}
                                onValueChange={(e) => setETHSwitch(e)}
                                trackColor={{ false: '#767577', true: '#BF8122' }}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.coinItem}>
                        <Image source={BNBIcon} />
                        <View style={styles.itemRight}>
                            <View>
                                <Text style={{ color: 'white', fontSize: 18 }}>BNB</Text>
                                <Text style={{ color: 'white', fontSize: 14 }}>BNB Smart Chain</Text>
                            </View>
                            <Switch
                                value={bnb2Switch}
                                thumbColor={bnb2Switch ? '#CF9132' : '#f4f3f4'}
                                onValueChange={(e) => setBNB2Switch(e)}
                                trackColor={{ false: '#767577', true: '#BF8122' }}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.coinItem}>
                        <Image source={trustWalletIcon} />
                        <View style={styles.itemRight}>
                            <View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                                    <Text style={{ color: 'white', fontSize: 18 }}>TWT</Text>
                                    <View style={{ backgroundColor: '#333', paddingHorizontal: 9, borderRadius: 8 }}>
                                        <Text style={{ color: 'white', fontSize: 12 }}>BEP20</Text>
                                    </View>
                                </View>
                                <Text style={{ color: 'white', fontSize: 14 }}>Trust Wallet</Text>
                            </View>
                            <Switch
                                value={twtSwitch}
                                thumbColor={twtSwitch ? '#CF9132' : '#f4f3f4'}
                                onValueChange={(e) => setTWTSwitch(e)}
                                trackColor={{ false: '#767577', true: '#BF8122' }}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.coinItem}>
                        <Image source={AeternityIcon} />
                        <View style={styles.itemRight}>
                            <View>
                                <Text style={{ color: 'white', fontSize: 18 }}>AE</Text>
                                <Text style={{ color: 'white', fontSize: 14 }}>Aeternity</Text>
                            </View>
                            <Switch
                                value={aeSwitch}
                                thumbColor={aeSwitch ? '#CF9132' : '#f4f3f4'}
                                onValueChange={(e) => setAESwitch(e)}
                                trackColor={{ false: '#767577', true: '#BF8122' }}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.coinItem}>
                        <Image source={AionIcon} />
                        <View style={styles.itemRight}>
                            <View>
                                <Text style={{ color: 'white', fontSize: 18 }}>Aion</Text>
                                <Text style={{ color: 'white', fontSize: 14 }}>Aion</Text>
                            </View>
                            <Switch
                                value={aionSwitch}
                                thumbColor={aionSwitch ? '#CF9132' : '#f4f3f4'}
                                onValueChange={(e) => setAionSwitch(e)}
                                trackColor={{ false: '#767577', true: '#BF8122' }}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.coinItem}>
                        <Image source={AlgorandIcon} />
                        <View style={styles.itemRight}>
                            <View>
                                <Text style={{ color: 'white', fontSize: 18 }}>ALGO</Text>
                                <Text style={{ color: 'white', fontSize: 14 }}>Algorand</Text>
                            </View>
                            <Switch
                                value={algoSwitch}
                                thumbColor={algoSwitch ? '#CF9132' : '#f4f3f4'}
                                onValueChange={(e) => setALGOSwitch(e)}
                                trackColor={{ false: '#767577', true: '#BF8122' }}
                            />
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
        paddingBottom: 16,
        alignItems: 'center'
    }
});
