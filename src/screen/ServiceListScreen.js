import React, { useState } from 'react';
import {
    View,
    Text,
    Dimensions,
    TouchableOpacity,
    Image,
    FlatList,
    KeyboardAvoidingView,
    Platform,
    TextInput,
    StyleSheet,
    StatusBar,
    ScrollView
} from 'react-native';
import colors from '../helpers/colors';

import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { CommonActions, useNavigation, useRoute } from '@react-navigation/native';
import { CheckBox } from 'react-native-elements'


const ServiceListScreen = () => {
    const route = useRoute()
    // const service = route.params.service
    const navigation = useNavigation()
    const [checked, setChecked] = useState({});
    const [checkboxes, setCheckboxes] = useState([
        {
            id: 1,
            checked: false,
            'name': 'home',
            'screen': 'Home',
            amount: 100,
            title: 'Digital Meter Repair',
            'image': require('../images/service.png')
        },
        {
            id: 2,
            checked: false,
            'name': 'add',
            amount: 100,
            "screen": 'AddGarageService',
            title: 'Clutch',
            'image': require('../images/service.png')
        },
        {
            id: 3,
            checked: false,
            'name': 'service',
            amount: 100,
            "screen": "HomeService",
            title: 'Break',
            'image': require('../images/service.png')
        },
        {
            id: 4,
            checked: false,
            'name': 'homeservice',
            amount: 100,
            "screen": "HomeService",
            title: 'Accelator',
            'image': require('../images/service.png')
        },
        {
            id: 5,
            checked: false,
            amount: 100,
            "screen": "Payment",
            'name': 'payment',
            title: 'AC',
            'image': require('../images/service.png')
        },
        {
            id: 6,
            checked: false,
            amount: 100,
            title: 'Lock',
            'name': 'lock',
            "screen": "Lock",
            'image': require('../images/service.png')
        },
        {
            id: 7,
            checked: false,
            amount: 100,
            icon: 'home',
            'name': 'insurance',
            "screen": "Insurance",
            title: 'Engine',
            'image': require('../images/service.png')
        },
        {
            id: 8,
            checked: false,
            amount: 100,
            icon: 'hearto',
            'name': 'puntcure',
            title: 'Puntcure',
            'image': require('../images/service.png')
        },
        {
            id: 9,
            checked: false,
            amount: 100,
            icon: 'paperclip',
            'name': 'denting',
            "screen": "ReferEarn",
            title: 'Denting & Painting',
            'image': require('../images/service.png')
        },
        {
            id: 10,
            checked: false,
            amount: 100,
            icon: 'questioncircleo',
            "screen": "HelpSupport",
            'name': 'lights',
            title: 'Lights',
            'image': require('../images/service.png')
        },
        {
            id: 11,
            checked: false,
            amount: 100,
            icon: 'setting',
            'name': 'battery',
            "screen": "HelpSupport",
            title: 'Battery',
            'image': require('../images/service.png')
        },

        {
            id: 12,
            checked: false,
            amount: 100,
            icon: 'setting',
            'name': 'washing',
            "screen": "HelpSupport",
            title: 'Washing',
            'image': require('../images/service.png')
        }
    ])
    const CheckboxOn = () => {
        setChecked(!checked)
    }
    const optionClick = async (item) => {
        setSelectedItem(item.name)
        navigate(`${item.screen}`)
    };


    return (
        <ScrollView>
            <View>
                <Text style={{ fontSize: 15, fontWeight: 'bold', alignItems: 'center', marginTop: wp('5%'), marginLeft: wp('3%') }}>What are looking for?</Text>
                <View style={{
                    position: 'absolute',
                    marginTop: wp('15%'),
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
                        placeholder="Search Services"
                        placeholderTextColor="grey"
                        autoCapitalize="none"
                        style={{ flex: 1, padding: 0, marginLeft: 10 }}
                    />

                </View>

                <View style={{ marginTop: wp('18%'), }}>
                    {checkboxes.map(checkbox => {
                        const isChecked = checked[checkbox.id];
                        { console.log("checkbox------->>>>>>", checkboxes) }
                        return (

                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-around',
                                width: '90%',
                                alignSelf: 'center',
                                marginTop: wp('2%'),
                                marginLeft: wp('1%'),
                                marginBottom: wp('2%'),
                                shadowColor: '#ccc',
                                borderRadius: 15,
                                elevation: 1,
                                shadowColor: 'rgba(0, 0, 0, 0.25)',
                                shadowOffset: { width: 0, height: 3 },
                                shadowOpacity: 0.5,
                                shadowRadius: 5,
                                padding: 10,
                            }}>
                                <Image
                                    source={checkbox.image}
                                    style={{
                                        height: wp('10%'), width: wp('10%'), resizeMode: 'cover', alignSelf: 'center',
                                    }}
                                />
                                <View style={{ flexDirection: 'column', alignSelf: 'center', }}>
                                    <Text style={{ fontWeight: 'bold' }}>{checkbox.title}</Text>
                                    <Text style={{ width: wp('32%'), color: '#000000', }}>Description</Text>
                                </View>
                                <Text style={{ fontWeight: 'bold', alignSelf: 'center', marginRight: -wp('4%'), }}>{checkbox.amount}</Text>
                                <CheckBox
                                    center
                                    iconRight
                                    checkedIcon='check-circle-o'
                                    uncheckedIcon='circle-o'
                                    checkedColor={colors.primary_dark}
                                    size={30}
                                    uncheckedColor={colors.primary_dark}
                                    key={checkbox.id}
                                    containerStyle={{ marginRight: -wp('5%') }}
                                    amount={checkbox.amount}
                                    checked={isChecked === true}
                                    onPress={() => setChecked({ ...checked, [checkbox.id]: !isChecked })} />
                            </View>
                        )
                    })}
                </View>
            </View>
        </ScrollView>
    );
}

export default ServiceListScreen;
const styles = StyleSheet.create({

    categoryContainer: {
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',
        marginTop: 80,
        marginBottom: 10,
    },
    categoryBtn: {
        flex: 1,
        width: '30%',
        flexDirection: 'column',
        marginHorizontal: 0,
        alignSelf: 'center',
    },
    categoryIcon: {
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    categoryBtnTxt: {
        alignSelf: 'center',
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
    selecteditem: {
        width: '90%',
        marginHorizontal: 0,
        alignSelf: 'center',
        flexDirection: 'column',
        marginTop: wp('5%'),
        marginLeft: wp('1%'),
        shadowColor: '#ccc',
        backgroundColor: colors.primary,
        borderRadius: 15,
        elevation: 10,
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        padding: 10,
        bottom: 0
    },
    item: {

    },
    selectedtext: {
        marginStart: 10,
        alignSelf: 'center',
        color: colors.primary_dark
    },
    text: {
        marginStart: 10,
        alignSelf: 'center',
        color: 'black'
    },

});


