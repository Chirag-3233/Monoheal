import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HelpSupport from './HelpSupport';
import SeeMore from 'react-native-see-more-inline';
import colors from '../helpers/colors';
const LOREM_IPSUM_MEDIUM =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pellentesque aliquam leo nec venenatis. Vivamus rutrum aliquet ultrices. In vel turpis quis velit consectetur consequat.';

const HelpSupportPage = () => {
    return (
        <ScrollView>
            <View>
                <Text style={{ fontSize: wp('8%'), marginTop: wp('5%'), textAlign: 'center' }}>How can we help you?</Text>
                <View style={{
                    position: 'absolute',
                    marginTop: Platform.OS === 'ios' ? 40 : wp('18%'),
                    flexDirection: "row",
                    backgroundColor: '#fff',
                    width: '92%',
                    alignSelf: 'center',
                    borderRadius: 10,
                    padding: 10,
                    shadowColor: '#ccc',
                    shadowOffset: { width: 0, height: 3 },
                    shadowOpacity: 0.5,
                    shadowRadius: 5,
                    elevation: 10,
                }}>
                    <Ionicons style={{ marginTop: 0 }} name="ios-search" size={25} />
                    <TextInput
                        placeholder="Search Help"
                        placeholderTextColor="grey"
                        autoCapitalize="none"
                        style={{ flex: 1, padding: 0, marginLeft: 10 }}
                    />
                </View>
                <View style={{ alignItems: 'center', marginTop: wp('18%'), }}>
                    <Image
                        source={require('../images/help.png')}
                        style={{
                            height: 230,
                            width: '78%',
                            borderRadius: 15,
                            resizeMode: 'cover',
                            // marginTop: wp('4%'),
                        }}
                    />
                </View>
                {/* <View style={{ alignItems: 'center', marginTop: wp('10%') }}>
                <Image
                    source={require('../images/help.png')}
                    style={{
                        height: 230,
                        width: '78%',
                        borderRadius: 15,
                        resizeMode: 'cover',
                        // marginTop: wp('4%'),
                    }}
                />
                <Text style={{ fontSize: wp('8%'), marginTop: wp('5%') }}>How can we help you?</Text>
                <Text style={{ fontWeight: 'bold', fontSize: wp('4%'), color: 'blue', marginTop: wp('6%') }}>Your Help page acts as a kind of funnel, sorting out {'\n'}obvious questions first with FAQs, second with Help {'\n'} articles, and then finally with active support.</Text>
            </View> */}
                {/* <View style={{ paddingHorizontal: 16, }}>
                    <SeeMore numberOfLines={2} linkStyle={{ fontWeight: '500' }}>
                        {LOREM_IPSUM_MEDIUM}
                    </SeeMore>
                </View> */}
                <ScrollView
                    style={{
                        height: 180, width: '100%', marginTop: wp('4%')
                    }}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <HelpSupport
                        name="How to Book Service?"
                        text1="waiting....."
                    />
                    <HelpSupport imageUri={{ uri: 'https://www.motortrend.com/uploads/sites/10/2015/11/2015-tesla-model-s-sedan-angular-front.png' }}
                        name="How to Add coin?"
                        text1="waiting....."
                    />
                    <HelpSupport imageUri={{ uri: 'https://www.byri.net/wp-content/uploads/2021/06/The-first-deliveries-of-the-electric-car-Tesla-Model-S.png' }}
                        name="How to Add Reward?"
                        text1="waiting....."
                    />
                    <HelpSupport imageUri={{ uri: 'https://www.byri.net/wp-content/uploads/2021/06/The-first-deliveries-of-the-electric-car-Tesla-Model-S.png' }}
                        name="How to claim insurance?"
                        text1="waiting....."
                    />
                </ScrollView>
                <View style={{ backgroundColor: '#DCDCDC' }}>
                    <Text style={{ fontSize: 24, fontWeight: 'bold', alignSelf: 'flex-start', marginLeft: wp('4%') }}>Still stuck?</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'grey', alignSelf: 'flex-start', marginLeft: wp('4%'), marginTop: wp('4%') }}>Have you tried searching for an answer?</Text>
                    <Text style={{ fontSize: 16, fontWeight: 'grey', alignSelf: 'flex-start', marginLeft: wp('4%'), marginTop: wp('4%') }}>Create a email and we'll reply as soon we can,or more back later.Our live support is open 24*7.</Text>
                    <Text style={{ fontSize: 22, fontWeight: 'bold', alignSelf: 'flex-start', marginLeft: wp('4%'), marginTop: wp('4%') }}>Contact with us:</Text>
                    <View style={{ flexDirection: 'row', marginTop: wp('2%'), marginBottom: wp('8%'), marginLeft: wp('8%') }}>
                        <View style={{ flexDirection: 'row', backgroundColor: colors.primary_button, borderRadius: 25, marginHorizontal: 5, width: '40%', height: '130%', alignItems: 'center', marginRight: wp('3%') }}>
                            <View style={{ marginLeft: wp('4%') }}>
                                <Image
                                    source={require('../images/chat.png')}
                                    style={{ height: 35, width: 35, borderRadius: 35, marginRight: wp('1%') }}
                                />
                            </View>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white', }}>Chat with us </Text>
                        </View>
                        <View style={{ flexDirection: 'row', borderRadius: 25, marginHorizontal: 5, width: '40%', height: '130%', alignItems: 'center', marginRight: wp('3%') }}>
                            <View style={{ marginLeft: wp('4%') }}>
                                <Image
                                    source={require('../images/email.png')}
                                    style={{ height: 35, width: 35, borderRadius: 25, marginRight: wp('1%') }}
                                />
                            </View>
                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Email us</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: wp('4%') }}>
                        <Image
                            source={require('../images/logo.png')}
                            style={{ height: 30, width: 30, borderRadius: 35, marginRight: wp('2%') }}
                        />
                        <Text style={{ alignSelf: 'center', fontWeight: '200', fontSize: 20 }}>Motoheal</Text>
                    </View>
                    <View style={{ marginTop: wp('4%'), marginBottom: wp('2%') }}>
                        <TouchableOpacity style={{ marginLeft: wp('4%') }}>
                            <Text style={{ fontSize: 20, fontWeight: '300' }}>Home</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: wp('4%') }}>
                            <Text style={{ fontSize: 20, fontWeight: '300' }}>Solutions</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({})

export default HelpSupportPage;
