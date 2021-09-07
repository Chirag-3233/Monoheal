import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    Button,
    FlatList,
    StyleSheet,
    ScrollView
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        "icon": require('../images/card.png'),
        title: 'Credit/Debit Card',
        km: '3 km'
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        "icon": require('../images/googlepay.png'),
        'screen': 'GarageProfile',
        title: 'Google Pay',
        km: '3 km'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        "icon": require('../images/paytm.png'),
        "screen": 'GarageProfile',
        title: 'Paytm',
        km: '2 km'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        "icon": require('../images/phonepe.png'),
        "screen": "GarageProfile",
        title: 'Phone pe',
        km: '5 km'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        "icon": require('../images/paypal.png'),
        "screen": "GarageProfile",
        title: 'Paypal',
        km: '5 km'
    },

    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        "icon": require('../images/cash.png'),
        'screen': 'GarageProfile',
        title: 'Cash',
        km: '4 km'
    },
];
const PaymentScreen = () => {
    const Item = (item, index) => {
        return (
            <View style={{
                marginTop: wp('5%'),
                marginLeft: wp('5%'),
                shadowColor: '#ccc',
                height: 70,
                width: '90%',
                backgroundColor: '#ffffff',
                borderRadius: 15,
                elevation: 10,
                shadowColor: 'rgba(0, 0, 0, 0.25)',
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.5,
                shadowRadius: 5,
                // padding: 10,
                // position: 'absolute',
                bottom: 0,
            }}>
                <TouchableOpacity
                    onPress={() => optionClick(item)}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        marginVertical: wp('5%'),
                        marginHorizontal: wp('4%'),
                    }}>
                        <Image
                            source={item.icon}
                            style={{
                                height: 33,
                                width: 33,
                                borderRadius: 25,
                                resizeMode: 'cover',
                                // marginTop: wp('4%'),
                            }}
                        />
                        <Text style={{ fontSize: 18, color: 'black', marginHorizontal: wp('1%'), alignItems: 'center' }}>{item.title}</Text>

                        <AntDesign
                            style={{ marginLeft: wp('25%') }}
                            name={'right'}
                            size={30}
                        />
                    </View>
                </TouchableOpacity>
            </View >
        );
    }
    return (
        <ScrollView>
            <View>
                <View style={{ alignSelf: 'flex-end', marginTop: wp('4%'), marginRight: wp('3%') }}>
                    <TouchableOpacity style={{
                        alignItems: 'center',
                        backgroundColor: '#2e64e5',
                        height: hp('5%'),
                        width: wp('22%'),
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 5,
                    }}>
                        <Text style={{ fontSize: 15, color: 'white' }}> + Add coin</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ alignItems: 'center', width: '100%' }}>
                    <Image
                        source={require('../images/gold-coin.png')}
                        style={{
                            height: 75,
                            width: 50,
                            borderRadius: 25,
                            resizeMode: 'cover',
                            // marginTop: wp('4%'),
                        }}
                    />
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>2 Gold Coins</Text>
                    {/* <TouchableOpacity style={{
                        alignItems: 'center',
                        backgroundColor: '#2e64e5',
                        height: hp('5%'),
                        width: wp('22%'),
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10,
                    }}>
                        <Text style={{ fontSize: 15, color: 'white' }}> + Add coin</Text>
                    </TouchableOpacity> */}

                </View>
                <FlatList
                    data={DATA}
                    // renderItem={renderItem}
                    // keyExtractor={item => item.id}
                    style={{ paddingBottom: 10, bottom: 50, top: 5, height: hp('80%') }}
                    renderItem={({ item, index }) => Item(item, index)}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                />
                {/* <View style={{
                    flexDirection: 'row', marginBottom: wp('6%'), justifyContent: "space-evenly",
                    alignItems: "center"
                }}>
                    <TouchableOpacity

                        style={{
                            alignSelf: 'center',
                            marginHorizontal: 12,
                            backgroundColor: '#2e64e5',
                            height: hp('6%'),
                            width: wp('45%'),
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10,
                        }}>
                        <Text style={{
                            color: '#FFFFFF',
                            fontSize: 18,
                        }}>Use Coupon</Text>
                    </TouchableOpacity>
                </View> */}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({})

export default PaymentScreen;
