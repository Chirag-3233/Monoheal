import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, ScrollView, TouchableOpacity, Alert, Platform } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import "react-native-gesture-handler";
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { useIsDrawerOpen } from '@react-navigation/drawer';
import { closeDrawer, toggleDrawer } from '@react-navigation/drawer';
import { ActivityIndicator } from 'react-native';
import colors from '../helpers/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/AntDesign';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        icon: 'home',
        'screen': 'Home',
        title: 'Home',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        icon: 'car',
        "screen": 'AddGarageService',
        title: 'Garage services',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        icon: 'home',
        "screen": "HomeService",
        title: 'Home services',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        icon: 'book',
        // "screen": "HomeService",
        title: 'Booking',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        icon: 'creditcard',
        "screen": "Payment",
        title: 'Payment methods',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        icon: 'filetext1',
        title: 'Bills',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        icon: 'home',
        "screen": "Insurance",
        title: 'Insurance',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        icon: 'hearto',
        title: 'Rewards',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        icon: 'paperclip',
        "screen": "ReferEarn",
        title: 'Refer & earn',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        icon: 'questioncircleo',
        "screen": "HelpSupport",
        title: 'Help and support',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        icon: 'setting',
        title: 'Settings',
    },
];


const MenuDrawer = (props) => {


    const { navigate } = props.navigation;
    const navigation = useNavigation()
    const [userName, setUserName] = useState('');
    const [selectedItem, setSelectedItem] = useState('');
    const [enableScrollViewScroll, setEnableScrollViewScroll] = useState(true);
    const [DrawerData, setDrawerData] = useState('');
    const isDrawerOpen = useIsDrawerOpen();
    // let data = {}
    // const data = {
    //     routes: [
    //         {
    //             name: "Home",
    //             icon: "ios-home"
    //         },
    //         {
    //             name: "Profile",
    //             icon: "ios-contact"
    //         },
    //         {
    //             name: "Settings",
    //             icon: "ios-settings"
    //         },
    //     ]
    // }
    useEffect(() => {
        if (isDrawerOpen) {

            // getTokenAndFetchdata()
        }
    }, [isDrawerOpen])


    const logout = async () => {
        logfunction("txtlogout", txtlogout)
        props.navigation.toggleDrawer()

        Alert.alert(
            `${txtlogout}`,
            `${txtConfirmLogout}`,
            [
                {
                    text: "Cancel",
                    onPress: () => props.navigation.toggleDrawer(),
                    style: "cancel"
                },
                { text: "OK", onPress: () => navigateLogin() }
            ],
        );
    }

    const onEnableScroll = (value) => {

        setEnableScrollViewScroll(value)
    }
    const Item = (item, index) => {
        let selectedstyle = selectedItem == item.name ? styl.selecteditem : styl.item
        let selectedtextstyle = selectedItem == item.name ? styl.selectedtext : styl.text
        return (

            // <View style={[selectedstyle, {}]} >
            //     <TouchableOpacity style={{ flexDirection: 'row', padding: 10, alignItems: 'center', alignContent: 'center' }} onPress={() => optionClick(item)}>
            //         <AntDesign
            //             style={{ marginHorizontal: 16 }}
            //             name={item.icon}
            //             size={22}
            //         />
            //         <Text style={[selectedtextstyle, {}]}>{item.title}</Text>
            //     </TouchableOpacity>
            // </View >

            <TouchableOpacity onPress={() => optionClick(item)}>
                <View style={{
                    flexDirection: 'row',
                    // justifyContent: 'space-around',
                    marginVertical: 8,
                    marginHorizontal: 1
                }}>
                    <AntDesign
                        style={{ marginHorizontal: 16 }}
                        name={item.icon}
                        size={22}
                    />
                    <Text style={{ fontSize: 18, color: 'grey' }}>{item.title}</Text>
                </View>
            </TouchableOpacity>

        );
    }

    const optionClick = async (item) => {
        // logfunction("Option Pressed..", item.screen)
        setSelectedItem(item.name)
        navigate(`${item.screen}`)
    };

    const _navigate = (screen) => {
        props.navigation.toggleDrawer()
        navigate(screen)

    };

    return (
        <View style={{ flex: 1, height: hp('100%') }}>

            <ScrollView scrollEnabled={enableScrollViewScroll}>
                {/* <Image source={require('../images/logo.png')} style={{
                    resizeMode: 'contain',
                    height: hp('15%'),
                    width: hp('15%'),
                    marginTop: Platform.OS == 'ios' ? hasNotch() ? hp('5%') : hp('5%') : 20,
                    alignSelf: 'center',
                }} /> */}

                <View>
                    <View style={{ flexDirection: 'row', alignContent: 'center', marginTop: wp('7%'), }}>
                        <Image source={
                            require('../images/logo.png')
                        } style={{
                            height: wp('15%'),
                            width: wp('15%'),
                            borderRadius: wp('15%'),
                            margin: wp('2%'),
                            marginTop: wp('3%'),
                        }} />
                        <View style={{ marginLeft: wp('3%'), marginTop: hp('2%') }}>
                            <Text style={{ justifyContent: 'center', fontSize: 18, marginTop: hp('0.7%') }}>Your Name ! </Text>
                            <Text style={{ justifyContent: 'center', fontSize: 18, marginTop: hp('0.7%'), color: 'grey' }}>Click here to edit ! </Text>
                            {/* <View style={{ flexDirection: 'row', marginTop: hp('0.3%') }}>
                                <TouchableWithoutFeedback  >
                                    <Text style={{ color: colors.primary_dark, fontSize: 14 }}>View Profile</Text>
                                </TouchableWithoutFeedback>
                                <View style={{ backgroundColor: colors.secondary_dark, height: wp('1%'), width: wp('1%'), borderRadius: wp('0.5%'), marginHorizontal: wp('2%'), marginTop: Platform.OS == 'ios' ? hp('0.7%') : hp('1.2%') }} />
                                <TouchableWithoutFeedback>
                                    <Text style={{ color: colors.primary_dark, fontSize: 14 }}>Setting</Text>
                                </TouchableWithoutFeedback>
                            </View> */}
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: wp('2%') }}>
                    <FlatList
                        data={DATA}
                        // renderItem={renderItem}
                        // keyExtractor={item => item.id}
                        style={{ paddingBottom: 10, bottom: 50, top: 5, height: hp('60%') }}
                        renderItem={({ item, index }) => Item(item, index)}
                        keyExtractor={(item, index) => index.toString()}
                        showsVerticalScrollIndicator={false}
                    />
                </View>

            </ScrollView>
            <TouchableOpacity style={{
                alignSelf: 'center',
                marginBottom: 15,
                backgroundColor: colors.primary_dark,
                height: hp('6%'),
                width: wp('30%'),
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
            }}>
                <Text style={{
                    color: '#FFFFFF',
                    fontSize: 18,
                }}>Log out</Text>
            </TouchableOpacity>
        </View>
    );


}


export default MenuDrawer;

const styl = StyleSheet.create({
    selecteditem: {
        backgroundColor: colors.primary_light,
    },
    item: {
    },
    selectedtext: {
        marginStart: 5, alignSelf: 'center', color: colors.primary_dark
        //  flexDirection: 'row',
        // justifyContent: 'space-around',
        // marginVertical: 8,
        // marginHorizontal: 1
    },
    text: {
        marginStart: 10,
        alignSelf: 'center',
        color: 'black'
    }

})
