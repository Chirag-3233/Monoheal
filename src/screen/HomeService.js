
import React, { useContext, useState } from 'react';
import {
    View,
    Text,
    Dimensions,
    TouchableOpacity,
    Image,
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
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { CommonActions, useNavigation, useRoute } from '@react-navigation/native';


const FirstRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#fff' }} />
);

const SecondRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#fff' }} />
);
const ThirdRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#fff' }} />
);
const initialLayout = { width: Dimensions.get('window').width };
// const renderScene = SceneMap({
//     first: FirstRoute,
//     second: SecondRoute,
//     third: ThirdRoute
// });
export default function HomeService() {

    const [index, setIndex] = useState(0);
    const [notes, setnotes] = useState('');
    const [routes] = useState([
        { key: 'first', title: 'Plumber' },
        { key: 'second', title: 'Electricity' },
        { key: 'third', title: 'Painter' },
    ]);
    const _handleIndexChange = (index) => {
        setIndex(index)

    }
    const Plumber = () => {

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

                    <View style={styles.categoryContainer}>
                        <TouchableOpacity
                            style={styles.categoryBtn}
                            onPress={() => { navigation.navigate('FuelTypeScreen', { company: company, screen: 'tesla', model: 'Tesla Model M', screen: 'tesla' }) }
                            }
                        >
                            <View style={styles.categoryIcon}>
                                <Image
                                    source={{ uri: 'https://image.shutterstock.com/image-vector/car-service-logo-260nw-1030619092.jpg' }}
                                    style={{
                                        height: 62,
                                        width: '90%',
                                        resizeMode: 'cover',
                                    }}
                                />
                            </View>
                            <Text style={[styles.categoryBtnTxt, { width: wp('32%'), alignSelf: 'center' }]}>Digital Meter Repair</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.categoryBtn}
                            onPress={() => navigation.navigate('FuelTypeScreen', { company: company, model: 'Tesla Model S', screen: 'tesla' })}>
                            <View style={styles.categoryIcon}>
                                <Image
                                    source={{ uri: 'https://image.shutterstock.com/image-vector/car-service-logo-260nw-1030619092.jpg' }}
                                    style={{
                                        height: 62,
                                        width: '90%',
                                        resizeMode: 'cover',
                                    }}
                                />
                            </View>
                            <Text style={styles.categoryBtnTxt}>Clutch</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.categoryBtn}
                            onPress={() => navigation.navigate('FuelTypeScreen', { company: company, model: 'Tesla Model B', screen: 'tesla' })}
                        >
                            <View style={styles.categoryIcon}>
                                <Image
                                    source={{ uri: 'https://image.shutterstock.com/image-vector/car-service-logo-260nw-1030619092.jpg' }}
                                    style={{
                                        height: 62,
                                        width: '90%',
                                        resizeMode: 'cover',
                                    }}
                                />
                            </View>
                            <Text style={styles.categoryBtnTxt}>Break</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={[styles.categoryContainer, { marginTop: 10 }]}>
                        <TouchableOpacity style={styles.categoryBtn}
                            onPress={() => navigation.navigate('FuelTypeScreen', { company: company, model: 'Tesla Model B', screen: 'tesla' })}
                        >
                            <View style={styles.categoryIcon}>
                                <Image
                                    source={{ uri: 'https://image.shutterstock.com/image-vector/car-service-logo-260nw-1030619092.jpg' }}
                                    style={{
                                        height: 62,
                                        width: '90%',
                                        resizeMode: 'cover',
                                    }}
                                />
                            </View>
                            <Text style={styles.categoryBtnTxt}>Accelator</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.categoryBtn}
                            onPress={() => navigation.navigate('FuelTypeScreen', { company: company, model: 'Tesla Model B', screen: 'tesla' })}
                        >
                            <View style={styles.categoryIcon}>
                                <Image
                                    source={{ uri: 'https://image.shutterstock.com/image-vector/car-service-logo-260nw-1030619092.jpg' }}
                                    style={{
                                        height: 62,
                                        width: '90%',
                                        resizeMode: 'cover',
                                    }}
                                />
                            </View>
                            <Text style={styles.categoryBtnTxt}>AC</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.categoryBtn}
                            onPress={() => navigation.navigate('FuelTypeScreen', { company: company, model: 'Tesla Model B', screen: 'tesla' })}
                        >
                            <View style={styles.categoryIcon}>
                                <Image
                                    source={{ uri: 'https://image.shutterstock.com/image-vector/car-service-logo-260nw-1030619092.jpg' }}
                                    style={{
                                        height: 62,
                                        width: '90%',
                                        resizeMode: 'cover',
                                    }}
                                />
                            </View>
                            <Text style={styles.categoryBtnTxt}>Lock</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={[styles.categoryContainer, { marginTop: 10 }]}>
                        <TouchableOpacity style={styles.categoryBtn}
                            onPress={() => navigation.navigate('FuelTypeScreen', { company: company, model: 'Tesla Model B', screen: 'tesla' })}
                        >
                            <View style={styles.categoryIcon}>
                                <Image
                                    source={{ uri: 'https://image.shutterstock.com/image-vector/car-service-logo-260nw-1030619092.jpg' }}
                                    style={{
                                        height: 62,
                                        width: '90%',
                                        resizeMode: 'cover',
                                    }}
                                />
                            </View>
                            <Text style={styles.categoryBtnTxt}>Engine</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.categoryBtn}
                            onPress={() => navigation.navigate('FuelTypeScreen', { company: company, model: 'Tesla Model B', screen: 'tesla' })}
                        >
                            <View style={styles.categoryIcon}>
                                <Image
                                    source={{ uri: 'https://image.shutterstock.com/image-vector/car-service-logo-260nw-1030619092.jpg' }}
                                    style={{
                                        height: 62,
                                        width: '90%',
                                        resizeMode: 'cover',
                                    }}
                                />
                            </View>
                            <Text style={styles.categoryBtnTxt}>Puntcure</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.categoryBtn}
                            onPress={() => navigation.navigate('FuelTypeScreen', { company: company, model: 'Tesla Model B', screen: 'tesla' })}
                        >
                            <View style={styles.categoryIcon}>
                                <Image
                                    source={{ uri: 'https://image.shutterstock.com/image-vector/car-service-logo-260nw-1030619092.jpg' }}
                                    style={{
                                        height: 62,
                                        width: '90%',
                                        resizeMode: 'cover',
                                    }}
                                />
                            </View>
                            <Text style={styles.categoryBtnTxt}>Denting & Painting</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={[styles.categoryContainer, { marginTop: 10 }]}>
                        <TouchableOpacity style={styles.categoryBtn}
                            onPress={() => navigation.navigate('FuelTypeScreen', { company: company, model: 'Tesla Model B', screen: 'tesla' })}
                        >
                            <View style={styles.categoryIcon}>
                                <Image
                                    source={{ uri: 'https://image.shutterstock.com/image-vector/car-service-logo-260nw-1030619092.jpg' }}
                                    style={{
                                        height: 62,
                                        width: '90%',
                                        resizeMode: 'cover',
                                    }}
                                />
                            </View>
                            <Text style={styles.categoryBtnTxt}>Lights</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.categoryBtn}
                            onPress={() => navigation.navigate('FuelTypeScreen', { company: company, model: 'Tesla Model B', screen: 'tesla' })}
                        >
                            <View style={styles.categoryIcon}>
                                <Image
                                    source={{ uri: 'https://image.shutterstock.com/image-vector/car-service-logo-260nw-1030619092.jpg' }}
                                    style={{
                                        height: 62,
                                        width: '90%',
                                        resizeMode: 'cover',
                                    }}
                                />
                            </View>
                            <Text style={styles.categoryBtnTxt}>Battery</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.categoryBtn}
                            onPress={() => navigation.navigate('FuelTypeScreen', { company: company, model: 'Tesla Model B', screen: 'tesla' })}
                        >
                            <View style={styles.categoryIcon}>
                                <Image
                                    source={{ uri: 'https://image.shutterstock.com/image-vector/car-service-logo-260nw-1030619092.jpg' }}
                                    style={{
                                        height: 62,
                                        width: '90%',
                                        resizeMode: 'cover',
                                    }}
                                />
                            </View>
                            <Text style={styles.categoryBtnTxt}>Washing</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={{ flexDirection: 'column', marginLeft: wp('2%'), marginTop: wp('5%'), alignItems: 'center' }}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', alignSelf: 'flex-start', marginLeft: wp('4%') }}>Notes</Text>
                        <TextInput
                            style={{
                                borderColor: '#0d0d0d',
                                borderRadius: 6,
                                justifyContent: 'flex-start',
                                borderWidth: 0.5,
                                backgroundColor: '#f1f3f6',
                                height: 80,
                                width: '90%'
                            }}
                            placeholder={'*Notes'}
                            placeholderTextColor={'grey'}
                            onChangeText={(text) => setnotes(text)}
                            value={notes}
                            numberOfLines={10}
                            multiline={true}
                        />
                    </View>

                    <View style={{ flexDirection: 'column', justifyContent: 'space-around', marginTop: wp('2%') }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', alignSelf: 'flex-start', marginLeft: wp('6%') }}>Pics</Text>
                        <View style={{ flexDirection: 'row', marginLeft: wp('6%'), justifyContent: 'space-around' }}>
                            <Ionicons name='ios-add-circle-outline' color={colors.primary_dark} size={50} />
                            <Ionicons name='ios-add-circle-outline' color={colors.primary_dark} size={50} />
                            <Ionicons name='ios-add-circle-outline' color={colors.primary_dark} size={50} />
                        </View>
                    </View>
                    <View style={{ alignSelf: 'flex-end', marginRight: wp('4%'), marginBottom: wp('6%'), marginTop: wp("4%") }}>
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
                </View>
            </ScrollView>
        )
    }
    const Electricity = () => {

        return (
            <View>
                <Text>Inprogress</Text>
            </View>
        )
    }

    const Painter = () => {

        return (
            <View>
                <Text>Inprogress</Text>
            </View>
        )
    }


    return (
        <View style={{ flex: 1, marginTop: -25 }}>
            <TabView
                navigationState={{ index, routes }}
                style={styles.container}
                renderScene={SceneMap({
                    first: Plumber,
                    second: Electricity,
                    third: Painter

                })}
                onIndexChange={_handleIndexChange}
                initialLayout={initialLayout}
                renderTabBar={props =>
                    <TabBar
                        {...props}
                        indicatorStyle={{ backgroundColor: colors.primary_dark, marginLeft: 0 }}
                        style={{ backgroundColor: 'white' }}
                        tabStyle={{ minHeight: 30 }} // here
                        renderLabel={({ route, focused, color }) => (
                            <Text style={{ color: colors.primary_dark, fontSize: 16, margin: 8 }}>
                                {route.title}
                            </Text>
                        )}
                    />
                }
            />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
    },
    scene: {
        flex: 1,
    },
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

