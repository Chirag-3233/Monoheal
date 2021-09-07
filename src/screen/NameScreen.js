
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
const NameScreen = ({ navigation }) => {
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
                <Text style={styles.text}>Enter your Name to get in!</Text>
                <View style={{ marginTop: wp('6%') }}>
                    <FormInput
                        labelValue={email}
                        onChangeText={(userEmail) => setEmail(userEmail)}
                        placeholderText="Enter your name"
                        iconType="user"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                </View>

                <FormButton
                    buttonTitle="Continue"
                    onPress={() => navigation.navigate('Home')}
                />

            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default NameScreen;

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
    letgo: {
        // fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 35,
        marginTop: wp('9%'),
        // marginBottom: wp('1%'),
        color: 'black',
    },
    text: {
        // fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 20,
        marginTop: wp('8%'),
        color: '#051d5f',
    },
});