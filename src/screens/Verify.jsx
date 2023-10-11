import { LinearGradient } from 'expo-linear-gradient';
import * as React from 'react';
import { useState } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Verify({ navigation }) {

    const [selectedList, setSelectedList] = useState([])
    const [secondList, setSecondList] = useState([
        "still",
        "rival",
        "used",
        "harvest",
        "pupil",
        "vague",
        "library",
        "denial",
        "already",
        "develop",
        "solution",
        "liquid"
    ])

    const handleRemoveItem = (item, index) => {
        setSecondList((secondList) => [...secondList, item])
        selectedList.splice(index, 1)
    }

    const handleSelectItem = (item, index) => {
        setSelectedList((selectedList) => [...selectedList, item])
        secondList.splice(index, 1)
    }

    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />

            <Text style={{ color: 'white', fontWeight: '500', fontSize: 16, marginTop: hp('9%') }}>Verify Secret Phrase</Text>
            <Text style={{ color: 'gray', fontSize: 11, width: wp('80%'), textAlign: 'center', marginVertical: 12 }}>Tab the words to put them next to each other in the correct order.</Text>
            <View style={{ width: wp('100%'), height: hp('15%'), gap: 5, backgroundColor: '#111', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center', padding: hp('2%') }}>
                {selectedList.map((item, index) => {
                    return (
                        <TouchableOpacity key={index}
                            onPress={() => handleRemoveItem(item, index)}
                            style={styles.dragItem}>
                            <Text style={styles.dragText}>{item}</Text>
                        </TouchableOpacity>
                    )
                })}

            </View>
            <View style={{ width: wp('60%'), gap: 3, alignSelf: 'center', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center', marginTop: hp('1%') }}>
                {secondList.map((item, index) => {
                    return (
                        <TouchableOpacity key={index}
                            onPress={() => handleSelectItem(item, index)}
                            style={styles.dragItem}>
                            <Text style={styles.dragText}>{item}</Text>
                        </TouchableOpacity>
                    )
                })}
            </View>
            {secondList.length == 0 && (
                <TouchableOpacity
                    onPress={() => navigation.navigate("AddToken")}
                >
                    <LinearGradient
                        style={styles.settingPad2}
                        colors={["#D98F26", "#BF8122", "#AB761F", "#A4721E", "#A9761F", "#B98221", "#D39525", "#D79826", "#FDF576", "#F4CC69"]}
                        start={[0, 0]}
                        end={[1, 0]}
                        locations={[0, 0.048, 0.085, 0.1201, 0.19, 0.27, 0.37, 0.38, 0.78, 1]}
                    >
                        <View style={styles.innerGradient}>
                            <Text style={{ color: 'white', fontSize: 18 }}>Continue</Text>
                        </View>
                    </LinearGradient>
                </TouchableOpacity>
            )}

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center'
    },
    dragItem: {
        borderRadius: 2,
        alignItems: 'center',
        padding: 2,
        borderWidth: 1,
        borderColor: '#222',
        backgroundColor: '#000'
    },
    dragText: {
        padding: 2,
        color: 'white',
        fontSize: 12
    },
    settingPad2: {
        position: 'absolute',
        alignItems: 'center',
        alignSelf: 'center',
        width: wp('80%'),
        height: hp('6%'),
        borderRadius: 5,
        padding: 1,
        marginTop: hp('42%')
    },
    innerGradient: {
        backgroundColor: '#000',
        width: '100%',
        height: '100%',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
});
