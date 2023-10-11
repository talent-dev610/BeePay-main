import React, { useState } from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { LinearGradient } from "expo-linear-gradient";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import BottomNav from "../component/BottomNav";

const BUSDImage = require("../../assets/BUSD.png");
const BitcoinImage = require("../../assets/Bitcoin.png");
const EthereumImage = require("../../assets/Ethereum.png");
const XrpImage = require("../../assets/XRP.png");
const BnbImage = require("../../assets/BNB.png");

const tradeImage = require("../../assets/trade.png");
const bellImage = require("../../assets/bell.png");
const labelImage = require("../../assets/label.png");
const exchangeImage = require("../../assets/exchange.png");
const uploadImage = require("../../assets/upload.png");
const downloadImage = require("../../assets/download.png");
const trustWalletIcon = require("../../assets/coin/trustwallet.png");
const AeternityIcon = require("../../assets/coin/aeternity.png");
const AionIcon = require("../../assets/coin/aion.png");


export default function AddToken({ navigation, route }) {

  const [activityShow, setActivityShow] = useState(true)

  const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
    const paddingToBottom = 0;
    return layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom;
  };

  return (
    <View style={styles.container} >
      <LinearGradient
        style={styles.settingPad}
        colors={["#D98F26", "#BF8122", "#AB761F", "#A4721E", "#A9761F", "#B98221", "#D39525", "#D79826", "#FDF576", "#F4CC69"]}
        start={[0, 0.1]}
        end={[1, 0]}
        locations={[0, 0.048, 0.085, 0.1201, 0.19, 0.27, 0.37, 0.38, 0.78, 1]}
      >
        <StatusBar hidden={true} />

        <View style={styles.iconGroup}>
          <TouchableOpacity >
            <Image source={bellImage} width={24} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("TokenList")}
          >
            <Image source={tradeImage} width={24} />
          </TouchableOpacity>
        </View>

        <Text style={{ alignSelf: 'center', fontSize: hp('4.5%'), color: 'black', fontWeight: '600' }}  >$9,958.20</Text>
        <Text style={{ alignSelf: 'center', fontSize: hp('2.5%'), color: 'black' }}  >My wallet</Text>

        {activityShow &&
          <View style={{ flexDirection: 'row', width: wp('65%'), alignSelf: 'center', justifyContent: 'space-between', marginTop: hp('3%') }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("SearchReceive", { activity: "send" })}
            >
              <View style={styles.labelContainer}>
                <Image source={uploadImage} style={{ width: 14 }} />
              </View>
              <Text style={styles.iconText}>Send</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("SearchReceive", { activity: "receive" })}
            >
              <View style={styles.labelContainer}>
                <Image source={downloadImage} style={{ width: 14 }} />
              </View>
              <Text style={styles.iconText}>Receive</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.labelContainer}>
                <Image source={labelImage} style={{ width: 20 }} />
              </View>
              <Text style={styles.iconText}>Buy</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.labelContainer}>
                <Image source={exchangeImage} style={{ width: 20 }} />
              </View>
              <Text style={styles.iconText}>Trade</Text>
            </TouchableOpacity>
          </View>
        }

        <View style={styles.walletPad} >
          <View style={styles.coinPad} >
            <Text style={{ fontSize: hp('2.5%'), color: 'white' }} >Tokens</Text>
            <Text style={{ fontSize: hp('2.5%'), color: 'white' }}>NFTs</Text>
          </View>

          <View style={{ width: wp('100%'), height: hp('60%'), paddingBottom: hp('10%') }}>
            <ScrollView
              style={styles.scrollView}
              onScroll={({ nativeEvent }) => {
                if (isCloseToBottom(nativeEvent)) {
                  setActivityShow(false)
                }
                else setActivityShow(true)
              }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("Transaction")}
                style={styles.tokenItem}>
                <Image source={BUSDImage} style={{ flex: 1, width: wp('11%'), height: wp('11%') }} resizeMode='contain' />
                <View style={styles.mainBox}>
                  <View style={{ marginLeft: 12, flex: 1 }} >
                    <Text style={{ color: 'white', fontSize: 13 }}>BUSD</Text>
                    <View style={{ flexDirection: 'row', marginTop: 4 }}>
                      <Text style={{ color: 'white', fontSize: 12 }} >1000</Text>
                      <Text style={{ fontSize: 12, color: 'green', marginLeft: 4, fontWeight: '700' }}>+ 2.89%</Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: 'column', flex: 1 }}>
                    <Text style={{ color: 'white', fontSize: 13 }}>BUSD</Text>
                    <Text style={{ color: 'gray', marginTop: 4, fontSize: 12, fontWeight: '900' }}>$1,001</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate("Transaction")}
                style={styles.tokenItem}>
                <Image source={BitcoinImage} style={{ flex: 1, width: wp('11%'), height: wp('11%') }} resizeMode='contain' />
                <View style={styles.mainBox}>
                  <View style={{ marginLeft: 12, flex: 1 }} >
                    <Text style={{ color: 'white', fontSize: 13 }}>Bitcoin</Text>
                    <View style={{ flexDirection: 'row', marginTop: 4 }}>
                      <Text style={{ color: 'white', fontSize: 12 }} >0.192412</Text>
                      <Text style={{ fontSize: 12, color: 'green', marginLeft: 4, fontWeight: '700' }}>+ 0.47%</Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: 'column', flex: 1 }}>
                    <Text style={{ color: 'white', fontSize: 13 }}>BTC</Text>
                    <Text style={{ color: 'gray', marginTop: 4, fontSize: 12, fontWeight: '900' }}>$4,000</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate("Transaction")}
                style={styles.tokenItem}>
                <Image source={EthereumImage} style={{ flex: 1, width: wp('11%'), height: wp('11%') }} resizeMode='contain' />
                <View style={styles.mainBox}>
                  <View style={{ marginLeft: 12, flex: 1 }} >
                    <Text style={{ color: 'white', fontSize: 13 }}>Ethereum</Text>
                    <View style={{ flexDirection: 'row', marginTop: 4 }}>
                      <Text style={{ color: 'white', fontSize: 12 }} >1</Text>
                      <Text style={{ fontSize: 12, color: 'green', marginLeft: 4, fontWeight: '700' }}>+ 1.37%</Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: 'column', flex: 1 }}>
                    <Text style={{ color: 'white', fontSize: 13 }}>ETH</Text>
                    <Text style={{ color: 'gray', marginTop: 4, fontSize: 12, fontWeight: '900' }}>$1,530</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate("Transaction")}
                style={styles.tokenItem}>
                <Image source={XrpImage} style={{ flex: 1, width: wp('11%'), height: wp('11%') }} resizeMode='contain' />
                <View style={styles.mainBox}>
                  <View style={{ marginLeft: 12, flex: 1 }} >
                    <Text style={{ color: 'white', fontSize: 13 }}>XRP</Text>
                    <View style={{ flexDirection: 'row', marginTop: 4 }}>
                      <Text style={{ color: 'white', fontSize: 12 }} >1,000</Text>
                      <Text style={{ fontSize: 12, color: 'red', marginLeft: 4, fontWeight: '700' }}>- 1.69%</Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: 'column', flex: 1 }}>
                    <Text style={{ color: 'white', fontSize: 13 }}>XRP</Text>
                    <Text style={{ color: 'gray', marginTop: 4, fontSize: 12, fontWeight: '900' }}>$393.20</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate("Transaction")}
                style={styles.tokenItem}>
                <Image source={BnbImage} style={{ flex: 1, width: wp('11%'), height: wp('11%') }} resizeMode='contain' />
                <View style={styles.mainBox}>
                  <View style={{ marginLeft: 12, flex: 1 }} >
                    <Text style={{ color: 'white', fontSize: 13 }}>BNB</Text>
                    <View style={{ flexDirection: 'row', marginTop: 4 }}>
                      <Text style={{ color: 'white', fontSize: 12 }} >10</Text>
                      <Text style={{ fontSize: 12, color: 'red', marginLeft: 4, fontWeight: '700' }}>- 0.77%</Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: 'column', flex: 1 }}>
                    <Text style={{ color: 'white', fontSize: 13 }}>BNB</Text>
                    <Text style={{ color: 'gray', marginTop: 4, fontSize: 12, fontWeight: '900' }}>$3034</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate("Transaction")}
                style={styles.tokenItem}>
                <Image source={trustWalletIcon} style={{ flex: 1, width: wp('11%'), height: wp('11%') }} resizeMode='contain' />
                <View style={styles.mainBox}>
                  <View style={{ marginLeft: 12, flex: 1 }} >
                    <Text style={{ color: 'white', fontSize: 13 }}>TWT</Text>
                    <View style={{ flexDirection: 'row', marginTop: 4 }}>
                      <Text style={{ color: 'white', fontSize: 12 }} >10</Text>
                      <Text style={{ fontSize: 12, color: 'red', marginLeft: 4, fontWeight: '700' }}>- 0.77%</Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: 'column', flex: 1 }}>
                    <Text style={{ color: 'white', fontSize: 13 }}>TWT</Text>
                    <Text style={{ color: 'gray', marginTop: 4, fontSize: 12, fontWeight: '900' }}>$3034</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate("Transaction")}
                style={styles.tokenItem}>
                <Image source={AeternityIcon} style={{ flex: 1, width: wp('11%'), height: wp('11%') }} resizeMode='contain' />
                <View style={styles.mainBox}>
                  <View style={{ marginLeft: 12, flex: 1 }} >
                    <Text style={{ color: 'white', fontSize: 13 }}>Aeternity</Text>
                    <View style={{ flexDirection: 'row', marginTop: 4 }}>
                      <Text style={{ color: 'white', fontSize: 12 }} >13</Text>
                      <Text style={{ fontSize: 12, color: 'red', marginLeft: 4, fontWeight: '700' }}>- 0.77%</Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: 'column', flex: 1 }}>
                    <Text style={{ color: 'white', fontSize: 13 }}>AE</Text>
                    <Text style={{ color: 'gray', marginTop: 4, fontSize: 12, fontWeight: '900' }}>$3034</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate("Transaction")}
                style={styles.tokenItem}>
                <Image source={AionIcon} style={{ flex: 1, width: wp('11%'), height: wp('11%') }} resizeMode='contain' />
                <View style={styles.mainBox}>
                  <View style={{ marginLeft: 12, flex: 1 }} >
                    <Text style={{ color: 'white', fontSize: 13 }}>Aion</Text>
                    <View style={{ flexDirection: 'row', marginTop: 4 }}>
                      <Text style={{ color: 'white', fontSize: 12 }} >43</Text>
                      <Text style={{ fontSize: 12, color: 'red', marginLeft: 4, fontWeight: '700' }}>- 0.92%</Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: 'column', flex: 1 }}>
                    <Text style={{ color: 'white', fontSize: 13 }}>Aion</Text>
                    <Text style={{ color: 'gray', marginTop: 4, fontSize: 12, fontWeight: '900' }}>$2014</Text>
                  </View>
                </View>
              </TouchableOpacity>


              <TouchableOpacity
                onPress={() => navigation.navigate("TokenList")}
              >
                <LinearGradient
                  style={styles.settingPad2}
                  colors={["#D98F26", "#BF8122", "#AB761F", "#A4721E", "#A9761F", "#B98221", "#D39525", "#D79826", "#FDF576", "#F4CC69"]}
                  start={[0, 0]}
                  end={[1, 0]}
                  locations={[0, 0.048, 0.085, 0.1201, 0.19, 0.27, 0.37, 0.38, 0.78, 1]}
                >
                  <View style={styles.innerGradient}>
                    <Text style={{ alignSelf: 'center', color: '#888', fontSize: 18 }}>Add Token</Text>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
        <BottomNav />
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffF',
    alignItems: 'center'
  },
  settingPad: {
    width: wp('100%'),
    height: hp('100%'),
    backgroundColor: '#fff',
  },
  walletPad: {
    width: wp('100%'),
    backgroundColor: 'black',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    marginTop: hp('9%')
  },
  coinPad: {
    width: wp('100%'),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: hp('8%'),
    borderBottomColor: 'yellow',
    borderBottomWidth: 2
  },

  labelContainer: {
    width: hp('6.5%'),
    height: hp('6.5%'),
    borderRadius: 40,
    backgroundColor: '#ddd',
    alignItems: 'center',
    opacity: 0.8,
    justifyContent: 'center'
  },
  mainBox: {
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: 'yellow',
    borderBottomWidth: 1,
    marginLeft: 12,
    paddingBottom: 18
  },
  iconGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('80%'),
    alignSelf: 'center',
    marginTop: hp('3%'),
    height: hp('3%')
  },

  tokenItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    alignItems: 'center',
    height: hp('7%')
  },
  scrollView: {
    flexDirection: 'column',
    height: hp('48%'),
    overflow: 'scroll',
    paddingBottom: 12
  },
  settingPad2: {
    width: wp('70%'),
    height: hp('6%'),
    borderRadius: 5,
    padding: 1,
    marginTop: hp('5%'),
    alignSelf: 'center'
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
  iconText: {
    alignSelf: 'center',
    marginTop: 4,
    textAlign: 'center',
    fontSize: hp('2%')
  }

})
