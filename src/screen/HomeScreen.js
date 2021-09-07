import React, { useEffect, useState, useRef } from 'react';
import { View, Text, Image, FlatList, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Alert, Platform, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import "react-native-gesture-handler";
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { CommonActions, useNavigation } from '@react-navigation/native';
import {
    closeDrawer, toggleDrawer, openDrawer, createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import { ActivityIndicator } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AntDesign from 'react-native-vector-icons/AntDesign';
import { BottomSheet } from 'react-native-btr';
import { Bubbles, DoubleBounce, Bars, Pulse } from 'react-native-loader';
import { Button, RadioButton } from 'react-native-paper';
import colors from '../helpers/colors';
import { CirclesLoader, PulseLoader, TextLoader, DotsLoader, LineDotsLoader } from 'react-native-indicator';
import Animated from 'react-native-reanimated';
import BottomSheett from 'reanimated-bottom-sheet';
function HomeScreen({ navigation }) {

    // const navigation = useNavigation()
    const [visible, setVisible] = useState(false);
    const [value, setValue] = React.useState('first');
    const toggleBottomNavigationView = () => {
        //Toggling the visibility state of the bottom sheet
        setVisible(!visible);
    };
    // useEffect(() => {
    //     return () => {
    //         getanimation()
    //     };
    // }, []);
    // const getanimation = () => {
    //     return (
    //         <View>
    //             <Bubbles size={10} color="#FFF" />
    //         </View>
    //     )
    // }
    const sheetRef = useRef(null);
    const renderContent = () => (
        <View
            style={{
                backgroundColor: 'white',
                padding: 16,
                height: 450,
            }}
        >
            {/* <Text>Swipe down to close</Text> */}
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: wp('10%'), }}>
                {/* <Bubbles size={35} color="#FFF" /> */}
                <LineDotsLoader size={35} color={'#ffcc00'} />
            </View>
        </View>
    );
    return (

        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                // customMapStyle={mapStyle}
                >
                    <Marker
                        draggable
                        coordinate={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                        }}
                        onDragEnd={
                            (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
                        }
                        title={'Test Marker'}
                        description={'This is a description of the marker'}
                    />
                </MapView>
            </View>

            {/* <View style={{
                backgroundColor: 'rgba(0,0,0,0)',
                position: 'absolute',
                top: Platform.OS === 'ios' ? 5 : 5,
                left: 10,
                right: 10,
            }}>
                <GooglePlacesAutocomplete
                    placeholder="Enter your Search"
                    minLength={1} // minimum length of text to search
                    autoFocus={true}
                    styles={{
                        textInputContainer: {
                            width: '100%',

                        },
                        textInput: {
                            backgroundColor: '#FFFFFF',
                            height: 44,
                            borderRadius: 25,
                            paddingVertical: 8,
                            paddingHorizontal: 10,
                            fontSize: 14,
                            flex: 1,
                        },
                        predefinedPlacesDescription: {
                            color: '#1faadb',
                        },
                    }}
                    returnKeyType={'search'}
                    fetchDetails={true}
                    nearbyPlacesAPI="GooglePlacesSearch"
                    debounce={300}
                />
            </View> */}

            <View style={{
                position: 'absolute',
                marginTop: Platform.OS === 'ios' ? 40 : 20,
                flexDirection: "row",
                backgroundColor: '#fff',
                width: '92%',
                alignSelf: 'center',
                borderRadius: 25,
                padding: 10,
                shadowColor: '#ccc',
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.5,
                shadowRadius: 5,
                elevation: 10,
            }}>

                <Ionicons style={{ marginTop: 0 }} onPress={() => navigation.openDrawer()} name="ios-menu" size={25} />
                <TextInput
                    placeholder="Your current location"
                    placeholderTextColor="#000"
                    autoCapitalize="none"
                    style={{ flex: 1, padding: 0, marginLeft: 10 }}
                />
                <Ionicons style={{ marginTop: 0 }} onPress={toggleBottomNavigationView} name="heart-outline" size={25} />
            </View>


            {/* <View style={{ flexDirection: 'row', marginTop: Platform.OS === 'ios' ? 40 : 80, justifyContent: 'center' }}>
                <TouchableOpacity>
                    <View style={{ flexDirection: 'row', padding: 10, backgroundColor: '#e6e6e6', borderRadius: 25, margin: 5 }}>
                        <AntDesign
                            style={{ marginHorizontal: 5 }}
                            name={'car'}
                            size={22}
                        />
                        <Text style={{ fontSize: 18, color: 'black' }}>Garage services</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{
                        flexDirection: 'row', backgroundColor: '#e6e6e6', padding: 10, borderRadius: 25, margin: 5
                    }}>
                        <AntDesign
                            style={{ marginHorizontal: 5 }}
                            name={'home'}
                            size={22}
                        />
                        <Text style={{ fontSize: 18, color: 'black' }}>Home services</Text>
                    </View>
                </TouchableOpacity>
            </View> */}
            {/* <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: wp('140%'), }}>
               
                <LineDotsLoader size={35} color={'#ffcc00'} />
            </View>
            <BottomSheett
                ref={sheetRef}
                isBackDropDismisByPress={true}
                backDropColor="red"
                snapPoints={[450, 300, 150]}
                initialPosition={40}
                isRoundBorderWithTipHeader={true}
                borderRadius={10}
                renderContent={renderContent}
            /> */}
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: wp('160%'), }}>
                <TouchableOpacity>
                    <AntDesign
                        style={{ marginHorizontal: 30, marginTop: wp('0.7%') }}
                        name={'car'}
                        size={30}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <AntDesign
                        style={{ marginHorizontal: 30 }}
                        name={'home'}
                        size={30}
                    />
                </TouchableOpacity>
            </View>
            <BottomSheet
                visible={visible}
                //setting the visibility state of the bottom shee
                onBackButtonPress={toggleBottomNavigationView}
                //Toggling the visibility state
                onBackdropPress={toggleBottomNavigationView}
            //Toggling the visibility state
            >
                {/*Bottom Sheet inner View*/}
                <View style={{
                    backgroundColor: '#fff',
                    width: '100%',
                    height: 250,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                        }}>
                        <View style={{ flexDirection: 'column', marginLeft: -wp('5%') }}>
                            <Text
                                style={{
                                    marginLeft: -wp('10%'),
                                    padding: 20,
                                    fontSize: 20
                                }}>
                                Save as Location
                            </Text>
                            <Text
                                style={{
                                    marginLeft: -wp('5%'),
                                    color: 'grey',
                                    fontSize: 20
                                }}>
                                Getting as Address....
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>

                                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginLeft: -wp('10%') }}>

                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ fontSize: 15 }}>Home</Text>
                                        <RadioButton style={{ top: 10 }} value="first" />
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ fontSize: 15 }}>Work</Text>
                                        <RadioButton value="second" />
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ fontSize: 15 }}>Others</Text>
                                        <RadioButton value="second" />
                                    </View>
                                </View>
                            </RadioButton.Group>
                        </View>
                        <View style={{
                            flexDirection: 'row', marginBottom: 10, justifyContent: "space-evenly",
                            alignItems: "center"
                        }}>
                            <TouchableOpacity style={{
                                alignSelf: 'center',
                                marginHorizontal: 12,
                                backgroundColor: 'grey',
                                height: hp('6%'),
                                width: wp('30%'),
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 10,
                            }}>
                                <Text style={{
                                    color: '#FFFFFF',
                                    fontSize: 18,
                                }}>Save</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                alignSelf: 'center',
                                marginHorizontal: 10,
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
                                }}>Cancel</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </BottomSheet>
        </SafeAreaView >
    );


}


export default HomeScreen;
const mapStyle = [
    { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
    { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
    { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
    {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d59563' }],
    },
    {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d59563' }],
    },
    {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{ color: '#263c3f' }],
    },
    {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#6b9a76' }],
    },
    {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{ color: '#38414e' }],
    },
    {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#212a37' }],
    },
    {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#9ca5b3' }],
    },
    {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{ color: '#746855' }],
    },
    {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#1f2835' }],
    },
    {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#f3d19c' }],
    },
    {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{ color: '#2f3948' }],
    },
    {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d59563' }],
    },
    {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{ color: '#17263c' }],
    },
    {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#515c6d' }],
    },
    {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{ color: '#17263c' }],
    },
];

const styles = StyleSheet.create({
    // container: {
    //     position: 'absolute',
    //     top: 0,
    //     left: 0,
    //     right: 0,
    //     bottom: 0,
    //     alignItems: 'center',
    //     justifyContent: 'flex-end',
    // },
    // mapStyle: {
    //     position: 'absolute',
    //     top: 0,
    //     left: 0,
    //     right: 0,
    //     bottom: 0,
    // },

    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
        ...StyleSheet.absoluteFillObject,
    },
    map: {
        flex: 1,
        ...StyleSheet.absoluteFillObject,
    },

});


