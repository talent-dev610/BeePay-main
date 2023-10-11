import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const BeeIcon = require("../../assets/icon_1.png");
const SwapIcon = require("../../assets/swap.png");
const DiscoverIcon = require("../../assets/discover.png");
const BrowserIcon = require("../../assets/browser.png");
const SettingIcon = require("../../assets/settings.png");

const bottomNav = props => {
    return (
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
    );
};

const styles = StyleSheet.create({
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
        paddingBottom: 10,
        zIndex: 99999,
        backgroundColor: 'black'
    },
    tabItem: {
        flexDirection: 'column',
        alignItems: 'center',
    }
})

export default bottomNav;