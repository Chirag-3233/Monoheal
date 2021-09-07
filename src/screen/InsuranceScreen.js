
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
export default function InsuranceScreen() {

    const [index, setIndex] = useState(0);
    const [notes, setnotes] = useState('');
    const [routes] = useState([
        { key: 'first', title: 'Explore' },
        { key: 'second', title: 'My Policy' },
        // { key: 'third', title: 'Painter' },
    ]);
    const _handleIndexChange = (index) => {
        setIndex(index)

    }
    const Explore = () => {

        return (
            <ScrollView>
                <View>
                    <Text>Inprogress</Text>
                </View>
            </ScrollView>
        )
    }
    const Policy = () => {

        return (
            <View>
                <Text>Inprogress</Text>
            </View>
        )
    }

    //     const Painter = () => {
    // 
    //         return (
    //             <View>
    //                 <Text>Inprogress</Text>
    //             </View>
    //         )
    //     }


    return (
        <View style={{ flex: 1, marginTop: -25 }}>
            <TabView
                navigationState={{ index, routes }}
                style={styles.container}
                renderScene={SceneMap({
                    first: Explore,
                    second: Policy,
                    // third: Painter

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

