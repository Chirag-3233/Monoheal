/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// import React, { useRef } from 'react';
// import {
//     SafeAreaView,
//     StyleSheet,
//     View,
//     Image,
//     Text,
//     Dimensions,
// } from 'react-native';
// import Swiper from 'react-native-swiper';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// // import DiscoverScreen from './DiscoverScreen';
// // import WelcomeScreen from './WelcomeScreen';
// // eslint-disable-next-line quotes
// const w = Dimensions.get('window').width;
// const h = Dimensions.get('window').height;
// const OnboardingScreen = () => {
//     return (
//         <Swiper
//             // eslint-disable-next-line react-native/no-inline-
//             // loop={false}
//             buttonWrapperStyle={{
//                 backgroundColor: "transparent",
//                 flexDirection: "row",
//                 position: "absolute",
//                 bottom: 0,
//                 left: 0,
//                 flex: 1,
//                 paddingHorizontal: 30,
//                 paddingVertical: 20,
//                 justifyContent: "flex-end",
//                 alignItems: 'flex-end',
//             }}
//             // ref="swiper"
//             style={styles.wrapper}
//             showsButtons={true}
//             paginationStyle={{
//                 marginRight: w * 0.7,
//                 marginBottom: h * 0.02,
//             }}
//             activeDotColor="#87CEEB"
//             dotColor="#998FA2"
//             nextButton={
//                 <View
//                     style={{
//                         height: 60,
//                         borderRadius: 30,
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         width: 60,
//                         backgroundColor: '#87CEEB',
//                     }}>
//                     <AntDesign name="arrowright" size={22} color="#FFF" />
//                 </View>
//             }
//             prevButton={
// 
//                 <View
//                     style={{
//                         backgroundColor: 'red',
//                         height: 60,
//                         borderRadius: 30,
//                         alignItems: "center",
//                         justifyContent: "center",
//                         width: 60,
//                         backgroundColor: '#87CEEB',
//                         marginHorizontal: 20,
//                         // eslint-disable-next-line prettier/prettier
//                     }}
// 
//                 >
//                     <AntDesign name="arrowleft" size={22} color="#FFF" />
//                 </View>
//             }
//         >
//             <View style={styles.slide}>
//                 <Image source={require('../images/1.png')} style={styles.img} />
//                 <Text style={styles.title}>Get Started</Text>
//                 <Text style={styles.text}>
//                     When I was 5 years old, my mother always told me that happiness was
//                     the key to life. When I went to school, they asked me what I wanted to
//                     be when I grew up.
//                 </Text>
//             </View>
//             <View style={styles.slide}>
//                 <Image source={require('../images/2.png')} style={styles.img} />
//                 <Text style={styles.title}>Discover</Text>
//                 <Text style={styles.text}>
//                     When I was 5 years old, my mother always told me that happiness was
//                     the key to life. When I went to school, they asked me what I wanted
//                     to be when I grew up.
//                 </Text>
//             </View>
//             <View
// 
//                 style={styles.slide}>
//                 <Image source={require('../images/3.png')} style={styles.img} />
//                 <Text style={styles.title}>Welcome</Text>
//                 <Text style={styles.text}>
//                     When I was 5 years old, my mother always told me that happiness was
//                     the key to life. When I went to school, they asked me what I wanted
//                     to be when I grew up.
//                 </Text>
//             </View>
//             {/* 
//             <View>
//                 <DiscoverScreen onPress={() => this.refs.swiper.scrollBy(1)} />
//             </View>
//             <View>
//                 <WelcomeScreen
//                     onPress={() => this.refs.swiper.scrollBy(-1)}
//                     onNextPress={() => this.refs.swiper.scrollBy(1)}
//                 // onNextPress={() => navigation.navigate('OTPScreen')}
//                 />
//             </View> */}
//         </Swiper >
//     );
// };
// 
// const styles = StyleSheet.create({
//     slide: {
//         flex: 1,
//         paddingTop: 25,
//         marginHorizontal: 30,
//     },
//     img: {
//         alignSelf: "center",
//         borderTopRightRadius: 80,
//         borderBottomLeftRadius: 80,
//         height: h * 0.5,
//         width: w * 0.9,
//     },
//     title: {
//         fontFamily: "bold",
//         marginTop: 60,
//         marginHorizontal: 10,
//         fontSize: 32,
//     },
//     text: {
//         color: "#767676",
//         fontFamily: "bold",
//         marginTop: 20,
//         fontSize: 16,
//         lineHeight: 25,
//         marginLeft: 10,
//     },
// });
// 
// export default OnboardingScreen;


import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Onboarding from 'react-native-onboarding-swiper';
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
const Dots = ({ selected }) => {
    let backgroundColor;

    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

    return (
        <View
            style={{
                width: 8,
                height: 8,
                borderRadius: 5,
                marginHorizontal: 5,
                backgroundColor
            }}
        />
    );
}

const Skip = ({ ...props }) => (
    <TouchableOpacity
        style={{ marginHorizontal: 35 }}
        {...props}
    >
        <Text style={{ fontSize: 16 }}>Skip</Text>
    </TouchableOpacity>
);

const Next = ({ ...props }) => (
    <TouchableOpacity
        style={{ marginHorizontal: 35 }}
        {...props}
    >
        <Text style={{ fontSize: 16 }}>Next</Text>
    </TouchableOpacity>
);

// const Done = ({ ...props }) => (
//     <TouchableOpacity
//         style={{ marginHorizontal: 10 }}
//         {...props}
//     >
//         <Text style={{ fontSize: 16 }}>Done</Text>
//     </TouchableOpacity>
// );

const OnboardingScreen = ({ navigation }) => {
    return (
        <Onboarding
            SkipButtonComponent={Skip}
            NextButtonComponent={Next}
            // DoneButtonComponent={Done}
            showDone={true}
            DotComponent={Dots}
            onSkip={() => navigation.replace("Login")}
            onDone={() => navigation.navigate("Login")}
            pages={[
                {
                    // backgroundColor: '#87CEEB',
                    image: <Image style={styles.img} source={require('../images/1.png')} />,
                    title: 'Get Started',
                    titleStyles: { color: 'black', fontFamily: 'bold' },
                    subtitle: 'When I was 5 years old, my mother always told me that happiness was the key to life. When I went to school, they asked me what I wanted    to be when I grew up.',
                    subTitleStyles: { color: 'grey' }
                },
                {
                    // backgroundColor: '#fdeb93',
                    image: <Image style={styles.img} source={require('../images/2.png')} />,
                    title: 'Discover',
                    titleStyles: { color: 'black', fontFamily: 'bold' },
                    subtitle: 'When I was 5 years old, my mother always told me that happiness was the key to life. When I went to school, they asked me what I wanted    to be when I grew up.',
                    subTitleStyles: { color: 'grey' }
                },
                {
                    // backgroundColor: '#87CEEB',
                    image: <Image style={styles.img} source={require('../images/3.png')} />,
                    title: 'Welcome',
                    titleStyles: { color: 'black', fontFamily: 'bold' },
                    subtitle: 'When I was 5 years old, my mother always told me that happiness was the key to life. When I went to school, they asked me what I wanted    to be when I grew up.',
                    subTitleStyles: { color: 'grey' }
                },
            ]}
        />
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // alignItems: 'center',
        // backgroundColor: 'red',
        // justifyContent: 'center'
    },
    img: {
        marginTop: - wp('25%'),
        alignSelf: "center",
        // backgroundColor: 'red',
        borderTopRightRadius: 80,
        borderBottomLeftRadius: 80,
        height: h * 0.5,
        width: w * 0.9,
    },
});
