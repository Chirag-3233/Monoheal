
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
import OTPTextView from 'react-native-otp-textinput';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const OtpScreen = ({ navigation }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [otpInput, setotpInput] = useState('');
    const [inputText, setinputText] = useState('');

    return (
        <KeyboardAvoidingView>
            <ScrollView contentContainerStyle={styles.container}>
                <Image
                    source={require('../images/logo.png')}
                    style={styles.logo}
                />
                <Text style={styles.letgo}>Let's go!</Text>
                <Text style={styles.text}>Enter the OTP to continue!</Text>

                {/* <FormInput

                    labelValue={email}
                    onChangeText={(userEmail) => setEmail(userEmail)}
                    placeholderText="Enter the OTP"
                    iconType="user"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                /> */}

                <View style={{ marginTop: wp('8%') }}>
                    <OTPTextView
                        handleTextChange={(e) => { }}
                        containerStyle={styles.textInputContainer}
                        textInputStyle={styles.roundedTextInput}
                    // defaultValue="1234"
                    />
                </View>

                <FormButton
                    buttonTitle="Continue"
                    onPress={() => navigation.navigate('NameScreen')}
                />
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default OtpScreen;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: wp('13%')
    },
    logo: {
        height: 150,
        width: 150,
        resizeMode: 'cover',
        marginTop: wp('4%'),
    },
    letgo: {
        // fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 35,
        marginTop: wp('10%'),
        // marginBottom: wp('1%'),
        color: 'black',
    },
    text: {
        // fontFamily: 'Kufam-SemiBoldItalic',
        fontFamily: 'bold',
        fontSize: 20,
        marginTop: wp('8%'),
        // marginBottom: wp('1%'),
        color: '#051d5f',
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
    textInput: {
        height: 40,
        width: '80%',
        borderColor: '#000',
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        letterSpacing: 5,
        marginBottom: 10,
        textAlign: 'center',
    },
    roundedTextInput: {
        borderRadius: 8,
        borderWidth: 2,
    },
    textInputContainer: {
        marginBottom: 20,
    }
});