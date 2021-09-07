import React, { Component } from 'react';
import { Text, Alert, Button, View, StyleSheet, Image, TouchableOpacity, Platform, } from 'react-native';
import { hasNotch } from 'react-native-device-info';
import { Icon } from 'react-native-elements';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { txtappname } from '../helper/strings';
import styles from '../helper/style';

export default class HeaderView extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const navigation = this.props.navigation
        let profile = this.props.profile
        let type = this.props.type
        return (
            <>
                <View style={Platform.OS == 'ios' ? styles.headerios : styles.header}>
                    {
                        type == 'back' ?
                            <TouchableWithoutFeedback onPress={() => this.props.navigation.goBack()} style={{ marginRight: wp('90%') }}>
                                <Icon
                                    type="ionicon"
                                    color='white'
                                    name="chevron-back-outline"
                                    size={24}
                                    style={{ marginTop: Platform.OS == 'ios' ? hasNotch() ? wp('9%') : wp('9%') : 0, marginLeft: Platform.OS == 'android' ? 10 : 0 }}

                                />
                            </TouchableWithoutFeedback> : <TouchableWithoutFeedback onPress={() => navigation.openDrawer()} style={{ marginRight: wp('90%') }}>
                                <Icon
                                    type="ionicon"
                                    color='white'
                                    name={Platform.OS === "ios" ? "ios-menu" : "md-menu"}
                                    size={24}
                                    style={{ marginTop: Platform.OS == 'ios' ? hasNotch() ? wp('9%') : wp('9%') : 0, marginLeft: Platform.OS == 'android' ? 10 : 0 }}
                                />
                            </TouchableWithoutFeedback>
                    }

                    <Text style={styles.headerText}>{this.props.title}</Text>

                    {/* {type=='back'?
                    <View>
                    <TouchableWithoutFeedback onPress={() => navigation.openDrawer()} style={{marginRight:wp('90%')}}>
                        <Icon
                            type="ionicon"
                            color='white'
                            name={Platform.OS === "ios" ? "ios-menu" : "md-menu"}
                            size={24}
                            style={{marginTop:Platform.OS=='ios'? hasNotch() ? wp('9%'): wp('9%') :0 ,marginLeft : Platform.OS == 'android' ? 10:0}}
                        />
                    </TouchableWithoutFeedback>
                    <Text style={styles.headerText}>{this.props.title}</Text>
                    </View>                  

                      :null}*/}
                </View>
            </>
        )
    }
}


