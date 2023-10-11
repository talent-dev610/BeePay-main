
import * as React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useState } from 'react';
import { LinearGradient } from "expo-linear-gradient";

const backIcon = require("../../assets/backIcon.png");
const minuseIcon = require("../../assets/minuse.png");

export default function ImportPhase({ navigation }) {
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
                <Image source={minuseIcon} style={{ width: 24, height: 24 }} />
            </View>

            <LinearGradient
                style={styles.settingPad2}
                colors={["#D98F26", "#BF8122", "#AB761F", "#A4721E", "#A9761F", "#B98221", "#D39525", "#D79826", "#FDF576", "#F4CC69"]}
                start={[0, 0]}
                end={[1, 0]}
                locations={[0, 0.048, 0.085, 0.1201, 0.19, 0.27, 0.37, 0.38, 0.78, 1]}
            >
                <Text style={styles.ContainerHeader}>Name</Text>
                <View style={styles.innerGradient}>
                    <Text style={{ color: 'white' }}>Main Wallet 1</Text>
                </View>
            </LinearGradient>
            <LinearGradient
                style={styles.settingPad}
                colors={["#D98F26", "#BF8122", "#AB761F", "#A4721E", "#A9761F", "#B98221", "#D39525", "#D79826", "#FDF576", "#F4CC69"]}
                start={[0, 0]}
                end={[1, 0]}
                locations={[0, 0.048, 0.085, 0.1201, 0.19, 0.27, 0.37, 0.38, 0.78, 1]}
            >
                <View style={styles.innerGradient2}>
                    <TouchableOpacity style={{ position: 'absolute', marginLeft: wp('65%'), marginTop: 10 }}>
                        <Text style={{ color: 'white' }}>PASTE</Text>
                    </TouchableOpacity>
                    <Text style={{ color: 'white' }}>Phrase</Text>
                </View>
            </LinearGradient>
            <Text style={{ width: wp('85%'), color: 'white', marginVertical: hp('6%') }}>Typically 12 (sometimes 18, 24) words separated by single spaces</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("AddToken")}
            >
                <LinearGradient
                    style={styles.importButton}
                    colors={["#D98F26", "#BF8122", "#AB761F", "#A4721E", "#A9761F", "#B98221", "#D39525", "#D79826", "#FDF576", "#F4CC69"]}
                    start={[0, 0]}
                    end={[1, 0]}
                    locations={[0, 0.048, 0.085, 0.1201, 0.19, 0.27, 0.37, 0.38, 0.78, 1]}
                >
                    <Text style={{ fontSize: 22 }}>Import</Text>
                </LinearGradient>
            </TouchableOpacity>
            <Text style={styles.bottomText}>What is Secret Phase?</Text>
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
        height: hp('19%'),
        alignItems: 'center',
        borderRadius: 5,
        padding: 1,
        marginTop: hp('8%')
    },
    settingPad2: {
        width: wp('85%'),
        height: hp('9%'),
        borderRadius: 5,
        padding: 1,
        marginTop: hp('5%')
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
    innerGradient2: {
        backgroundColor: '#000',
        width: '100%',
        height: '100%',
        borderRadius: 5,
        padding: wp('3%')
    },
    topNavContainer: {
        width: wp('100%'),
        height: hp('10%'),
        flexDirection: 'row',
        padding: wp('5%'),
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    ContainerHeader: {
        position: 'absolute',
        marginLeft: 30,
        marginTop: -hp('1.5%'),
        color: 'white',
        zIndex: 999,
        backgroundColor: 'black'
    },
    importButton: {
        width: wp('85%'),
        height: hp('6%'),
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomText: {
        color: 'white',
        position: 'absolute',
        marginTop: hp('92%'),
        fontSize: 18
    }
});
