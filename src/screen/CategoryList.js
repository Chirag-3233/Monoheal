import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TextInput,
    StatusBar,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../helpers/colors';
import Swiper from 'react-native-swiper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const CategoryList = ({ navigation }) => {
    const theme = useTheme();

    return (
        <ScrollView style={styles.container}>
            <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
            <View style={styles.sliderContainer}>
                <Swiper
                    autoplay
                    horizontal={false}
                    height={200}
                    activeDotColor="#FF6347">
                    <View style={styles.slide}>
                        <Image
                            source={require('../images/car1.png')}
                            resizeMode="cover"
                            style={styles.sliderImage}
                        />
                    </View>
                    <View style={styles.slide}>
                        <Image
                            source={require('../images/car4.png')}
                            resizeMode="cover"
                            style={styles.sliderImage}
                        />
                    </View>
                    <View style={styles.slide}>
                        <Image
                            source={require('../images/car3.png')}
                            resizeMode="cover"
                            style={styles.sliderImage}
                        />
                    </View>
                </Swiper>
            </View>

            <View style={styles.categoryContainer}>
                <TouchableOpacity
                    style={styles.categoryBtn}
                    onPress={() =>
                        navigation.navigate('AddGarageService', { car: "Car" })
                    }
                >
                    <View style={styles.categoryIcon}>
                        <Ionicons name="ios-car" size={35} color="#FF6347" />
                    </View>
                    <Text style={styles.categoryBtnTxt}>Car</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.categoryBtn}
                    onPress={() =>
                        navigation.navigate('AddGarageService', { car: "Bike" })
                    }
                >
                    <View style={styles.categoryIcon}>
                        <MaterialCommunityIcons name="motorbike" size={35} color="#FF6347" />
                    </View>
                    <Text style={styles.categoryBtnTxt}>Bike</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryBtn}
                    onPress={() =>
                        navigation.navigate('AddGarageService', { car: "Rickshaw" })
                    }
                >
                    <View style={styles.categoryIcon}>
                        <MaterialIcons name="electric-rickshaw" size={35} color="#FF6347" />
                    </View>
                    <Text style={styles.categoryBtnTxt}>Rickshaw</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.categoryContainer, { marginTop: 10 }]}>
                <TouchableOpacity style={styles.categoryBtn}
                    onPress={() =>
                        navigation.navigate('AddGarageService', { car: "Truck" })
                    }
                >
                    <View style={styles.categoryIcon}>
                        <MaterialCommunityIcons name="truck" size={35} color="#FF6347" />
                    </View>
                    <Text style={styles.categoryBtnTxt}>Truck</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryBtn}
                    onPress={() =>
                        navigation.navigate('AddGarageService', { car: "Bicycle" })
                    }
                >
                    <View style={styles.categoryIcon}>
                        <Ionicons name="ios-bicycle" size={35} color="#FF6347" />
                    </View>
                    <Text style={styles.categoryBtnTxt}>Bicycle</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryBtn}
                    onPress={() =>
                        navigation.navigate('AddGarageService', { car: "Bus" })
                    }
                >
                    <View style={styles.categoryIcon}>
                        <Ionicons name="ios-bus" size={35} color="#FF6347" />
                    </View>
                    <Text style={styles.categoryBtnTxt}>Bus</Text>
                </TouchableOpacity>

            </View>
            {/* <View style={[styles.categoryContainer, { marginTop: 10 }]}>
                <TouchableOpacity style={styles.categoryBtn} onPress={() => { }}>
                    <View style={styles.categoryIcon}>
                        <MaterialIcons name="expand-more" size={35} color="#FF6347" />
                    </View>
                    <Text style={styles.categoryBtnTxt}>Show more</Text>
                </TouchableOpacity>
            </View> */}

        </ScrollView>
    );
};

export default CategoryList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    sliderContainer: {
        height: 200,
        width: '90%',
        marginTop: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
    },

    wrapper: {},

    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderRadius: 8,
    },
    sliderImage: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
    },
    categoryContainer: {
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',
        marginTop: 25,
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
        width: 70,
        height: 70,
        backgroundColor: '#fdeae7' /* '#FF6347' */,
        borderRadius: 50,
    },
    categoryBtnTxt: {
        alignSelf: 'center',
        marginTop: 5,
        color: '#de4f35',
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