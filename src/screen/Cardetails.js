

import React, { useContext, useState } from 'react';
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
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../helpers/colors';
import { useNavigation, useRoute } from '@react-navigation/native';
import ModelCar from './ModelCar';
import MultiSelect from 'react-native-multiple-select';
const items = [
    // name key is must. It is to show the text in front
    { id: 1, name: 'angellist' },
    { id: 2, name: 'codepen' },
    { id: 3, name: 'envelope' },
    { id: 4, name: 'etsy' },
    { id: 5, name: 'facebook' },
    { id: 6, name: 'foursquare' },
    { id: 7, name: 'github-alt' },
    { id: 8, name: 'github' },
    { id: 9, name: 'gitlab' },
    { id: 10, name: 'instagram' },
];
const Cardetails = (props) => {
    const route = useRoute();
    const screen = route.params.screen;
    const companyname = route.params.companyname;
    console.log("screen===>>>", companyname)
    const navigation = useNavigation()
    const [notes, setnotes] = useState('');
    const [selectedItems, setSelectedItems] = useState([]);

    const onSelectedItemsChange = (selectedItems) => {
        // Set Selected Items
        setSelectedItems(selectedItems);
    };
    return (
        <View >
            {/* <View style={{
                position: 'absolute',
                marginTop: Platform.OS === 'ios' ? 40 : 15,
                backgroundColor: 'yellow',
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
                <Image
                    source={require('../images/tata.jpeg')}
                    style={{
                        height: 150,
                        width: "100%",
                        resizeMode: 'cover',
                        marginTop: wp('4%'),
                    }}
                />
                
            </View> */}
            <View style={{
                position: 'absolute',
                marginTop: Platform.OS === 'ios' ? 40 : 15,
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
                    placeholder="Search Car model"
                    placeholderTextColor="grey"
                    autoCapitalize="none"
                    style={{ flex: 1, padding: 0, marginLeft: 10 }}
                />
            </View>
            {screen == 'tesla' ?
                <View style={{ height: 200, width: '100%', marginTop: 70 }}>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <ModelCar imageUri={{ uri: 'https://cdn.images.express.co.uk/img/dynamic/24/590x/Tesla-Roadster-947382.jpg' }}
                            name="Tesla Model M"
                        />
                        <ModelCar imageUri={{ uri: 'https://www.motortrend.com/uploads/sites/10/2015/11/2015-tesla-model-s-sedan-angular-front.png' }}
                            name="Tesla Model S"
                        />
                        <ModelCar imageUri={{ uri: 'https://www.byri.net/wp-content/uploads/2021/06/The-first-deliveries-of-the-electric-car-Tesla-Model-S.png' }}
                            name="Tesla Model B"
                        />
                    </ScrollView>
                </View>
                :
                <View style={{ height: 200, width: '100%', marginTop: 70 }}>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <ModelCar imageUri={{ uri: 'https://imgd.aeplcdn.com/0x0/n/cw/ec/40535/all-new-city-exterior-right-front-three-quarter.jpeg' }}
                            name="Honda city"
                        />
                        <ModelCar imageUri={{ uri: 'https://imgd.aeplcdn.com/0x0/n/cw/ec/33276/amaze-exterior-right-front-three-quarter.jpeg' }}
                            name="Honda Amaze"
                        />
                        <ModelCar imageUri={{ uri: 'https://5.imimg.com/data5/EO/LG/MY-39258909/honda-city-i-dtec-zx-car-500x500.png' }}
                            name="Honda City IDTEC"
                        />
                    </ScrollView>
                </View>
            }

            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontFamily: 'bold', marginLeft: wp('5%'), fontSize: 20, justifyContent: 'flex-start' }}>Select Fuel Type</Text>
            </View>

            <View style={{
                flexDirection: 'row', justifyContent: "space-evenly",
                marginTop: wp('3%'),
                alignItems: "center",

            }}>


                {screen == 'tesla' ?
                    <>
                        <TouchableOpacity style={{
                            alignSelf: 'center',
                            marginHorizontal: 12,
                            backgroundColor: '#FFFFFF',
                            height: hp('6%'),
                            borderWidth: 1,
                            width: wp('30%'),
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10,
                        }}>
                            <Text style={{
                                color: 'black',
                                fontSize: 18,
                            }}>Electric</Text>
                        </TouchableOpacity>



                    </> :
                    <>
                        <TouchableOpacity style={{
                            alignSelf: 'center',
                            marginHorizontal: 12,
                            backgroundColor: '#FFFFFF',
                            height: hp('6%'),
                            borderWidth: 1,
                            width: wp('30%'),
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10,
                        }}
                            onPress={() => navigation.navigate('AddGarageService')}>
                            <Text style={{
                                color: 'black',
                                fontSize: 18,
                            }}>Petrol</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            alignSelf: 'center',
                            marginHorizontal: 10,
                            borderWidth: 1,
                            backgroundColor: '#FFFFFF',
                            height: hp('6%'),
                            width: wp('30%'),
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10,
                        }}>
                            <Text style={{
                                color: 'black',
                                fontSize: 18,
                            }}>CNG</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            alignSelf: 'center',
                            marginHorizontal: 10,
                            borderWidth: 1,
                            backgroundColor: '#FFFFFF',
                            height: hp('6%'),
                            width: wp('30%'),
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10,
                        }}>
                            <Text style={{
                                color: 'black',
                                fontSize: 18,
                            }}>Diesal</Text>
                        </TouchableOpacity>
                    </>
                }

            </View>


            {/* <View style={{ alignSelf: 'center', flexDirection: 'row', marginTop: wp('10%'), }}>
                <Text style={{ fontSize: 20, alignSelf: 'center', marginHorizontal: 10 }}>Notes:</Text>
                <TextInput
                    style={{
                        borderColor: '#0d0d0d',
                        borderRadius: 20,
                        borderWidth: 0.5,
                        backgroundColor: '#FFFFFF',
                        height: 60,
                        width: 300
                    }}
                    placeholder={'Notes'}
                    placeholderTextColor={'black'}
                    onChangeText={(text) => setnotes(text)}
                    value={notes}
                    numberOfLines={10}
                    multiline={true}
                />
            </View>
            <TouchableOpacity style={{
                alignSelf: 'flex-end',
                marginVertical: 10,
                marginHorizontal: 10,
                backgroundColor: '#2e64e5',
                height: hp('6%'),
                width: wp('30%'),
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
            }}
                // onPress={() => navigation.navigate('RadiusDetails')}
                onPress={() => navigation.navigate('RadiusDetails')}
            >
                <Text style={{
                    color: '#FFFFFF',
                    fontSize: 18,
                }}>Continue</Text>
            </TouchableOpacity> */}

        </View >
    );
};

export default Cardetails;

