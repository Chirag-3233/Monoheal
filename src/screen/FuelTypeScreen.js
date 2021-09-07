
import React, { useContext, useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    FlatList,
    StyleSheet,
    ScrollView
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { CommonActions, useNavigation, useRoute } from '@react-navigation/native';
const FuelTypeScreen = (props) => {
    const route = useRoute()
    const screen = route.params.screen
    const model = route.params.model
    const company = route.params.company
    console.log("model===>>>>", model)
    console.log("companypass===>>>>", company)
    const navigation = useNavigation()
    const [selectedItem, setSelectedItem] = useState('');

    return (
        <View>
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
                    placeholder="Search Fuel Type"
                    placeholderTextColor="grey"
                    autoCapitalize="none"
                    style={{ flex: 1, padding: 0, marginLeft: 10 }}
                />
            </View>

            <ScrollView>


                {screen == 'tesla' ?
                    <View style={styles.categoryContainer}>
                        <TouchableOpacity
                            style={styles.categoryBtn}
                            onPress={() => { navigation.navigate('AddGarageService', { fuel: 'Electric', model: model, company: company }) }
                            }
                        >
                            <View style={styles.categoryIcon}>
                                <Image
                                    source={require('../images/electricity.jpg')}
                                    style={{
                                        height: 90,
                                        width: 90,
                                        resizeMode: 'cover',
                                    }}
                                />
                            </View>
                            <Text style={styles.categoryBtnTxt}>Electric</Text>
                        </TouchableOpacity>
                    </View>
                    :
                    <>
                        <View style={styles.categoryContainer}>
                            <TouchableOpacity
                                style={styles.categoryBtn}
                                onPress={() => { navigation.navigate('AddGarageService', { fuel: 'Petrol', model: model, company: company }) }
                                }
                            >
                                <View style={styles.categoryIcon}>
                                    <Image
                                        source={require('../images/Petrol.jpg')}
                                        style={{
                                            height: 90,
                                            width: '90%',
                                            resizeMode: 'cover',
                                        }}
                                    />
                                </View>
                                <Text style={styles.categoryBtnTxt}>Petrol</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.categoryBtn}
                                onPress={() => { navigation.navigate('AddGarageService', { fuel: 'CNG', model: model, company: company }) }}>
                                <View style={styles.categoryIcon}>
                                    <Image
                                        source={require('../images/CNG.jpg')}
                                        style={{
                                            height: wp('18%'),
                                            width: wp('25%'),
                                            resizeMode: 'cover',
                                        }}
                                    />
                                </View>
                                <Text style={styles.categoryBtnTxt}>CNG</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.categoryBtn}
                                onPress={() => { navigation.navigate('AddGarageService', { fuel: 'Diesel', model: model, company: company }) }}
                            >
                                <View style={styles.categoryIcon}>
                                    <Image
                                        source={require('../images/Diesel.jpg')}
                                        style={{
                                            height: 80,
                                            width: 80,
                                            resizeMode: 'cover',
                                        }}
                                    />
                                </View>
                                <Text style={styles.categoryBtnTxt}>Diesel</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                }
            </ScrollView>
        </View>
    );
};

export default FuelTypeScreen;

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