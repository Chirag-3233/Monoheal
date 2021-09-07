import React, { useState } from 'react';
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
import { CommonActions, useNavigation, useRoute } from '@react-navigation/native';
import moment from "moment";
import { SliderPicker } from 'react-native-slider-picker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import DateTimePicker from '@react-native-community/datetimepicker';
import colors from '../helpers/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Slider from 'react-native-slider';
// import MultiSlider from 'react-native-multi-slider';
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        "icon": require('../images/garage.png'),
        'screen': 'GarageProfile',
        title: 'Sai Garage',
        km: '3 km'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        "icon": require('../images/garage.png'),
        "screen": 'GarageProfile',
        title: 'Shree Auto Garage',
        km: '2 km'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        "icon": require('../images/garage.png'),
        "screen": "GarageProfile",
        title: 'Radhe Garage',
        km: '5 km'
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        "icon": require('../images/garage.png'),
        title: 'Xyz Garage',
        km: '3 km'
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        "icon": require('../images/garage.png'),
        'screen': 'GarageProfile',
        title: 'Global Garage',
        km: '4 km'
    },
];
const RadiusDetails = (props) => {
    // const navigation = useNavigation()
    const { navigate } = props.navigation;
    const navigation = useNavigation()
    const [value, setValue] = useState(5)
    const [openDialog, setOpenDialog] = useState(false);
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());
    const [showDate, setShowDate] = useState(false);
    const [showTime, setShowTime] = useState(false);
    const [selectedItem, setSelectedItem] = useState('');
    const [sliderOneChanging, setSliderOneChanging] = useState(false);
    const [sliderOneValue, setSliderOneValue] = useState([5]);
    const [multiSliderValue, setMultiSliderValue] = useState([3, 7]);
    const [seekbarValue, setSeekbarValue] = useState(5);
    // const [
    //     nonCollidingMultiSliderValue,
    //     setNonCollidingMultiSliderValue,
    // ] = React.useState([0, 100]);

    const sliderOneValuesChangeStart = () => {
        setSliderOneChanging(true);
    }


    const sliderOneValuesChange = values => {
        setSliderOneValue(values);
    }


    const sliderOneValuesChangeFinish = () => {
        setSliderOneChanging(false);
    }

    // const multiSliderValuesChange = values => setMultiSliderValue(values);

    const showDatepicker = () => {
        setShowDate(true);
    };
    const showTimepicker = () => {
        setShowTime(true);
    };

    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate)

        setShowDate(Platform.OS === 'ios');
    };

    const onChangeTime = (event, selectedTime) => {
        const currentTime = selectedTime || date;
        setTime(currentTime)
        setShowTime(Platform.OS === 'ios');
    }

    const Item = (item, index) => {

        return (
            <View style={{
                marginTop: wp('5%'),
                marginLeft: wp('5%'),
                shadowColor: '#ccc',
                // flex: 1,
                height: 80,
                width: '90%',
                backgroundColor: '#333333',
                borderRadius: 15,
                elevation: 10,
                shadowColor: 'rgba(0, 0, 0, 0.25)',
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.5,
                shadowRadius: 5,
                padding: 10,
                // position: 'absolute',
                bottom: 0,
            }}>
                <TouchableOpacity onPress={() => optionClick(item)}>
                    <View style={{

                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        marginVertical: 15,
                        marginHorizontal: 10
                    }}>
                        <Image
                            source={item.icon}
                            style={{
                                height: 25,
                                width: 25,
                                borderRadius: 25,
                                resizeMode: 'cover',
                                // marginTop: wp('4%'),
                            }}
                        />
                        <Text style={{ fontSize: 18, color: 'white' }}>{item.title}</Text>
                        <Text style={{ fontSize: 18, color: 'white' }}>{item.km}</Text>

                    </View>
                </TouchableOpacity>
            </View>


        );
    }
    const optionClick = async (item) => {
        console.log("item====", item)
        // logfunction("Option Pressed..", item.screen)
        setSelectedItem(item.name)
        navigate(`${item.screen}`)
    };
    return (
        <View style={{}}>
            <View style={{
                marginTop: wp('4%'),
                marginLeft: wp('5%'),
                shadowColor: '#ccc',
                // flex: 1,
                height: 100,
                width: '90%',
                backgroundColor: '#FFFFFF',
                borderRadius: 15,
                elevation: 10,
                shadowColor: 'rgba(0, 0, 0, 0.25)',
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.5,
                shadowRadius: 5,
                padding: 10,
                // position: 'absolute',
                bottom: 0,
            }}>

                <Text style={{
                    fontSize: 15, fontWeight: 'bold',
                }}>Distance</Text>
                {/* <SliderPicker
                    // minLabel={'M'}
                    // midLabel={'mid'}
                    // maxLabel={'Km'}
                    maxValue={5}
                    callback={(position) => {
                        setValue(position);
                    }}
                    defaultValue={value}
                    labelFontColor={"#6c7682"}
                    labelFontWeight={'350'}
                    showFill={true}
                    fillColor={'black'}
                    labelFontWeight={'bold'}
                    showNumberScale={true}
                    // showSeparatorScale={true}
                    buttonBackgroundColor={'#fff'}
                    buttonBorderColor={"#6c7682"}
                    buttonBorderWidth={1}
                    scaleNumberFontWeight={'250'}
                    buttonDimensionsPercentage={6}
                    heightPercentage={1}
                    widthPercentage={80}
                /> */}

                <Slider
                    value={seekbarValue}
                    minimumValue={0}
                    maximumValue={10}
                    step={1}
                    onSlidingComplete={(value) => {
                        setSeekbarValue(value);
                    }}
                />
                <View>
                    <Text
                        style={{ alignSelf: 'center' }}
                    >{` ${seekbarValue} km`}</Text>
                </View>
                {/* <MultiSlider
                    values={sliderOneValue}
                    sliderLength={310}
                    onValuesChangeStart={sliderOneValuesChangeStart}
                    onValuesChange={sliderOneValuesChange}
                    onValuesChangeFinish={sliderOneValuesChangeFinish}
                /> */}
            </View>
            {/* <View style={{ flexDirection: 'row', marginHorizontal: 10, borderWidth: 1, borderRadius: 10, justifyContent: 'center', marginTop: 30 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginHorizontal: 10 }}>Accelator</Text>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Rs.100</Text>
            </View>
            <View style={{ flexDirection: 'row', marginVertical: 10, borderWidth: 1, marginHorizontal: 10, borderRadius: 10, justifyContent: 'center', marginTop: 30 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginHorizontal: 10 }}>Break</Text>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Rs.100</Text>
            </View> */}

            <FlatList
                data={DATA}
                // renderItem={renderItem}
                // keyExtractor={item => item.id}
                style={{ paddingBottom: 10, bottom: 50, top: 5, height: hp('60%') }}
                renderItem={({ item, index }) => Item(item, index)}
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
            />

            <View style={{
                flexDirection: 'row', marginTop: wp('4%'), justifyContent: "space-evenly",
                alignItems: "center"
            }}>
                <TouchableOpacity
                    onPress={() => { setOpenDialog(true) }}
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
                    }}>Book Schedule</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    alignSelf: 'center',
                    marginHorizontal: 10,
                    backgroundColor: '#2e64e5',
                    height: hp('6%'),
                    width: wp('30%'),
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                }}>
                    <Text style={{
                        color: '#FFFFFF',
                        fontSize: 18,
                    }}>Grab</Text>
                </TouchableOpacity>
            </View>
            <Dialog
                width={wp('80%')}
                height={hp('55%')}
                visible={openDialog}
                onTouchOutside={() => {
                    setOpenDialog(false)
                }}>
                <DialogContent style={{ marginTop: 20, flex: 1 }}>
                    <View style={{ marginVertical: hp('1%') }}>

                        <Text style={{
                            fontSize: 16,
                            marginBottom: hp('0.5%')
                        }}>* Delivery Date : </Text>
                        <TouchableOpacity style={{
                            borderColor: colors.secondary_dark,
                            alignContent: 'center',
                            justifyContent: 'center',
                            borderWidth: 1,
                            borderRadius: wp('2%'),
                            margin: 5,
                            height: Platform.OS == 'ios' ? hp('4%') : hp('5%'),
                            backgroundColor: 'white'
                        }} onPress={() => { showDatepicker() }}>
                            {
                                Platform.OS == "android" ? <Text> {moment(date).format('YYYY:MM:DD')} </Text> : null
                            }
                            {showDate && (
                                <DateTimePicker
                                    value={date}
                                    mode={'date'}
                                    display="default"
                                    onChange={onChangeDate}
                                    style={{ backgroundColor: 'white', borderRadius: 25 }}
                                />
                            )}
                        </TouchableOpacity>
                        <Text style={{
                            fontSize: 16,
                            marginBottom: hp('0.5%')
                        }}>*  Delivery  Time : </Text>
                        <TouchableOpacity style={{
                            borderColor: colors.secondary_dark,
                            alignContent: 'center',
                            justifyContent: 'center',
                            borderWidth: 1,
                            borderRadius: wp('2%'),
                            margin: 5,
                            height: Platform.OS == 'ios' ? hp('4%') : hp('5%'),
                            backgroundColor: 'white'
                        }} onPress={() => { showTimepicker() }}>
                            {
                                Platform.OS == "android" ? <Text> {moment(time).format('hh:mm:ss a')} </Text> : null
                            }
                            {showTime && (
                                <DateTimePicker
                                    value={time}
                                    mode={'time'}
                                    display="default"
                                    onChange={onChangeTime}
                                    style={{
                                        backgroundColor: 'white',
                                        borderRadius: 25
                                    }}
                                />
                            )}
                        </TouchableOpacity>
                        <Text style={{
                            fontSize: 16,
                            marginBottom: hp('0.5%')
                        }}>* Pickup Date : </Text>
                        <TouchableOpacity style={{
                            borderColor: colors.secondary_dark,
                            alignContent: 'center',
                            justifyContent: 'center',
                            borderWidth: 1,
                            borderRadius: wp('2%'),
                            margin: 5,
                            height: Platform.OS == 'ios' ? hp('4%') : hp('5%'),
                            backgroundColor: 'white'
                        }} onPress={() => { showDatepicker() }}>
                            {
                                Platform.OS == "android" ? <Text> {moment(date).format('YYYY:MM:DD')} </Text> : null
                            }
                            {showDate && (
                                <DateTimePicker
                                    value={date}
                                    mode={'date'}
                                    display="default"
                                    onChange={onChangeDate}
                                    style={{ backgroundColor: 'white', borderRadius: 25 }}
                                />
                            )}
                        </TouchableOpacity>
                        <Text style={{
                            fontSize: 16,
                            marginBottom: hp('0.5%')
                        }}>*  Pickup Time : </Text>
                        <TouchableOpacity style={{
                            borderColor: colors.secondary_dark,
                            alignContent: 'center',
                            justifyContent: 'center',
                            borderWidth: 1,
                            borderRadius: wp('2%'),
                            margin: 5,
                            height: Platform.OS == 'ios' ? hp('4%') : hp('5%'),
                            backgroundColor: 'white'
                        }} onPress={() => { showTimepicker() }}>
                            {
                                Platform.OS == "android" ? <Text> {moment(time).format('hh:mm:ss a')} </Text> : null
                            }
                            {showTime && (
                                <DateTimePicker
                                    value={time}
                                    mode={'time'}
                                    display="default"
                                    onChange={onChangeTime}
                                    style={{
                                        backgroundColor: 'white',
                                        borderRadius: 25
                                    }}
                                />
                            )}
                        </TouchableOpacity>

                        <View style={{
                            flexDirection: 'row', marginTop: wp('5%'), justifyContent: "space-evenly",
                            alignItems: "center"
                        }}>
                            <TouchableOpacity
                                onPress={() => { navigation.navigate('HomeScreen', { animation: 'animation' }), setOpenDialog(false) }}
                                style={{
                                    alignSelf: 'center',
                                    marginHorizontal: 12,
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
                                }}>Book</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </DialogContent>
            </Dialog>
        </View>
        // deliverdate and pickup time
    );
}

export default RadiusDetails;
