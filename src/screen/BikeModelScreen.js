
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

const BikeModelScreen = (props) => {
    const navigation = useNavigation()
    const route = useRoute()
    const company = route.params.company
    const screen = route.params.screen
    const screen1 = route.params.screen1
    console.log("companyname===>>>>", route.params.company)
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
                    placeholder="Search Car model"
                    placeholderTextColor="grey"
                    autoCapitalize="none"
                    style={{ flex: 1, padding: 0, marginLeft: 10 }}
                />
            </View>



            <ScrollView>

                {screen1 == 'Bike' ?
                    <>
                        <View style={styles.categoryContainer}>
                            <TouchableOpacity
                                style={styles.categoryBtn}
                                onPress={() => { navigation.navigate('FuelTypeScreen', { company: company, model: 'Honda XBlade' }) }
                                }
                            >
                                <View style={styles.categoryIcon}>
                                    <Image
                                        source={{ uri: 'https://media.zigcdn.com/media/model/2020/Jul/honda-xblade-bs6-drum_360x240.jpg' }}
                                        style={{
                                            height: 62,
                                            width: '90%',
                                            resizeMode: 'cover',
                                        }}
                                    />
                                </View>
                                <Text style={styles.categoryBtnTxt}>Honda XBlade</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.categoryBtn}
                                onPress={() => { navigation.navigate('FuelTypeScreen', { company: company, model: 'Honda CD 350' }) }}>
                                <View style={styles.categoryIcon}>
                                    <Image
                                        source={{ uri: 'https://images.financialexpress.com/2020/10/CB350-3.jpg' }}
                                        style={{
                                            height: 62,
                                            width: '90%',
                                            resizeMode: 'cover',
                                        }}
                                    />
                                </View>
                                <Text style={styles.categoryBtnTxt}>Honda CD 350</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.categoryBtn}
                                onPress={() => { navigation.navigate('FuelTypeScreen', { company: company, model: 'Honda Cd 100' }) }}
                            >
                                <View style={styles.categoryIcon}>
                                    <Image
                                        source={{ uri: 'https://www.drivespark.com/bikes-photos/models/750x550/cd-110-dream_1515499823.jpg/3/x.pagespeed.ic.BkcB60aV8Y.jpg' }}
                                        style={{
                                            height: 62,
                                            width: '90%',
                                            resizeMode: 'cover',
                                        }}
                                    />
                                </View>
                                <Text style={styles.categoryBtnTxt}>Honda Cd 100</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.categoryContainer, { marginTop: 10 }]}>
                            <TouchableOpacity style={styles.categoryBtn} onPress={() => { navigation.navigate('FuelTypeScreen', { company: company, model: 'Honda Livo' }) }}>
                                <View style={styles.categoryIcon}>
                                    <Image
                                        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh304ptXeX507UNkrNZu68fo41LFPOc2U969uBKyED1dejEHL3CGoWrHBbnF6fW0OnWig&usqp=CAU' }}
                                        style={{
                                            height: 62,
                                            width: '90%',
                                            // borderRadius: 25,
                                            // resizeMode: 'cover',
                                            // marginTop: wp('4%'),
                                        }}
                                    />
                                </View>
                                <Text style={styles.categoryBtnTxt}>Honda Livo</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.categoryBtn} onPress={() => { navigation.navigate('FuelTypeScreen', { company: company, model: 'Honda Hornet' }) }}>
                                <View style={styles.categoryIcon}>
                                    <Image
                                        source={{
                                            uri: 'https://imgd.aeplcdn.com/476x268/bw/models/honda-hornet-20-standard20200827130131.jpg'
                                        }}
                                        style={{
                                            height: 62,
                                            width: '90%',
                                            resizeMode: 'cover',
                                        }}
                                    />
                                </View>
                                <Text style={styles.categoryBtnTxt}>Honda Hornet</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.categoryBtn} onPress={() => { navigation.navigate('FuelTypeScreen', { company: company, model: 'Honda CD 300R' }) }}>
                                <View style={styles.categoryIcon}>
                                    <Image
                                        source={{ uri: "https://imgd.aeplcdn.com/310x174/bw/models/honda-cb300r-standard20200804232534.jpg?q=75" }}
                                        style={{
                                            height: 62,
                                            width: '90%',
                                            // borderRadius: 25,
                                            // resizeMode: 'cover',
                                            // marginTop: wp('4%'),
                                        }}
                                    />
                                </View>
                                <Text style={styles.categoryBtnTxt}>Honda CD 300R</Text>
                            </TouchableOpacity>

                        </View>
                    </>
                    : null}

                {screen1 == 'rickshaw'
                    ?

                    <View style={styles.categoryContainer}>
                        <TouchableOpacity
                            style={styles.categoryBtn}
                            onPress={() => { navigation.navigate('FuelTypeScreen', { company: company, model: 'Bajaj one' }) }
                            }
                        >
                            <View style={styles.categoryIcon}>
                                <Image
                                    source={{ uri: 'https://commercialvehicleinfo.com/wp-content/uploads/2018/01/Atul-Auto-Rickshaw.jpg' }}
                                    style={{
                                        height: 62,
                                        width: '90%',
                                        resizeMode: 'cover',
                                    }}
                                />
                            </View>
                            <Text style={styles.categoryBtnTxt}>Bajaj one</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.categoryBtn}
                            onPress={() => { navigation.navigate('FuelTypeScreen', { company: company, model: 'Bajaj Two' }) }}>
                            <View style={styles.categoryIcon}>
                                <Image
                                    source={{ uri: 'https://commercialvehicleinfo.com/wp-content/uploads/2018/01/Bajaj-RE-Auto-Rickshaw.jpg' }}
                                    style={{
                                        height: 62,
                                        width: '90%',
                                        resizeMode: 'cover',
                                    }}
                                />
                            </View>
                            <Text style={styles.categoryBtnTxt}>Bajaj Two</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.categoryBtn}
                            onPress={() => { navigation.navigate('FuelTypeScreen', { company: company, model: 'Bajaj Three' }) }}
                        >
                            <View style={styles.categoryIcon}>
                                <Image
                                    source={{ uri: 'https://5.imimg.com/data5/QO/CI/WE/SELLER-6463615/bajaj-re-compact-lpg-500x500.jpg' }}
                                    style={{
                                        height: 62,
                                        width: '90%',
                                        resizeMode: 'cover',
                                    }}
                                />
                            </View>
                            <Text style={styles.categoryBtnTxt}>Bajaj Three</Text>
                        </TouchableOpacity>
                    </View> : null}

                {screen1 == 'truck' ?
                    <View style={styles.categoryContainer}>
                        <TouchableOpacity
                            style={styles.categoryBtn}
                            onPress={() => { navigation.navigate('FuelTypeScreen', { company: company, model: 'Eicher Rv10' }) }
                            }
                        >
                            <View style={styles.categoryIcon}>
                                <Image
                                    source={{ uri: 'https://cdn.shopify.com/s/files/1/2779/4496/products/TB2mBCWaHdvt1JjSZFuXXXG0FXa__78933397.jpg?v=1541820111' }}
                                    style={{
                                        height: 62,
                                        width: '90%',
                                        resizeMode: 'cover',
                                    }}
                                />
                            </View>
                            <Text style={styles.categoryBtnTxt}>Eicher Rv10</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.categoryBtn}
                            onPress={() => { navigation.navigate('FuelTypeScreen', { company: company, model: 'Eicher Rv20' }) }}>
                            <View style={styles.categoryIcon}>
                                <Image
                                    source={{ uri: 'https://cdn.shopify.com/s/files/1/2779/4496/products/DHL_1000x1000_crop_center.jpg?v=1522297775' }}
                                    style={{
                                        height: 62,
                                        width: '90%',
                                        resizeMode: 'cover',
                                    }}
                                />
                            </View>
                            <Text style={styles.categoryBtnTxt}>Eicher Rv20</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.categoryBtn}
                            onPress={() => { navigation.navigate('FuelTypeScreen', { company: company, model: 'Eicher Cv10' }) }}
                        >
                            <View style={styles.categoryIcon}>
                                <Image
                                    source={{ uri: 'https://static.turbosquid.com/Preview/001247/218/B9/yellow-school-bus-monster-truck-model_D.jpg' }}
                                    style={{
                                        height: 62,
                                        width: '90%',
                                        resizeMode: 'cover',
                                    }}
                                />
                            </View>
                            <Text style={styles.categoryBtnTxt}>Eicher Cv10</Text>
                        </TouchableOpacity>
                    </View>
                    : null}


                {screen1 == 'bicycle'
                    ?
                    <View style={styles.categoryContainer}>
                        <TouchableOpacity
                            style={styles.categoryBtn}
                            onPress={() => { navigation.navigate('FuelTypeScreen', { company: company, model: 'Treak Premium' }) }
                            }
                        >
                            <View style={styles.categoryIcon}>
                                <Image
                                    source={{ uri: 'data:image/jpeg;base64,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' }}
                                    style={{
                                        height: 62,
                                        width: '90%',
                                        resizeMode: 'cover',
                                    }}
                                />
                            </View>
                            <Text style={styles.categoryBtnTxt}>Treak Premium </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.categoryBtn}
                            onPress={() => { navigation.navigate('FuelTypeScreen', { company: company, model: 'Treak Black B1' }) }}>
                            <View style={styles.categoryIcon}>
                                <Image
                                    source={{ uri: 'data:image/jpeg;base64,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' }}
                                    style={{
                                        height: 62,
                                        width: '90%',
                                        resizeMode: 'cover',
                                    }}
                                />
                            </View>
                            <Text style={styles.categoryBtnTxt}>Treak Black B1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.categoryBtn}
                            onPress={() => { navigation.navigate('FuelTypeScreen', { company: company, model: 'Treak Silver B1' }) }}
                        >
                            <View style={styles.categoryIcon}>
                                <Image
                                    source={{ uri: 'data:image/jpeg;base64,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' }}
                                    style={{
                                        height: 62,
                                        width: '90%',
                                        resizeMode: 'cover',
                                    }}
                                />
                            </View>
                            <Text style={styles.categoryBtnTxt}>Treak Silver B1</Text>
                        </TouchableOpacity>
                    </View>
                    : null}

                {screen1 == 'bus' ?
                    <View style={styles.categoryContainer}>
                        <TouchableOpacity
                            style={styles.categoryBtn}
                            onPress={() => { navigation.navigate('FuelTypeScreen', { company: company, model: 'Blue-Star b10' }) }
                            }
                        >
                            <View style={styles.categoryIcon}>
                                <Image
                                    source={{ uri: 'data:image/jpeg;base64,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' }}
                                    style={{
                                        height: 62,
                                        width: '90%',
                                        resizeMode: 'cover',
                                    }}
                                />
                            </View>
                            <Text style={styles.categoryBtnTxt}>Blue-Star b10</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.categoryBtn}
                            onPress={() => { navigation.navigate('FuelTypeScreen', { company: company, model: 'Blue-Star b10' }) }}>
                            <View style={styles.categoryIcon}>
                                <Image
                                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Solent_Blue_Line_37_2.JPG/220px-Solent_Blue_Line_37_2.JPG' }}
                                    style={{
                                        height: 62,
                                        width: '90%',
                                        resizeMode: 'cover',
                                    }}
                                />
                            </View>
                            <Text style={styles.categoryBtnTxt}>Blue-Star b10</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.categoryBtn}
                            onPress={() => { navigation.navigate('FuelTypeScreen', { company: company, model: 'Blue-Star b10' }) }}
                        >
                            <View style={styles.categoryIcon}>
                                <Image
                                    source={{ uri: 'data:image/jpeg;base64,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' }}
                                    style={{
                                        height: 62,
                                        width: '90%',
                                        resizeMode: 'cover',
                                    }}
                                />
                            </View>
                            <Text style={styles.categoryBtnTxt}>Blue-Star b10</Text>
                        </TouchableOpacity>
                    </View>
                    : null}
                {/* 
                <View style={[styles.categoryContainer, { marginTop: 10 }]}>
                    <TouchableOpacity style={styles.categoryBtn} onPress={() => { navigation.navigate('FuelTypeScreen', { company: company, model: 'Br-v' }) }}>
                        <View style={styles.categoryIcon}>
                            <Image
                                source={{ uri: "https://cdn.autoportal.com/img/new-cars-gallery/honda/br-v/colors/744c642a5e5cd43a538e8ba4dfbcf815.jpg" }}
                                style={{
                                    height: 62,
                                    width: '90%',
                                    resizeMode: 'cover',
                                }}
                            />
                        </View>
                        <Text style={styles.categoryBtnTxt}>  BR-V</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryBtn} onPress={() => { navigation.navigate('FuelTypeScreen', { company: company, model: 'City-zx' }) }}>
                        <View style={styles.categoryIcon}>
                            <Image
                                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLU08VPQZoFG0LITLGIU6O7mia-DVBqif3jA&usqp=CAU' }}
                                style={{
                                    height: 62,
                                    width: '90%',
                                    resizeMode: 'cover',
                                }}
                            />
                        </View>
                        <Text style={styles.categoryBtnTxt}>City Zx</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryBtn} onPress={() => { navigation.navigate('FuelTypeScreen', { company: company, model: 'Nsx' }) }}>
                        <View style={styles.categoryIcon}>
                            <Image
                                source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKLU_GSbd-9xgbh9NCZBrOaBZZhTxkP3DrBg&usqp=CAU" }}
                                style={{
                                    height: 62,
                                    width: '90%',
                                    resizeMode: 'cover',
                                }}
                            />
                        </View>
                        <Text style={styles.categoryBtnTxt}>NSX</Text>
                    </TouchableOpacity>

                </View> */}
                {/* <View style={[styles.categoryContainer, { marginTop: 10 }]}>
                            <TouchableOpacity style={styles.categoryBtn} onPress={() => { }}>
                                <View style={styles.categoryIcon}>
                                    <Image
                                        source={{ uri: 'https://w7.pngwing.com/pngs/527/831/png-transparent-logo-car-brand-symbol-kia-motors-car-emblem-text-trademark.png' }}
                                        style={{
                                            height: 60,
                                            width: 110,
                                            // borderRadius: 25,
                                            resizeMode: 'cover',
                                            // marginTop: wp('4%'),
                                        }}
                                    />
                                </View>
                                <Text style={styles.categoryBtnTxt}>  KIA</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.categoryBtn} onPress={() => { }}>
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
                            <TouchableOpacity style={styles.categoryBtn} onPress={() => { }}>
                                <View style={styles.categoryIcon}>
                                    <Image
                                        source={{ uri: 'data:image/png;base64,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' }}
                                        style={{
                                            height: 65,
                                            width: 90,
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
                            <TouchableOpacity style={styles.categoryBtn} onPress={() => { }}>
                                <View style={styles.categoryIcon}>
                                    <Image
                                        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlWxDdY43fy12E_KJmoeIckcwTcr6mR--MjqlwpJc7OCZmY_1OeZg88khuKbj3WwCAvWo&usqp=CAU' }}
                                        style={{
                                            height: 60,
                                            width: 80,
                                            // borderRadius: 25,
                                            resizeMode: 'cover',
                                            // marginTop: wp('4%'),
                                        }}
                                    />
                                </View>
                                <Text style={styles.categoryBtnTxt}>  Jaguar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.categoryBtn} onPress={() => { }}>
                                <View style={styles.categoryIcon}>
                                    <Image
                                        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXjWGMFtULhJVTAMrlzUsiG3QkXUC93FXlHJHkS5nDB09LVbJYcbg6DObIsh2nRJZ3mVE&usqp=CAU' }}
                                        style={{
                                            height: 80,
                                            width: 90,
                                            // borderRadius: 25,
                                            resizeMode: 'cover',
                                            // marginTop: wp('4%'),
                                        }}
                                    />
                                </View>
                                <Text style={styles.categoryBtnTxt}>Acura</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.categoryBtn} onPress={() => { }}>
                                <View style={styles.categoryIcon}>
                                    <Image
                                        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpo-pPMA4-yrURAa8-qK1Dfmn_Z3h3SjB84srhuufx8tXL9vIHEfEzS5aZRBwTRLCy1Nc&usqp=CAU' }}
                                        style={{
                                            height: 80,
                                            width: 120,
                                            // borderRadius: 25,
                                            resizeMode: 'cover',
                                            // marginTop: wp('4%'),
                                        }}
                                    />
                                </View>
                                <Text style={styles.categoryBtnTxt}>Chevrolet</Text>
                            </TouchableOpacity> */}

                {/* </View> */}

            </ScrollView>
        </View >
    );
};

export default BikeModelScreen;

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