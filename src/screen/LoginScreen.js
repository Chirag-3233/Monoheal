
import React, { useContext, useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    ScrollView
} from 'react-native';
import FormInput from '../components/FormInput'
import FormButton from '../components/FormButton'
import SocialButton from '../components/SocialButton'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <KeyboardAvoidingView>
            <ScrollView contentContainerStyle={styles.container}>
                <Image
                    source={require('../images/logo.png')}
                    style={styles.logo}
                />
                <Text style={styles.text}>Login to continue!</Text>

                <FormInput

                    labelValue={email}
                    onChangeText={(userEmail) => setEmail(userEmail)}
                    placeholderText="Enter Email/number"
                    iconType="user"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                />

                <FormButton
                    buttonTitle="Get OTP"
                    onPress={() => navigation.navigate('OTPScreen')}
                />
                <View style={styles.textPrivate}>
                    <Text style={styles.color_textPrivate}>
                        By registering, you confirm that you accept our{' '}
                    </Text>
                    <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
                        <Text style={[styles.color_textPrivate, { color: '#e88832' }]}>
                            Terms of service
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.color_textPrivate}> and </Text>
                    <Text style={[styles.color_textPrivate, { color: '#e88832' }]}>
                        Privacy Policy
                    </Text>
                </View>
                <View style={{ marginTop: -wp('4%') }}>
                    <SocialButton
                        buttonTitle="Sign In with Facebook"
                        btnType="facebook"
                        color="#4867aa"
                        backgroundColor="#e6eaf4"
                    // onPress={() => fbLogin()}
                    />

                    <SocialButton
                        buttonTitle="Sign In with Google"
                        btnType="google"
                        color="#de4d41"
                        backgroundColor="#f5e7ea"
                    // onPress={() => googleLogin()}
                    />
                </View>
                {/* <TouchableOpacity
                    style={styles.forgotButton}
                // onPress={() => navigation.navigate('Signup')}
                >
                    <Text style={styles.navButtonText}>
                        Don't have an acount? Create here
                    </Text>
                </TouchableOpacity> */}
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: wp('10%')
    },
    logo: {
        height: 150,
        width: 150,
        resizeMode: 'cover',
        marginTop: wp('4%'),
    },
    text: {
        // fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 28,
        marginTop: wp('5%'),
        // marginBottom: wp('1%'),
        color: '#051d5f',
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 35,
        justifyContent: 'center',
    },
    color_textPrivate: {
        fontSize: 13,
        fontWeight: '400',
        fontFamily: 'Lato-Regular',
        color: 'grey',
    },
    navButton: {
        marginTop: 15,
    },
    forgotButton: {
        marginVertical: 35,
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
        // fontFamily: 'Lato-Regular',
    },
});