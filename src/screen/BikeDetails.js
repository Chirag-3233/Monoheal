
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
const BikeDetails = (props) => {
    const navigation = useNavigation()
    const route = useRoute()
    const screen = route.params.screen
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

                {screen == 'Bike' ?
                    <>
                        <View style={styles.categoryContainer}>
                            <TouchableOpacity
                                style={styles.categoryBtn}
                                onPress={() => { navigation.navigate('BikeModel', { company: 'Honda', screen1: 'Bike' }) }
                                }
                            >
                                <View style={styles.categoryIcon}>
                                    <Image
                                        source={{ uri: 'https://cdn-0.motorcycle-logos.com/wp-content/uploads/2016/10/Honda-motorcycle-logo.png' }}
                                        style={{
                                            height: 62,
                                            width: '90%',
                                            // borderRadius: 25,
                                            resizeMode: 'cover',
                                            // marginTop: wp('4%'),
                                        }}
                                    />
                                </View>
                                <Text style={styles.categoryBtnTxt}>Honda</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.categoryBtn}
                            // onPress={() => navigation.navigate('BikeModel', { company: 'KTM', screen1: 'Bike' })}
                            >
                                <View style={styles.categoryIcon}>
                                    <Image
                                        source={{ uri: 'https://i.pinimg.com/originals/8b/10/76/8b10761fdc5fd6cb0b112a9579c11e85.png' }}
                                        style={{
                                            height: 55,
                                            width: '90%',
                                            // borderRadius: 25,
                                            resizeMode: 'cover',
                                            // marginTop: wp('4%'),
                                        }}
                                    />
                                </View>
                                <Text style={styles.categoryBtnTxt}>KTM</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.categoryBtn}
                            // onPress={() => navigation.navigate('BikeModel', { company: 'Yamaha', screen1: 'Bike' })}
                            >
                                <View style={styles.categoryIcon}>
                                    <Image
                                        source={{ uri: 'data:image/jpeg;base64,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' }}
                                        style={{
                                            height: 80,
                                            width: 80,
                                            // borderRadius: 25,
                                            resizeMode: 'cover',
                                            // marginTop: wp('4%'),
                                        }}
                                    />
                                </View>
                                <Text style={styles.categoryBtnTxt}>Yamaha</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.categoryContainer, { marginTop: 10 }]}>
                            <TouchableOpacity style={styles.categoryBtn}
                            // onPress={() => navigation.navigate('ModelScreen', { screen1: 'Bike', company: 'Suzuki' })}
                            >
                                <View style={styles.categoryIcon}>
                                    <Image
                                        source={require('../images/logo/suzuki.png')}
                                        style={{
                                            height: 80,
                                            width: '90%',
                                            // borderRadius: 25,
                                            // resizeMode: 'cover',
                                            // marginTop: wp('4%'),
                                        }}
                                    />
                                </View>
                                <Text style={styles.categoryBtnTxt}>Suzuki</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.categoryBtn}
                            // onPress={() => navigation.navigate('BikeModel', { screen1: 'Bike', company: 'Tvs' })}
                            >
                                <View style={styles.categoryIcon}>
                                    <Image
                                        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsW0yAtBEI9Cwv-TLZtmkJS6Xpta_XIk7TWQ&usqp=CAU' }}
                                        style={{
                                            height: 60,
                                            width: '100%',
                                            // borderRadius: 25,
                                            resizeMode: 'cover',
                                            // marginTop: wp('4%'),
                                        }}
                                    />
                                </View>
                                <Text style={styles.categoryBtnTxt}>TVS</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.categoryBtn}
                            // onPress={() => navigation.navigate('BikeModel', { screen1: 'Bike', company: 'Kawasaki' })}
                            >
                                <View style={styles.categoryIcon}>
                                    <Image
                                        source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaqpgB77IEhsoOKkXaf34tE5SeKTyQRG-MjQ&usqp=CAU" }}
                                        style={{
                                            height: 60,
                                            width: '100%',
                                            // borderRadius: 25,
                                            // resizeMode: 'cover',
                                            // marginTop: wp('4%'),
                                        }}
                                    />
                                </View>
                                <Text style={styles.categoryBtnTxt}>Kawasaki</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={[styles.categoryContainer, { marginTop: 10 }]}>
                            <TouchableOpacity style={styles.categoryBtn}
                            // onPress={() => navigation.navigate('BikeModel', { screen1: 'Bike', company: 'RoyaleEnfield' })}
                            >
                                <View style={styles.categoryIcon}>
                                    <Image
                                        source={{ uri: "https://apksshare.com/wp-content/uploads/2021/06/Royal-Enfield-App-APK-MOD-Premium-Download-6.4.png" }}
                                        style={{
                                            height: 80,
                                            width: 80,
                                            // borderRadius: 25,
                                            resizeMode: 'cover',
                                            // marginTop: wp('4%'),
                                        }}
                                    />
                                </View>
                                <Text style={styles.categoryBtnTxt}>  Royal Enfield</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.categoryBtn}
                            // onPress={() => navigation.navigate('BikeModel', { screen1: 'Bike', company: 'Hero' })}
                            >
                                <View style={styles.categoryIcon}>
                                    <Image
                                        source={{ uri: 'https://etimg.etb2bimg.com/thumb/msid-62756753,width-1200,resizemode-4/.jpg' }}
                                        style={{
                                            height: 80,
                                            width: 80,
                                            // borderRadius: 25,
                                            resizeMode: 'cover',
                                            // marginTop: wp('4%'),
                                        }}
                                    />
                                </View>
                                <Text style={styles.categoryBtnTxt}>Hero</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.categoryBtn}
                            // onPress={() => navigation.navigate('BikeModel', { company: 'BMW', screen1: 'Bike' })}
                            >
                                <View style={styles.categoryIcon}>
                                    <Image
                                        source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-REbKwaWBIiOR_irRYR8lOlyK3WviyerOPw&usqp=CAU" }}
                                        style={{
                                            height: 80,
                                            width: 90,
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
                            <TouchableOpacity style={styles.categoryBtn}
                            // onPress={() => navigation.navigate('BikeModel', { screen1: 'Bike', company: 'Bajaj' })}
                            >
                                <View style={styles.categoryIcon}>
                                    <Image
                                        source={require('../images/logo/bajaj.png')}
                                        style={{
                                            height: 80,
                                            width: 65,
                                            // borderRadius: 25,
                                            resizeMode: 'cover',
                                            // marginTop: wp('4%'),
                                        }}
                                    />
                                </View>
                                <Text style={styles.categoryBtnTxt}>Bajaj</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.categoryBtn}
                            // onPress={() => navigation.navigate('BikeModel', { screen1: 'Bike', company: 'Aprilia' })}
                            >
                                <View style={styles.categoryIcon}>
                                    <Image
                                        source={require('../images/logo/Aprilia.jpg')}
                                        style={{
                                            height: 60,
                                            width: 80,
                                            // borderRadius: 25,
                                            resizeMode: 'cover',
                                            // marginTop: wp('4%'),
                                        }}
                                    />
                                </View>
                                <Text style={styles.categoryBtnTxt}>Aprilia</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.categoryBtn}
                            // onPress={() => navigation.navigate('BikeModel', { company: 'BMW', screen1: 'Ducati' })}
                            >
                                <View style={styles.categoryIcon}>
                                    <Image
                                        source={require('../images/logo/Ducati.jpg')}
                                        style={{
                                            height: 80,
                                            width: 90,
                                            // borderRadius: 25,
                                            resizeMode: 'cover',
                                            // marginTop: wp('4%'),
                                        }}
                                    />
                                </View>
                                <Text style={styles.categoryBtnTxt}>Ducati</Text>
                            </TouchableOpacity>

                        </View>
                    </>
                    : null
                }


                {screen == 'Rickshaw'
                    ?
                    <>
                        <View style={styles.categoryContainer}>
                            <TouchableOpacity
                                style={styles.categoryBtn}
                                onPress={() => { navigation.navigate('BikeModel', { company: 'Bajaj Auto rickshaw', screen1: 'rickshaw' }) }}
                            >
                                <View style={styles.categoryIcon}>
                                    <Image
                                        source={require('../images/logo/bajaj.png')}
                                        style={{
                                            height: 92,
                                            width: '90%',
                                            // borderRadius: 25,
                                            resizeMode: 'cover',
                                            // marginTop: wp('4%'),
                                        }}
                                    />
                                </View>
                                <Text style={styles.categoryBtnTxt}>Bajaj Auto rickshaw</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.categoryBtn}
                            // onPress={() => navigation.navigate('BikeModel', { company: 'Atul Rickshaw', screen1: 'rickshaw' })}
                            >
                                <View style={styles.categoryIcon}>
                                    <Image
                                        source={{ uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBQVFBgUFRUZGBgaGRoYGhoZGhkaGhsZGBgZGhsaGxkbIC0kGx0pHhgZJTclKS4wNDQ0GyM5PzkyPi0yNDABCwsLEA8QGhISGzIjIiAwMjIwMjU1MjIyMjAyMjIyNDA1NT4yMDI2MDYyPj4yMjIyMDsyMjIwNTIyMjIyMDIyMP/AABEIAMcA/QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAwQFBgcCAQj/xABMEAACAAQDBAYGBwUFBgYDAAABAgADBBESITEFBkFRImFxgZGhBxMyQrHBUmJygpLR8BQjorLCFjNDU+E0Y3Oz0vFEVIOjw9MXJCX/xAAaAQEBAAMBAQAAAAAAAAAAAAAAAQIDBAUG/8QAKxEBAAEEAAQEBgMBAAAAAAAAAAECAwQRBSExQRJRYYETIjJCcfCRsdEU/9oADAMBAAIRAxEAPwDZoIIIAggggCCCCAIIIIAghpU10uX7bqvUTn3DUxGz94V0lqznmeiv5+UBOQRT6ivqXP8AeYByQAeZufOG7SZje3Mdu12I8LwXS5TqlE9p1X7RA+MR87eGmX/FDfYDN5qLRW02dLHuwulOg0Aguj+dvWv+HJdz9ayjyxHyiubw72VKgJYS8YJGG+PIgABu06ix0HGFztylD+rE5MV7WDC1xwxeyD3xX61ZdbNdFclERSWR1ZQWe2AMt82AzF9F4XvGu7cpopmqrpDOijxVRTHdHUCVlS3QmzCL5uXcKDxzvmeyLPI3eq1F1r5oPIFyP+YPhHk+tl0cpQABlZFHVmcssuZyhpS7wVczNEZV+zLt/wC4VbyjxqcjLyJmbXKnt6uuu1bt8pncnxXa8v2KlXA4NhJPbjT+qD+1+05P99Rq4HFAw8XQuo8IaneafLYLMljMMQWCgHDbIFGPSz0tfI8jZzI30kZCYpQ9tv4Xwt5Rl8fOt/VRFUejX4Lc9JPqL0m0rZTZcyWeJAExR3r0v4Ysuzt4qSfYSqiWxPu4sL/gazeUVeZW0M8Wmera+gmIL+LCGdRubRTQSgK34o9x+FsQHhFji8Ryu0TDGcfylpUEZfJ2FXU3+y1z2GiTASvZ7y+CiJqi3pq5eVXSFl4zabpjtMq+O3WPCO21xDHufTXHvyaqrNUdl3ghpQ1sucgmS3Dqb2I5g2II1BByIOYh3Ha1CCCCAIIIIAggggCCCCAIIIqG2t+ZMliktfWsDZjiwoCNRisbnsFuuAt0Qm2tvLI6KjG/K9gPtHn1fCKLtD0gTpo9XKUS7mxZTifPLJjYL8eVoaTq9phsiWA+k2fle/eYLpYTvVVt/lqOpGPxaOJm06h/bnNbktkH8NvOKxUbQlyv72eoP0EF2z5qMTd+QiMqd4jmJMj1hGjTHEwg9UtHZv4h2QZLnLnSxocR44AXN+vDcwhWbyU8k4XcK3LEmIdqYsS94jONo7Xq5txNmOqn3ADLXsKqBiH2rxHmUgCWUDok3Fs7u4+CiLo00idv7JX2JM9/rIiFPxBzbvERk/0jsSVl0wv9eZmO1VT5xSujyjqbWZWZ7j6LdIfha48oujSx1O+la+QKJ9hVJ8ZitEfTbYqGmt62omsPVvhUuQmIrYHCoAyBJGWRAiGE9jpLAHO5U9yjojvWE5qtkwYkjQEj4iw8ogtuzadLiwEXzY2UhpSqAMSvlqS5YtcfcvfjcxkFHtiZLsbWGmtwO3iO+NK9H9QzrNmOScU4qt7ZIJCsoyyt0o87iMR8GYnvr+26xPzxo23rY+sv7qy1Qae0zgsLa+yyx1sSo0ziN3qmfvX/APTX+BT/AEGEtkT7ERswqPDj0R6JfndyVr27s5pkssg6Qs69bLnbvF174hARMQMMwwB7QR+UXagfHL6xFJlSjLmzZBFgrFk/4b3Zbdl2H3Y6Ya5RlRRqL4Vwnmt1PitoZCbMlm6TGH65ix84sE+VETVSYTTE8pY7mOjqm3urJfvhx1/kb/GJnZ+/zs6o8rNiFB0zPWDYd8U6ekNwwBB1sb6200zGh4xyXOHY9fWiPbk2U3647tf3Z3plTp6rLBvMOF1yyIVirnswhDx6S8sr9Hz7sBwK+kneysyagaxtZ8YVlP3s++PoKN2PZi1T4ImdR02xuTudvYIII6GsQQQQBBBBAEEEEBTvSDvKKSQURv30wEKAbFU0aYeI5A8z1G2MGoLanLkMh/rEjv5WGZWz3vcF8IP1U6AA6uje31jziBlvBUjTzbMLcI5edMmFxidVANilxe172NxfMWyPjCEttT1R7RzcMl30LMicNC6XHP3tR184ulMyAuRsDy08o9vD4TmAsGYDkGIHhCbkHUKesqpPiRGTI1DkaG3ZlHFVPAIvn0V1seF+PWTHlU66W+XwtDWsF2vfgv8AKPziITeeWNhlzIv+do5RWGlu3jAkojlHT3XX9d2sANNYa3EeieecJvMuLHu6j+R+Nj2pqYgXd8v14HqjSfRxUlqVU5TmtxNjLX8jGZExo26Gx2MulmI5QlWZsNxiwznKhuYsyi+thbSODiXhm1qqdfu3TiRPxNxG9RJvvNN/eOecz+QOPnDHZ0+zRJrQLU1LI5IUNMfo2ubFABcg/TMWvZWx6eWQVlrfm3TPi17d0dFiNW6Y9IaLs/PP5lJbpuzLocNtbZeMN9+NmmWZVUBo3qplvouboSep8vvxZ6Zsu60Otp0C1NM8ptJiWvyJF1buax7o2aYbVWXsGUwD42ZWAYWsLgi44GOm2HIH+ED2kn4mOd0apnkGW4s8pijjlYnLuYOv3YmnSCK8+zZQ0lIPuL+UJNSy/wDLT8C/lE1Plwwmy4ooO3KMCZMEpQhBEyWUsLTZSS2YAcCZbBh9huuLRuHvbNnVZWbMLLPL9EklUcdNAgPsqU6NhqYgt4LojTkzZKmW4GeeCUyFewhSO+PN09h49pJ6t8KDDUIecsMrqLc+kV6r8bWM7q3OCCCMmIggggCCCCAISqJuFGY6KpPgLwrEPvXUero57f7tl736A/mgPnjarXa/GGaNC9e+cMw0IWT4N0WPJT5CFKdQZBGJVIdSEvmc0JYXvwB8I92HJWbMly3F1eYiMLkXVnQMLjMZE6Rq8vcDZ5GUp17Jsw/zMYoyQzF4h+26nyCiG82cLZMT9wD+sxrNR6L6NvZmz07GRh/FLv5xFVnoqW3Qq3H25at5q6xdstwyl5hJ08xHVSTiyBtZOH1Fid3l3VnUJQuyujnCrpcdLXCyn2TYEjUGxiHmnpMPqr5IsRCCsToI8aaCLHOAmOGUchBSTQIY8YR4p4QQqxja905dpFMOVOh/GA3zjEXOUb3seRgwJ9CTLTvRQp+EeLxqrVqHfgx81U+itbKutWQb+xMU34EGUQO8X7hFokvnCG1th+sf1smYZM3icIdHtpiXgevlzytEvsrafu1Mn8JH/wAUbMXidiq3TurU65xLTcx6/FMxG19oJmUTGy3vKXquv4WK/KMql7N2yD0amX4n/wCmJOhG3UyEynYXJsTa5JuczK5mOiM7HmfrhqmzXHWEvVyf2faRIySqW/V6xbBvMIe2Y0TDCKttA7VmqnraSTMwOJi4JyhiQCLdMAD2r34EA6gQPvFXIensyb2qyt/Jiv5RtjItT90fyw8M+SyTEhjUS4hW32Rf72lqZfbLa3iQogG+tA/+Lh+0rf03jbTXTPSdpNMx2Rm9NPhkPhGjoxufpM1yO9rW5RD7pbU9UZc3jTTMD65084tw44SX7OjEvtfacmfKqQkxWH7sS87Y7YHbCDmSC1oqmxmCTm9Z0UdSjlslCvoxJ0CzAjE8AGh9x2fRYa4uM46isbhbRM2kVW9uUfVNfWygYD+Ar3gxZ4zYiCCCAIIIIAim+lCqwUJX6bqvcLv8VEXKMt9MlX/cSgeDue8gL/K0Bk1S1zDeO5xzhOKJ7dBb1Uj/AIin8Jv8o3amOUfPuyNpCmmJOKlxLJbCDYm4ZdSOu/dF8pPSvTAdOROH2cDfFhAagISnCKTT+lfZze0J6falqf5HMPF9Iuy2/wDEFftS5o88Fogh/Sm9qWWPpVEseAc/KMq2iLTG+wn/ACki8ekjeKnqP2aXTzFmWm42K3strKoNwMzibwii7XmETmBJyRAMz/lLaKsGeOPGaOfXHme/P4wp+1mwGFCBzRL582Chj3mCkSY8MPaOmD3LZDO1tL3GWffEmuzpVtL9uXwgbQlImKYiH3mVfFgI3qimXmzDYjO2fYD84yJKCWvSCkFbMCGYWIzBveJDae81VJqXSW5QdG6MoNjgUnQCPPz8SrIo1TMRPq6ca/FuZ33a6xiM2pUomD1jsssuQ7Li0wOQLoMS3YLmIzD+3Nd/mJ+D/WEm33rv8xfwCPKscGvW64qmYnTq/wC2jWtS0etrNmYG9XNqMdjh6VRbF7vtai8VqXXtY2mTByu5+UVwb61v00/AsOJe+9ZzlHtlj5GPRrxbk/bH77MrWbbo85/PNaKbbM5SmCc5JZVzcv7TBT0TfgT2dUaZQ1GI4W14GMgo9+poILSpLEcbYfDI2idp9/HyJkJ91z+Qjz7+DkVVUzTTGo6xvql/Ks3Oka9mmzJVoY1VFKcEOiP9tVb4iKcfSOLdKQ/cy/Mx5R7+y58+XISVMDMWuDgzwozAAhtSVtnzjhycC/EzVRRMRHPe/L3aKKqZ5TJ/s7c6R+8M+Uj4phZEChRLXCF6DJY9LCCdOy9yepm49F7omJ9ma5Hg5aH5rwDnLmjrCMR4pc+IEdttaUiF3fCotcuHQDEbC+ICxJ4GOKvJzZq3TVPPy6M/BS53a2ClHMZ0nTShUhlmFWGWYYkAZDO3K8XQG+cUybtORNlukufKYsjKAJiZkqQOPMxb6VSqKp1CgHtAAj6XhF+9comL29x5xpy36YjUwXgggj2XOIIIIAjC/SvWY61l4S1VP4Qx82MbpHzXvez/ALXPMzpEzZgxKciVbMAGxsAyjPztAQUyORHpmjkfAfnHvrV5HwihOq9g9g/mEMLRJPZlKg8uFsgb6mGtTIwMBe4IDA8wefIgggjmDBTbDHoEdWjpVgr2lH7xPtp/MIc7XznNbPJP+WkcUSfvE+2n84hxtNP3rWHuy9T/ALtOqCI8r/3hNkh3gPIeMcsnUfL84gcbMPRtybyIBiaVBwBEVyTOKBhbW2vhl15+UTtDUY0Bs34W8jaxioc4cj2GKkZjMcTEkniddLRcUFwcjofdYfERSkMQLXjy8eR4YqvTHStHF4CYBwky0SUiqIGsQwMKBzAS0yusNYlNl0FXKeXWKqAIcQExwowsLdK/sXDWzIOYiqy+kwHAkX7OPlE/VVrOiqT7xbwGFfi8Y1RExMT0lYnXNeJW/k+9jSI3WlVKPgLGGm9e8zVNK0r9lnKSyte6uoCOCSSpvwtpxiB2Psr1stphmhAHwWK4rkKGJviFhYiEtq7HMpFmCYjqWwXXEGDYcWYI0sDmCY8+nheNRXFdNOpidxzn/Wyb9UxqZGxZlwBH0lJa6qeYB8o+ZtinM9pj6ZpxZFH1R8I9CGqSsEEEVBBBBAeR807yScdXUNe950zMC4PTbSxPyj6Vj5YqpbtMc2uS7k2IOZYnhBSbU7cj+F/+mPGU2scP4Apy+thBhN5RHukdxECzGGQYjquYo6UDmv4l/OEKoZjsPy/Mw6WYx1YntJPxjjDeagIuDe+V4BnaPQkXHaMiWlLL6C3eYyHoi+QFrE5qb8QRFSmGWCRiYecCJd05Csrn3WVu2xB+UeVNejOzANbQaA2AABIvkbCOEwk5OT1ERHzNT2n4wD/9tT6LeX5x4auWeDeA/OI+CAdTZiHQ+IhJL8HA72HyjyXJZtBfw4a6x3+yP9BoDtSxI/eXzGWJucNhDuRQzCw/dtkRfLrhosELol4cLs+YRdULD6tm8hnDZDHQbiIK5eWVNmBU8mBB8DHNofS9pTgLesLDk9nHg14kqCfSzCFnSlUn3kJl/wAvR8REFftHsXqo3GlzEx00/O18E0DydcvIxUNobOmSWwTFwnxB7CP+8NhvJ9odsPixuByX+poY0394vaPiIfTh+8A+oT4Yz8ootW6G0fVBxZGbEjKrzEl3BxCYVaYygkYU6N88WhFxHG9+0TMKXwg3YlVmJMwgKiqLy3YD38rjXQCK4ksstwfJvkIHlEZ348nGvaoEQSu76YnVebW8TaPpkCPmrdlws5GIJCurkDUhSCRH0lLmBlDKbggEHmCLgxCSkEEEVBBBBANq6Zhlu30UY+Ckx8sCqdgCxDEi5JVCbnXUR9N7xzilJUMouRKmWHM4SAPGPmpllIApYsRe+AArnYWxswx2twFszYnWCkfW81U92H+QiOhOH0fBn/qJhJ2lk9Et3gD5n4x66FSMWSkkYjcZjVSLHC2mXI3vFDhGB+kO9G8ikNqyeUdHUAkX1GRyAzA+UOUl8hfsZD8wYa7YSwS+XbrmOI7oI5n7bmuFDYSFNwLEWJ463iNLR4YIBxQnpjv+BhGZ7R7T8YVoj+8Xv+Bh7UoxzvfsIPwMBFWj2OmJvqY7WWSL356nW2Zt3QHktjpw14+OUTmz94jKyCs1iPfyNuIyBH+sQTAZZ9vUbx41uEBcDvcjgqUcYtemBw4nlFPVY8henS94DgLHVodCVHLS4KQAhZBHgSFUWCHlNVzJakI5APu3y7uRiPqKpnFibjWHqLEQ7ZntMArQi8xe34Z/KHsx7T0+yR44x84b7LXpE8gfPL84Sr3u/d8zAOZE3DcEXF+SfFlbqhWZMHKwF87JrbLNUXrhts+qZWyt3i8LbTrWc2ZrkcBYAeHGIqRptsCXLWXLUY2OKY/Ej3UHIDzJj6D3UrpX7LTyzOlmYJUvEodSwJQG1r34x86buvIExTPmYEFyWCesN7GwC9ZtnwjXNwdhUlXSmZNlrMDM3RYXsoJC9VyBivwvlbMkNQgiubrB5TT6RnZ1kuplMxLN6mYuJUZjmxVg6gnPCqxY4IIIIIDNfTLtwyqdKRDZp5Je3+WhF1+8xUdYDCMRm30i/wDpgqGbaDCxAlyUVMQIBuWZmUn2gMYzHFbc4zNZZJ675nXzGsA5kjOLFs51mSmlPbECqAkcz+6Y/ZfoE/QmGK+1K4GIG9uH61MOZczIWNsYwE8g1s+4hT3RQuGW+WWQNjqt9VPWDcdlob7YXoKfrfEH8o9E281rqOkS1iq3uwDEXtfIkjWF6qQGllVAGdxmbX7zlAQBgjuZLK5EEZ2N+BGoPIwneAcUP94vf/KYdT5KjRR4Qjs2WS9xbognO9rkEAG2cPJgPvBfusw+KmAim174UUnD1XPLgMxztY+cJvqe2Ogcj4fM/rrgODC8qnx2swxG+RBFgBe5NrdUIxMbuIDMOhsjH+JR8/KJKwZTdnuoztcmw6X6/Qj2jTpMDw/Mxap1IjWFhxOl9LfnFeCYZzr1n5H5xI33WddneCOGWHBEJuIqG+CFJax5aFEWCFkEQDnM9p+MT4yF4r4gpRJhXQ2vCZMEK01O8xgiKWZsgo1PH5RUStBsjFLE0va4JAXUAErnfjdT5QjWbIeWA9sSEXuNQONxHVBVkL6vqtb4/OFV2oyjDyic1R0soSBYi+XE593dG8bibCkztnSWR2UkWYq1xdWKkEcDccLcIxdNmPUXemS7DN5akArnk6gn2CfwnLS0SOw3qqVyjs6IxBaXjOCYwI9tVPSBAsRxgN43Soypnzb3V3RJbfSlykAD9hdphHVY8Ys0RWwNqy6mSsxMvdZeKsNVPxB4ggxKwQQQQQHzR6WagvtWpzyX1aD7spL/AMRbxiL3e2UZ7YcWBQuN3I9lfzP60hvvXVetraqZwafMI+zjYL5ARZN3JYWhnzNMU1EJ5KoDeF2gG1fs1ZVnlOzpiCNjUBlYi6nLIqRxyzyivVtlYqQbE3FiBkdR1Z3jR9pIGpqiWZeH1ctSCbXZ1VXLXBN1uFHd1Rn+0UxC9v1cRQyaoUuG6WVr3IJNr53FokRVLbXxy+MRElwrqXXEAQWQkriAOakjMXGVxnEhKoZtQ59RTzGUtkstHewJ0uBwvbOA6WYScQ10uOItbPnllHQbjcd6J/0xZ91/RjWVEwrPV6VAuLG6BsRxCy4cQzsSbnlFs/8AwuNP21gLZWlWOLPnMOWmUQZemeg8LR69K54ecadL9DTgj/8AoG3/AAc7dpmEeUZXtpZ8ibNppjEFXZTdcJIBIDaXsRnlqDF2It9T2x3LTFqbd14TAhWXMAtc5dWvnAKmhbgyN963kwHlDlKh5D3UKbKEOeIcGPsnI3AhmZ5JJ4m1sgchpwjjE3EX7fziLtMf2hbjLF9NSNbflDdan1k31lrYuF78Lf0RGMR1Q+2ZfEDYdV9L5/6wRIsITaHbo5FzLC/ZJPiLZQ2dYKStCqiBVhVEgEaprS2P1T55RAxLbUngLgGZOvUBnEf6lrC41v8ADL84BfZtIJjkEkKBc211AA6v9Ic1FOJbn1ZZSExAgnFmcJzHUT+so8oqgS0Iwm5NyeoDIfrnHkqf6x2y1RgBxyQm/HiOXeInPZ2d7LoRNcIMWInCgXCCXKtgGeWbhF+9DCoY4iG1BIvpfr+ffCtNOaWyzFezKwZRmbsrAqTwGYB7osG36FHmu0kXzEwJldpU4CbLwW1Kq4S3UoF7WjIQWyNpzKeas6XcMp04MpyZW5gjKNT/ALNnaksT6ObKKHIh2ZXR+KOoU2I8xYjIxmlNLDE6EajrB4E668tYvm4+0/2KcrA/upllmD6pJsSPpKcX4XGloaF73E3Uq6JiZs6W6stmVMZuR7LAsBmMx2Exeo8Bj2IgggggK6m5WzQS37HIJJJOJA2ZNzk14zXYNNLSdtGhaylZ5dFGQwYmyA5BTLHY3VG0TJgUXOkYb6S3RK0VdNMs7AY8OTLMQYQ3WGSwI+qb6wHW9M71cl1IJZgExtqQ+qjL6jG3ADrEUmU48cu/Ij4R3tXa86oYNOmFyosuSqFvrZUAAvYZ2zsOQjjZEn1sxQfYuC5+qNQDzOg7eqLA+gN0tgUwppM1qeUZry0dnaWhe7qGALEXyBA7os6qALAWHVGWT9+J+idEDIAAZDgIjp29tUf8RvGINmJjhpqjVgO8RiEzeKoOrt4mGr7YmnVj4wG5PXyl1mKO8REbXr9nzFw1AlzV5Mgcd1xlGOvtGYfeMJNVOeJgLhXbL3duT6llP1HmqO4B7eUVPeTZeyvVOaObNScM1V2DI1tV6QuCRob69sNXN9c4Zz9nS31B7jAVYTjxA/CPyh3QS3mNhRRe1yblQO03iRfYCnRyO0AwtTbPnS8pc1VzvcLY+JuYCcofRxtKYiuJaqrC4xTFxW54cte2JGT6Nq4ZeqXP3jMQW68ie2Etlbw7QlW//YZh9Y4vjFuoN+6gWExVby+ESY2sSqdZuHtOVa1Ok64zaU6mx5ETCtj2A9sNZW4u03P+yFet5kpR5MT4CNVpN9Zbe2hXsN4lJG8dM/v27RDRtkY9F20z/wCWXtmOfgkdj0R7Rb2qinXsMw/0CNplVstvZmKe8Q4Biox2h9Cljim1lzySVl+Jnz8Iq++m68iimvLWa7uEklcWEdKa80uSAPZCSgPtTBwj6LjCfSjTzanajJTyJkxpcuXLfAjN0rGYCSBYDDMQd0BndQf13/kBCmxJStM6b4Bnc4GfUEaAEeMT9PuDtSYMS0bgX0dpaHL6ruD5REyBIeUzPNKOGwrICGzAj2sQsAA2oOdgeYgOEoQMjMUkDFhW+a8DjOR52F4k6tgUlWcCYiNLYkWLrjxS2PWuO1zn0MzlEVjllxbooSLkcASL2vrYXMOq+kp0xGVNeYwIsWlqiYWFrmzYic+XKG10VmyzLmhiLYsyOTaOO/ot96JqQ/QYfRJ8CMXwRh98xXXxHBfM45mfE2EqJiU9kb7I+DfImLA3Xcuu9dRSWOqrgPahK/AA98T0Ur0VMTRG/wDnPbssp+N4usRBBBBAeERWtu7j0VXnNlWb6SEqfKLNBAZTVehiQf7urmqOTKrDxyhCR6HXRgRWXA4YLfAxrsEBn1N6O8Is0657ITqNwXHssreRjRYIDKJ+581dUPdnEfO3dce6Y2eEnlKdVB7oDD5uxnHCGb7OYcI3ObsuU2qDuhhP3alNplAYo1Kw4QmZJjXqjc9TpaI2fua3AQGYlDHkXyo3Sce6fCI6duy492AqqvDiXOtErM2C492EG2O44GATSqhdas84ROznHAx5+xvygH8vaBHGH9Pt6Yukxh3xAilflHQp35QFxpt7Zw1e/bYxKU++Te8oPlFASQ/KF0kvAaTJ3qlnVbd8fPm+ezhJrZypmhczJZ5pMJcDuuV7VMX0zCupA74id4KWVUSi3rVWdLH7tTpMW/SQtoDxW+V8sr3gKRIbosFAOK17jMWubDle+fZkdRDqilOxwLbIEkt7KDK8xjcBbAcdbdlmYl58QdMrg9hhdSSMJYldcN+jfmQMieuKHjurTBgvgQYUuDcqLksQeJJPdaHWO47c+GYAt2H2mPdDGSP1+v1pF33D3XarmiY6n9nQgsxGUwrpLB456kaAniRAahuJs8yaGSje0yl24ZzCWAPWAQO6LHBBEBBBBAEEEEAQQQQBBBBAEEEEAQQQQBBBBAEJsinUA90EEAm1HLOqL4Qi2ypJ9wQQQCD7Ckn3YSbdySeB8oIIDn+zMnr8o5/svJ6/KCCA6XdmQOfl+UKru9IHuk98eQQCNRunRv7UvwJiEr/RjRTNMadjQQQFdqvQymsqrZep0DDyIMRz+h6rHs1Mlu1XX84IIDlfRVtAEWemtxu0w3/hEaPu/R10lFlzPVFVFgJfRAHICwAgggLGhNulr1QpBBAEEEEB/9k=' }}
                                        style={{
                                            height: 62,
                                            width: '90%',
                                            // borderRadius: 25,
                                            resizeMode: 'cover',
                                            // marginTop: wp('4%'),
                                        }}
                                    />
                                </View>
                                <Text style={styles.categoryBtnTxt}>Atul Rickshaw</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.categoryBtn}
                            // onPress={() => navigation.navigate('BikeModel', { company: 'TVS Auto Rickshaw', screen1: 'rickshaw' })}
                            >
                                <View style={styles.categoryIcon}>
                                    <Image
                                        source={{ uri: 'https://english.mathrubhumi.com/polopoly_fs/1.3402862.1573012328!/image/image.jpg_gen/derivatives/landscape_894_577/image.jpg' }} style={{
                                            height: 80,
                                            width: 80,
                                            resizeMode: 'cover',
                                        }}
                                    />
                                </View>
                                <Text style={styles.categoryBtnTxt}>TVS Auto Rickshaw</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.categoryContainer, { marginTop: 10 }]}>
                            <TouchableOpacity
                                style={styles.categoryBtn}
                            // onPress={() => { navigation.navigate('BikeModel', { company: 'Bajaj Auto rickshaw', screen1: 'rickshaw' })}}
                            >
                                <View style={styles.categoryIcon}>
                                    <Image
                                        source={require('../images/logo/tvs.png')}
                                        style={{
                                            height: 60,
                                            width: '90%',
                                            resizeMode: 'cover',
                                        }}
                                    />
                                </View>
                                <Text style={styles.categoryBtnTxt}>Tvs Auto rickshaw</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.categoryBtn}
                            // onPress={() => navigation.navigate('BikeModel', { company: 'Atul Rickshaw', screen1: 'rickshaw' })}
                            >
                                <View style={styles.categoryIcon}>
                                    <Image
                                        source={require('../images/logo/mahindra.png')}
                                        style={{
                                            height: 62,
                                            width: '90%',
                                            resizeMode: 'cover',
                                        }}
                                    />
                                </View>
                                <Text style={styles.categoryBtnTxt}>Mahindra Rickshaw</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.categoryBtn}
                            // onPress={() => navigation.navigate('BikeModel', { company: 'TVS Auto Rickshaw', screen1: 'rickshaw' })}
                            >
                                <View style={styles.categoryIcon}>
                                    <Image
                                        source={require('../images/logo/piaggio.jpg')} style={{
                                            height: 80,
                                            width: 80,
                                            resizeMode: 'cover',
                                        }}
                                    />
                                </View>
                                <Text style={[styles.categoryBtnTxt, { justifyContent: 'center' }]}>Piaggio Rickshaw</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                    : null}

                {screen == 'Truck' ?
                    <>
                        <View style={[styles.categoryContainer,]}>
                            <TouchableOpacity
                                style={styles.categoryBtn}
                                onPress={() => { navigation.navigate('BikeModel', { company: 'Eicher', screen1: 'truck' }) }
                                }
                            >
                                <View style={styles.categoryIcon}>
                                    <Image
                                        source={require('../images/logo/eicher.png')}
                                        style={{
                                            height: 62,
                                            width: '90%',
                                            resizeMode: 'cover',
                                        }}
                                    />
                                </View>
                                <Text style={styles.categoryBtnTxt}>Eicher</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.categoryBtn}
                            // onPress={() => navigation.navigate('BikeModel', { company: 'Tata Truck', screen1: 'truck' })}
                            >
                                <View style={styles.categoryIcon}>
                                    <Image
                                        source={require('../images/logo/tata.png')}
                                        style={{
                                            height: 62,
                                            width: '90%',
                                            resizeMode: 'cover',
                                        }}
                                    />
                                </View>
                                <Text style={styles.categoryBtnTxt}>Tata Truck</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.categoryBtn}
                            // onPress={() => navigation.navigate('BikeModel', { company: 'Mahindra', screen1: 'truck' })}
                            >
                                <View style={styles.categoryIcon}>
                                    <Image
                                        source={require('../images/logo/mahindra.png')}
                                        style={{
                                            height: 80,
                                            width: 80,
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
                            <TouchableOpacity
                                style={styles.categoryBtn}
                                onPress={() => { navigation.navigate('BikeModel', { company: 'Eicher', screen1: 'truck' }) }
                                }
                            >
                                <View style={styles.categoryIcon}>
                                    <Image
                                        source={require('../images/logo/scania.jpg')}
                                        style={{
                                            height: 80,
                                            width: '90%',
                                            resizeMode: 'cover',
                                        }}
                                    />
                                </View>
                                <Text style={styles.categoryBtnTxt}>Scania </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.categoryBtn}
                            // onPress={() => navigation.navigate('BikeModel', { company: 'Tata Truck', screen1: 'truck' })}
                            >
                                <View style={styles.categoryIcon}>
                                    <Image
                                        source={require('../images/logo/volvo.jpg')}
                                        style={{
                                            height: 68,
                                            width: '90%',
                                            resizeMode: 'cover',
                                        }}
                                    />
                                </View>
                                <Text style={styles.categoryBtnTxt}>Volvo</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.categoryBtn}
                            // onPress={() => navigation.navigate('BikeModel', { company: 'Mahindra', screen1: 'truck' })}
                            >
                                <View style={styles.categoryIcon}>
                                    <Image
                                        source={require('../images/logo/AshokaLeyland.png')}
                                        style={{
                                            height: 80,
                                            width: 80,
                                            resizeMode: 'cover',
                                        }}
                                    />
                                </View>
                                <Text style={styles.categoryBtnTxt}>Ashoka Leyland</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.categoryContainer, { marginTop: 10 }]}>
                            <TouchableOpacity
                                style={styles.categoryBtn}
                                onPress={() => { navigation.navigate('BikeModel', { company: 'Eicher', screen1: 'truck' }) }
                                }
                            >
                                <View style={styles.categoryIcon}>
                                    <Image
                                        source={require('../images/logo/amw.jpg')}
                                        style={{
                                            height: 80,
                                            width: '90%',
                                            resizeMode: 'cover',
                                        }}
                                    />
                                </View>
                                <Text style={styles.categoryBtnTxt}>Asia motor works</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.categoryBtn}
                            // onPress={() => navigation.navigate('BikeModel', { company: 'Tata Truck', screen1: 'truck' })}
                            >
                                <View style={styles.categoryIcon}>
                                    <Image
                                        source={require('../images/logo/Hindustanmotors.png')}
                                        style={{
                                            height: 68,
                                            width: '90%',
                                            resizeMode: 'cover',
                                        }}
                                    />
                                </View>
                                <Text style={styles.categoryBtnTxt}>Hindustan motor</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.categoryBtn}
                            // onPress={() => navigation.navigate('BikeModel', { company: 'Mahindra', screen1: 'truck' })}
                            >
                                <View style={styles.categoryIcon}>
                                    <Image
                                        source={require('../images/logo/man.jpg')}
                                        style={{
                                            height: 55,
                                            width: '90%',
                                            resizeMode: 'cover',
                                        }}
                                    />
                                </View>
                                <Text style={styles.categoryBtnTxt}>Man</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                    : null}


                {screen == 'Bicycle'
                    ?
                    <>
                        <View style={styles.categoryContainer}>
                            <TouchableOpacity
                                style={styles.categoryBtn}
                                onPress={() => { navigation.navigate('BikeModel', { company: 'Treak', screen1: 'bicycle' }) }
                                }
                            >
                                <View style={styles.categoryIcon}>
                                    <Image
                                        source={{ uri: 'https://newrelic.com/content/dam/newrelic/documents/image/case-studies/3e96a7c98228a5ab68812aa1afc0805fa960cf7c_trek-logo-320.jpg' }}
                                        style={{
                                            height: 62,
                                            width: '90%',
                                            resizeMode: 'cover',
                                        }}
                                    />
                                </View>
                                <Text style={styles.categoryBtnTxt}>Treak</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.categoryBtn}
                            // onPress={() => navigation.navigate('BikeModel', { company: 'Bomb Track Company', screen1: 'bicycle' })}
                            >
                                <View style={styles.categoryIcon}>
                                    <Image
                                        source={{ uri: 'https://www.pngkit.com/png/detail/263-2632561_bombtrack-bicycle-company-imperial-logistics-logo-svg.png' }}
                                        style={{
                                            height: 62,
                                            width: '90%',
                                            resizeMode: 'cover',
                                        }}
                                    />
                                </View>
                                <Text style={styles.categoryBtnTxt}>Bomb Track Company</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.categoryBtn}
                            // onPress={() => navigation.navigate('BikeModel', { company: 'Bajaj Company', screen1: 'bicycle' })}
                            >
                                <View style={styles.categoryIcon}>
                                    <Image
                                        source={{ uri: 'https://motorhaat.com/wp-content/uploads/2020/09/bajaj-logo.jpg' }} style={{
                                            height: 80,
                                            width: 80,
                                            resizeMode: 'cover',
                                        }}
                                    />
                                </View>
                                <Text style={styles.categoryBtnTxt}>Bajaj Company</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.categoryContainer, { marginTop: 10 }]}>
                            <TouchableOpacity
                                style={styles.categoryBtn}
                            // onPress={() => { navigation.navigate('BikeModel', { company: 'Treak', screen1: 'bicycle' }) }
                            // }
                            >
                                <View style={styles.categoryIcon}>
                                    <Image
                                        source={require('../images/logo/Hero.png')}
                                        style={{
                                            height: 62,
                                            width: '90%',
                                            resizeMode: 'cover',
                                        }}
                                    />
                                </View>
                                <Text style={styles.categoryBtnTxt}>Hero </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.categoryBtn}
                            // onPress={() => navigation.navigate('BikeModel', { company: 'Bomb Track Company', screen1: 'bicycle' })}
                            >
                                <View style={styles.categoryIcon}>
                                    <Image
                                        source={require('../images/logo/atlas.png')}
                                        style={{
                                            height: 62,
                                            width: '90%',
                                            resizeMode: 'cover',
                                        }}
                                    />
                                </View>
                                <Text style={styles.categoryBtnTxt}>Atlas</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.categoryBtn}
                            // onPress={() => navigation.navigate('BikeModel', { company: 'Bajaj Company', screen1: 'bicycle' })}
                            >
                                <View style={styles.categoryIcon}>
                                    <Image
                                        source={require('../images/logo/avon.jpg')}
                                        style={{
                                            height: 80,
                                            width: 80,
                                            resizeMode: 'cover',
                                        }}
                                    />
                                </View>
                                <Text style={styles.categoryBtnTxt}>Avon</Text>
                            </TouchableOpacity>
                        </View>
                    </>


                    : null}
                {screen == 'Bus' ?
                    < View style={styles.categoryContainer}>
                        <TouchableOpacity
                            style={styles.categoryBtn}
                            onPress={() => { navigation.navigate('BikeModel', { company: 'Blue-Star', screen1: 'bus' }) }
                            }
                        >
                            <View style={styles.categoryIcon}>
                                <Image
                                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3RNIwF3IEpPN91dWnPt1BQwuTsx-22EDfG2QrN1qi2NqmbE-kqlOwisakK_AhmUjpGjo&usqp=CAU' }}
                                    style={{
                                        height: 62,
                                        width: '90%',
                                        resizeMode: 'cover',
                                    }}
                                />
                            </View>
                            <Text style={styles.categoryBtnTxt}>Blue-Star</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.categoryBtn}
                            onPress={() => navigation.navigate('BikeModel', { company: 'Hyundai Bus', screen1: 'bus' })}>
                            <View style={styles.categoryIcon}>
                                <Image
                                    source={{ uri: 'data:image/png;base64,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' }}
                                    style={{
                                        height: 62,
                                        width: '90%',
                                        resizeMode: 'cover',
                                    }}
                                />
                            </View>
                            <Text style={styles.categoryBtnTxt}>Hyundai Bus</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.categoryBtn}
                            onPress={() => navigation.navigate('BikeModel', { company: 'Bus Assist', screen1: 'bicycle' })}
                        >
                            <View style={styles.categoryIcon}>
                                <Image
                                    source={{ uri: 'https://www.seekpng.com/png/detail/253-2536046_travel-bus-logo-png-www-bus-company-logo.png' }} style={{
                                        height: 50,
                                        width: '90%',
                                        resizeMode: 'cover',
                                    }}
                                />
                            </View>
                            <Text style={styles.categoryBtnTxt}>Bus Assist</Text>
                        </TouchableOpacity>
                    </View>

                    : null}
                {/* <View style={[styles.categoryContainer, { marginTop: 10 }]}>
                    <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('AddGarageService', { company: 'KIA' })}>
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
                                source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAulBMVEX/////AABmZmZgYGBcXFympqZWVlZjY2NeXl5ZWVmbm5vBwcHq6ur7+/vz8/OXl5fb29vKysrR0dG8vLx+fn5ycnL/JCT/vb3/9fX/7u7/TEz/5eWRkZH/2Nj/SEj/WFj/mprk5OT/lJT/oKD/rq7/gYH/MjL/b2//t7f/xMT/0dF7e3uHh4f/4uL/Li7/XFz/ZWX/iYn/HR3/Pz//eXn/ERFMTEz/hob/amr/p6evr6//sLD/wsJFRUXcDILPAAALBUlEQVR4nO2baUPiOhSGCy1dgLKvArKJsrki44je//+3btvkZOlGmQFtnfN8UJsmIXmbsyRFRUEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQhNK/X6+6H+/z+WQ2m8zfb7qf69Gg992jShe90ed88Xibi+T2cTH/HNnfPc7v5n75PJZ02T9cXz0+3Xk8PV5dP+yFm+Pn5f13j/h76K2er0GFztPbe3cdZXG9/mi1nD/fkepXs9U/ZpnrZ7C6p8lqkKhJf84N9Xa2vvAA00Jv+Uim/LLo9hO2sW92bovdi2OoVLC7z4uOMhUsqY+6ukkqlLMOfxOXNXcUG7uq7aheP3p9jV6pGb0ndzv9GWnzOJo4Pxdvzo9rJzLMiQeb/VT/taRO526UvM0nXYjjwaDj/Jov3QsSEvsT787vnxgg36mvWSQ3P1hUuat75dn93R25P19ZhaXnwMYniJ8JPui0H0/wVDQO5HZrxVtWuXXPuxaz0/mpvaafdYfOe5W4yQ002X+CJPfKi/vrRqrXJ87++dxD/jbuIKdK2qD/zFKqdyfXIL68r3j+69ZfeUE0/Rm2uBbmnYjRE5Nq4ZjcyvvrpacQDxYUhXrD2XmH/S1MYOIJTXC1Y1Jdu4GOLBxnPX3mZO/OoWpdnXPY3wJbJckSyI8Okyq3dK77D8THK8qAFIa2esvB6ss0Vyetq3euFFlCXb5m9kzAEGBLnmm12PnLJEHliSBVx3NNNOEfs56iLK1Pm+0zfOi1gLmPj1a1Z4JUxFn3bnljejcynwKhr883+C9mxSZ/7IHLUt16hzYQRcf873l0D5LMWYTN/iO+nixVbuIVzgWtSOaee4jpg9lwstOx1MEk6MTXm0hSdcjGGKKo56WoPcZtmcFrJc9800WyhTXPSbx5hb0Herlzr6ifX8R+GjujzuQ+scsEiAnoHzkZko2N4PJW7Cj+49j6nJxp/F/K63Er7IrvbhweSfESrl/cwAAG1o3/uE9olMmAyN4vROUNa/+rQnqewHfR3pKkOf2xzQwPveebwtfBBh/+qO9Zcg/LiPrvR1biBbZX8SIGthwzmcZzGUJu9n/7pIIoZvPl5iXx4LDivbsiJMCZFOuBjT6wobPf/FKBCfZ5SVe6PrqPiX02qUdYO75n7csWXKgJjnjJxCvYSVcxCH2edRZfxA0ffkdUyx8CHa7ouuFOOnfnFbC89tiHDXjLowabRnqiHOyEZrTLBYADdEHeHakMl8cOWW3hAWTzzavkw689ufpPuSCQQInbHrLU2OWRT+q98JYvF5zRBRFMg1jWxywXAuz4FoEyeNERd9rgMhK7u4mvm1qCMS/IDsLcnVBIwmfSNFN+BJed0gV5yR3jDqo+CoXERdvsOvaMai1/SFYXVtAQAzD7EtN5+maQyxeTZa6v5Q6PnAalmnUuFhYjpRBJtOGHFmFvvwifgdCa6VetK/9sRNhhnjRnoqAdUk1mEBIuMnuoTIhW64FZ14NYTHNKnmOEHjcM5mHfbs7k6YzIfYRW/OBG0oo6HUHjwBtHe/UWETky/CKM0rsOmxdzRHZHKqcnMbxgL3U26D6HbAEomTxQ9hOycZ7APZ9WNDwKCSrdC/XuV+8L/xGYTEbf6/gZ+FcDPyKWbBCcjmy6ndtOcO8dYP8j1pXHUpoY3+vKWoEhxfxrShTX2fdXAsI2mduLTxWaft/kTubnfPOPQuUSvhjks06aJNhBLY6wz+axTDzut692/NIfJqkRvoYKEkPGU9FI1oK9jH1zpid8UYlZFL9/jmePxn8OCEsuNC2L5O6HJAzxBN6F0QXyGSZJFD/2v1FkBq++rGFCbyRIqWBRJf9WffbprWY8JYfvXoVk+2HsF/+SUsCgO3tydzxwDpNAqIfX5T/hqKIYwKHdIlam/fjtA/+xnLHu3kyeX3+Pr3adzst+v3/pPOyuHu8Wk5vu6F9IERAEQRAEQRAEQRAEQRAEQRAEQZBvpdxg1Nxru1Td5I389jBlVepFf0k0dp1QqoR91qFYqJ80ukaJdndSqwthb3UN0IdOQUE3VSOfzxuq3iLzPVgalGzKx/qb6prpodeCN5tO36qVD5Mxgq1OejN/JW9zOfJqnqFWlXLe5NeG5mhjbzShJEwCuT+orQVrVnT4mKSUt9CdfuK8LkFR0CavFsuWIVw7a0mpGFJJXj+yLColLVKsMhVreMIAD2ZqxKr8p5lcDGMrC+POK+8rMrbH+iyqUWIpRV01DNM8wQydpZoasRznXtpwQ/RrFVaiH3NbTTNSLKVRbW0Pp30VhD7AFIjl0QoqEoPZPNJdKUasPyBlYjUED55XLd1SJXUMzbLkKMCxpzUnrDdqU8GyRLFs53bt+EoKqzZt1GturxFiVRp1nshUag1vGOXLf3+pbHEprOrULlcl9dqN8rTIqxhtNsRCXrdI0mHpZhVWEhdruvXu60Mqpf2LZCiu3AfaMO+GPFJtKxj4QfOKNjVRrLpJGv2ylaGT8FiGl3w1hs7ThGG0TzTyvxHLPHglRcGNtcjghahJmzV1VbRfVS/KYk2bOr2vakQGm0ZDp2LtPwOkL0E1Q4e1whIYQy8IYrVZZGx5f1lOfmu3pABumFbjq8QyAiUWfdx8RCopOOh5H1ZBFMto8fVJV6MgllJpez0amzrvx6BdVzTh0wwQyGlfJQ9RPWjssbVln5FPEIHOJJZKF4fCJsCMbsjGT2ZEE0zPo4FL021BLCmQksctisWqiZPVSPDYhEQcXRwpue+GGpBNdUZBl5hxShr3F2KxSMcWBfvkKpsUEetAnr7RchyzTY2UNC8xi1VNaET0kcTiYYVXI0lcA8ZjWnyJeWJV2EidbE21nBKaMlsHZzmVaVjXL+m2BLFgu8onAmstINa2berOwyR3qU0NJbG0QhMCg7GJFssqNgvwt9fdUIXRlGtDabvDxDLazVLRsfrKtpV3wrdeECeiXdJr/ZFY3uTLNeKSK+SZEpsFsTxvV4eeIsWy3ChaswRJTOEGizWSWDwie6XlBllLtMujmeDf8Mdiedi1Q1s3hDlQsVTytFWhUZhY1M7bPOZRb0jDsC3KCGKFrJ1yvajSUadUrFqzmtc1lkFIYpnk3Ir6kUix6MyGXKwpGY5Kshjw9pJYljT+Sv2wNS3m+FIpVmOr0124oYasLLrdOSoW0bTKJaEmCVMeBsUSrdB21jV9XIaZWrG2EKlNvd3cBn1WQrG0gFjT42Lx5GAKpyaqswMomVLLi/BHYg1p6ukMsQwzOo9YVBHq80Rvxm7BoByPRrtXC46Tt2WZUyMWeOE22fadc2Upkq1B8iuJVYChH6RgUk6pWDQlgLCkCfP7a7HoblDzBgM7h3CxaFWTXNVTaoZyyKM3zyQW5GZWsV5iW79wsWio1LyLCswibWKx/Ltm240N7AbPI5bCNkkmP/MOF4uuO3VYVipNqJw6sRRoo+nuBo7ePJNYdeGAzYg1Q6hpOHseE+qmT6yScEJj6AVy1zqPWAo/fTTyNTNGLEV4gZA326QX4fYFxNJVig5isRINDpGrGhTR9BnO/gzVapdpA++tYkn425mNyRvZv4Q+G7QaEWtIuodXqUXdE8HQ2pWpzu9UyN+WoEaLng856V5BqXv3TeNyWimVYgGAo2FWUAD5SrwImhU2mq6bG69Rndeu0WrkDO4gNLKLQp9T6SOb5IIlUNNi3tLNllOzXOR3oAPxGwCNqnvuYGybFTbu4kWP/xAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQZAM8D/FDsJ2FJPEwgAAAABJRU5ErkJggg==' }}
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
                    <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('AddGarageService', { company: 'Jaguar' })}>
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
                    <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('AddGarageService', { company: 'Acura' })}>
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
                    <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('AddGarageService', { company: 'Chevrolet' })}>
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

export default BikeDetails;

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