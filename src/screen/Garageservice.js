
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
const Garageservice = (props) => {
    const navigation = useNavigation()
    const route = useRoute()
    // const { navigate } = props.navigation;
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
                    placeholder="Search Car Brand"
                    placeholderTextColor="grey"
                    autoCapitalize="none"
                    style={{ flex: 1, padding: 0, marginLeft: 10 }}
                />
            </View>

            <ScrollView>
                <View style={styles.categoryContainer}>
                    <TouchableOpacity
                        style={styles.categoryBtn}
                        onPress={() => { navigation.navigate('ModelScreen', { company: 'Tesla', screen: 'tesla' }) }
                        }
                    >
                        <View style={styles.categoryIcon}>
                            <Image
                                source={require('../images/cl4.png')}
                                style={{
                                    height: 80,
                                    width: 80,
                                    // borderRadius: 25,
                                    resizeMode: 'cover',
                                    // marginTop: wp('4%'),
                                }}
                            />
                        </View>
                        <Text style={styles.categoryBtnTxt}>Tesla</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.categoryBtn}
                        onPress={() => navigation.navigate('ModelScreen', { company: 'Honda city' })}>
                        <View style={styles.categoryIcon}>
                            <Image
                                source={{ uri: 'https://e7.pngegg.com/pngimages/751/294/png-clipart-honda-logo-car-honda-motor-company-accessories-shops-compact-car-angle.png' }}
                                style={{
                                    height: 62,
                                    width: '90%',
                                    resizeMode: 'cover',
                                }}
                            />

                        </View>
                        <Text style={styles.categoryBtnTxt}>Honda City</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryBtn}
                        onPress={() => navigation.navigate('AddGarageService', { company: 'Hyudai' })}
                    >
                        <View style={styles.categoryIcon}>
                            <Image
                                source={require('../images/logo/hyudai.jpg')}
                                style={{
                                    height: 62,
                                    width: '90%',
                                    resizeMode: 'cover',

                                }}
                            />
                        </View>
                        <Text style={styles.categoryBtnTxt}>Hyudai</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.categoryContainer, { marginTop: 10 }]}>
                    <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('AddGarageService', { company: 'Tata Motors' })}>
                        <View style={styles.categoryIcon}>
                            <Image
                                source={require('../images/logo/tata.png')}
                                style={{
                                    height: 62,
                                    width: '90%',
                                    // borderRadius: 25,
                                    // resizeMode: 'cover',
                                    // marginTop: wp('4%'),
                                }}
                            />
                        </View>
                        <Text style={styles.categoryBtnTxt}>Tata Motors</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('AddGarageService', { company: 'Maruti Suzuki' })}>
                        <View style={styles.categoryIcon}>
                            <Image
                                source={require('../images/cl5.png')}
                                style={{
                                    height: 62,
                                    width: '90%',
                                    // borderRadius: 25,
                                    resizeMode: 'cover',
                                    // marginTop: wp('4%'),
                                }}
                            />
                        </View>
                        <Text style={styles.categoryBtnTxt}>Maruti Suzuki</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('AddGarageService', { company: 'Nissan' })}>
                        <View style={styles.categoryIcon}>
                            <Image
                                source={require('../images/logo/nissan.png')}
                                style={{
                                    height: 90,
                                    width: '90%',
                                    // borderRadius: 25,
                                    // resizeMode: 'cover',
                                    // marginTop: wp('4%'),
                                }}
                            />
                        </View>
                        <Text style={styles.categoryBtnTxt}>Nissan</Text>
                    </TouchableOpacity>

                </View>
                <View style={[styles.categoryContainer, { marginTop: 10 }]}>
                    <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('AddGarageService', { company: 'Volkswagen' })}>
                        <View style={styles.categoryIcon}>
                            <Image
                                source={require('../images/logo/volk.png')}
                                style={{
                                    height: 90,
                                    width: '90%',
                                    // borderRadius: 25,
                                    resizeMode: 'cover',
                                    // marginTop: wp('4%'),
                                }}
                            />
                        </View>
                        <Text style={styles.categoryBtnTxt}>  Volkswagen</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('AddGarageService', { company: 'Ford' })}>
                        <View style={styles.categoryIcon}>
                            <Image
                                source={require('../images/logo/ford.png')}
                                style={{
                                    height: 90,
                                    width: '90%',
                                    // borderRadius: 25,
                                    resizeMode: 'cover',
                                    // marginTop: wp('4%'),
                                }}
                            />
                        </View>
                        <Text style={styles.categoryBtnTxt}>Ford</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('AddGarageService', { company: 'BMW' })}>
                        <View style={styles.categoryIcon}>
                            <Image
                                source={require('../images/logo/bmw.jpg')}
                                style={{
                                    height: 90,
                                    width: '90%',
                                    // borderRadius: 25,
                                    resizeMode: 'cover',
                                    // marginTop: wp('4%'),
                                }}
                            />
                        </View>
                        <Text style={styles.categoryBtnTxt}>BMW</Text>
                    </TouchableOpacity>

                </View>
                <View style={[styles.categoryContainer, { marginTop: 10 }]}>
                    <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('AddGarageService', { company: 'KIA' })}>
                        <View style={styles.categoryIcon}>
                            <Image
                                source={require('../images/logo/kia.png')}
                                style={{
                                    height: 50,
                                    width: '90%',
                                    // borderRadius: 25,
                                    resizeMode: 'cover',
                                    // marginTop: wp('4%'),
                                }}
                            />
                        </View>
                        <Text style={styles.categoryBtnTxt}>  KIA</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('AddGarageService', { company: 'Audi' })}>
                        <View style={styles.categoryIcon}>
                            <Image
                                source={{ uri: 'https://brandslogo.net/wp-content/uploads/2013/07/audi-company-vector-logo-400x400.png' }}
                                style={{
                                    height: 80,
                                    width: 90,
                                    // borderRadius: 25,
                                    resizeMode: 'cover',
                                    // marginTop: wp('4%'),
                                }}
                            />
                        </View>
                        <Text style={styles.categoryBtnTxt}>Audi</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('AddGarageService', { company: 'Mahindra' })}>
                        <View style={styles.categoryIcon}>
                            <Image
                                source={require('../images/logo/mahindra.png')}
                                style={{
                                    height: 60,
                                    width: '90%',
                                    // borderRadius: 25,
                                    resizeMode: 'cover',
                                    // marginTop: wp('4%'),
                                }}
                            />
                        </View>
                        <Text style={styles.categoryBtnTxt}>Mahindra</Text>
                    </TouchableOpacity>

                </View>
                <View style={[styles.categoryContainer, { marginTop: 10 }]}>
                    <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('AddGarageService', { company: 'Jaguar' })}>
                        <View style={styles.categoryIcon}>
                            <Image
                                source={require('../images/logo/jaguar.png')}
                                style={{
                                    height: 60,
                                    width: '90%',
                                    // borderRadius: 25,
                                    resizeMode: 'cover',
                                    // marginTop: wp('4%'),
                                }}
                            />
                        </View>
                        <Text style={styles.categoryBtnTxt}>  Jaguar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('AddGarageService', { company: 'Acura' })}>
                        <View style={styles.categoryIcon}>
                            <Image
                                source={require('../images/logo/acura.png')}
                                style={{
                                    height: 90,
                                    width: '90%',
                                    // borderRadius: 25,
                                    resizeMode: 'cover',
                                    // marginTop: wp('4%'),
                                }}
                            />
                        </View>
                        <Text style={styles.categoryBtnTxt}>Acura</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('AddGarageService', { company: 'Chevrolet' })}>
                        <View style={styles.categoryIcon}>
                            <Image
                                source={require('../images/logo/chevrolet.jpg')}
                                style={{
                                    height: 60,
                                    width: '90%',
                                    // borderRadius: 25,
                                    resizeMode: 'cover',
                                    // marginTop: wp('4%'),
                                }}
                            />
                        </View>
                        <Text style={styles.categoryBtnTxt}>Chevrolet</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </View>
    );
};

export default Garageservice;

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