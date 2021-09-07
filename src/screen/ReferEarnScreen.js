import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
const ReferEarnScreen = () => {
    return (
        <ScrollView>
            <View>
                <View style={{
                    marginTop: wp('4%'),
                    marginLeft: wp('5%'),
                    shadowColor: '#ccc',
                    // flex: 1,
                    height: 340,
                    width: '90%',
                    backgroundColor: '#FFFFFF',
                    borderRadius: 5,
                    elevation: 10,
                    shadowColor: 'rgba(0, 0, 0, 0.25)',
                    shadowOffset: { width: 0, height: 3 },
                    shadowOpacity: 0.5,
                    shadowRadius: 5,
                    padding: 10,
                    // position: 'absolute',
                    bottom: 0,
                }}>
                    <Image
                        source={require('../images/Refer.png')}
                        style={{
                            height: 150,
                            width: '40%',
                            alignSelf: 'center',
                            borderRadius: 15,
                            resizeMode: 'cover',
                            // marginTop: wp('4%'),
                        }}
                    />
                    <Text style={{ fontSize: wp('5%'), alignSelf: 'center' }}>Double the discounts,double the fun!</Text>
                    <Text style={{ fontWeight: 'bold', color: 'grey', alignSelf: 'center', marginTop: wp('2%'), }}>Get up to ₹100 in Cash Bonus and gift your friend </Text>
                    <Text style={{ fontWeight: 'bold', color: 'grey', alignSelf: 'center' }}> discounts worth ₹100 registering and playing with us!.</Text>

                    <View style={{
                        flexDirection: 'column',
                        alignItems: 'center', marginTop: wp('4%')
                    }}>
                        <Text style={{
                            color: 'grey', marginTop: wp('1%')
                        }}>Share your code</Text>
                        < View style={{

                            marginLeft: wp('1%'),
                            shadowColor: '#ccc',
                            marginTop: wp('1%'),
                            // flex: 1,
                            height: 45,
                            width: '50%',
                            backgroundColor: 'white',
                            // borderRadius: 15,
                            // borderWidth: 1,
                            borderColor: "black",
                            borderWidth: 1,
                            borderStyle: "dashed",
                            borderRadius: 1,
                            flexDirection: 'row',
                            // elevation: 10,
                            shadowColor: 'rgba(0, 0, 0, 0.25)',
                            shadowOffset: { width: 0, height: 3 },
                            shadowOpacity: 0.5,
                            shadowRadius: 5,
                            padding: 8,
                            // position: 'absolute',
                            bottom: 0,
                        }}>
                            <Text style={{ fontWeight: 'bold', color: 'black', alignSelf: 'center', fontSize: 20 }}>ABCDEFGH</Text>

                            <AntDesign
                                style={{ marginHorizontal: wp('8%') }}
                                name={'copy1'}
                                size={25}
                            />
                        </View>
                    </View>
                </View>
                {/* <View style={{ alignItems: 'center', marginTop: wp('10%') }}>
                <Image
                    source={require('../images/Refer.png')}
                    style={{
                        marginTop: wp('10%'),
                        height: 230,
                        width: '78%',
                        borderRadius: 15,
                        resizeMode: 'cover',
                        // marginTop: wp('4%'),
                    }}
                />
                <Text style={{ fontSize: wp('10%') }}>Refer and Earn</Text>
                <Text style={{ fontWeight: 'bold', color: 'grey' }}>Refer and earn your friends and family {'\n'}and earn money just by viewing refer.</Text>
            </View> */}
                <View style={{
                    flexDirection: 'column',
                    alignItems: 'center', marginTop: wp('5%')
                }}>
                    <Text style={{ fontWeight: 'bold', color: 'black' }}>Share to your friend by using these</Text>
                </View>
                <View style={styles.categoryContainer}>
                    <TouchableOpacity
                        style={styles.categoryBtn}


                    >
                        <View style={styles.categoryIcon}>
                            <Image
                                source={require('../images/fb.png')}
                                style={{
                                    height: 65,
                                    width: '92%',
                                    resizeMode: 'cover',
                                }}
                            />
                        </View>
                        <Text style={styles.categoryBtnTxt}>Facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.categoryBtn}
                    >
                        <View style={styles.categoryIcon}>
                            <Image
                                source={require('../images/twitter.png')}
                                style={{
                                    height: 67,
                                    width: '90%',
                                    resizeMode: 'cover',
                                }}
                            />
                        </View>
                        <Text style={styles.categoryBtnTxt}>Twitter</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryBtn}

                    >
                        <View style={styles.categoryIcon}>
                            <Image
                                source={require('../images/googlepay.png')}
                                style={{
                                    height: 75,
                                    width: '90%',
                                    resizeMode: 'cover',
                                }}
                            />
                        </View>
                        <Text style={styles.categoryBtnTxt}>Google+</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.categoryContainer}>
                    <TouchableOpacity
                        style={styles.categoryBtn}


                    >
                        <View style={styles.categoryIcon}>
                            <Image
                                source={require('../images/instagram.jpg')}
                                style={{
                                    height: 62,
                                    width: '90%',
                                    resizeMode: 'cover',
                                }}
                            />
                        </View>
                        <Text style={styles.categoryBtnTxt}>Instagram</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.categoryBtn}
                    >
                        <View style={styles.categoryIcon}>
                            <Image
                                source={require('../images/wp.png')}
                                style={{
                                    height: 62,
                                    width: '90%',
                                    resizeMode: 'cover',
                                }}
                            />
                        </View>
                        <Text style={styles.categoryBtnTxt}>Whatapp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryBtn}

                    >
                        <View style={styles.categoryIcon}>
                            <Image
                                source={require('../images/sms.png')}
                                style={{
                                    height: 95,
                                    width: '90%',
                                    resizeMode: 'cover',
                                }}
                            />
                        </View>
                        <Text style={styles.categoryBtnTxt}>SMS</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', marginTop: wp('2%'), marginBottom: wp('2%'), alignSelf: 'center', width: wp('100%'), elevation: 2, height: wp('10%'), backgroundColor: 'white' }}>
                    <AntDesign
                        style={{ marginHorizontal: wp('4%'), alignSelf: 'center' }}
                        name={'addusergroup'}
                        size={25}
                    />
                    <Text style={{ fontWeight: 'bold', alignSelf: 'center' }}>You haven't invited any friend yet!</Text>
                </View>
            </View>
        </ScrollView>

    );
}

const styles = StyleSheet.create({

    categoryContainer: {
        flexDirection: 'row',
        width: '80%',
        alignSelf: 'center',
        marginTop: 10,
        // marginBottom: -10,
    },
    categoryBtn: {
        flex: 1,
        width: '30%',
        marginHorizontal: 0,
        alignSelf: 'center',
    },
    categoryIcon: {
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: 100,
        height: 100,
        // backgroundColor: '#fdeae7' /* '#FF6347' */,
        borderRadius: 10,
    },
    categoryBtnTxt: {
        alignSelf: 'center',
        // marginTop: 5,
        color: '#000000',
    },
    cardsWrapper: {
        marginTop: 20,
        width: '90%',
        alignSelf: 'center',
    },
    card: {
        height: 100,
        marginVertical: 10,
        flexDirection: 'row',
        shadowColor: '#999',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    cardImgWrapper: {
        flex: 1,
    },
    cardImg: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
    },
    cardInfo: {
        flex: 2,
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: '#fff',
    },
    cardTitle: {
        fontWeight: 'bold',
    },
    cardDetails: {
        fontSize: 12,
        color: '#444',
    },
});

export default ReferEarnScreen;
