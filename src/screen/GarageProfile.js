
import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ImageBackground,
    TextInput,
    StyleSheet,
    ScrollView,
} from 'react-native';

import { useTheme } from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import { Rating, AirbnbRating } from 'react-native-ratings';

const GarageProfile = () => {

    const [image, setImage] = useState('https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png');
    const { colors } = useTheme();

    //     const takePhotoFromCamera = () => {
    //         ImagePicker.openCamera({
    //             compressImageMaxWidth: 300,
    //             compressImageMaxHeight: 300,
    //             cropping: true,
    //             compressImageQuality: 0.7
    //         }).then(image => {
    //             console.log(image);
    //             setImage(image.path);
    //             this.bs.current.snapTo(1);
    //         });
    //     }
    // 
    //     const choosePhotoFromLibrary = () => {
    //         ImagePicker.openPicker({
    //             width: 300,
    //             height: 300,
    //             cropping: true,
    //             compressImageQuality: 0.7
    //         }).then(image => {
    //             console.log(image);
    //             setImage(image.path);
    //             this.bs.current.snapTo(1);
    //         });
    //     }
    // 
    //     renderInner = () => (
    //         <View style={styles.panel}>
    //             <View style={{ alignItems: 'center' }}>
    //                 <Text style={styles.panelTitle}>Upload Photo</Text>
    //                 <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
    //             </View>
    //             <TouchableOpacity style={styles.panelButton} onPress={takePhotoFromCamera}>
    //                 <Text style={styles.panelButtonTitle}>Take Photo</Text>
    //             </TouchableOpacity>
    //             <TouchableOpacity style={styles.panelButton} onPress={choosePhotoFromLibrary}>
    //                 <Text style={styles.panelButtonTitle}>Choose From Library</Text>
    //             </TouchableOpacity>
    //             <TouchableOpacity
    //                 style={styles.panelButton}
    //                 onPress={() => this.bs.current.snapTo(1)}>
    //                 <Text style={styles.panelButtonTitle}>Cancel</Text>
    //             </TouchableOpacity>
    //         </View>
    //     );
    // 
    //     renderHeader = () => (
    //         <View style={styles.header}>
    //             <View style={styles.panelHeader}>
    //                 <View style={styles.panelHandle} />
    //             </View>
    //         </View>
    //     );
    // 
    //     bs = React.createRef();
    //     fall = new Animated.Value(1);
    const ratingCompleted = (rating) => {
        console.log("Rating is: " + rating)
    }
    return (
        <ScrollView>
            <View style={styles.container}>
                {/* <BottomSheet
                ref={this.bs}
                snapPoints={[330, 0]}
                renderContent={this.renderInner}
                renderHeader={this.renderHeader}
                initialSnap={1}
                callbackNode={this.fall}
                enabledGestureInteraction={true}
            /> */}

                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity style={{ marginTop: wp('3%') }}>
                        <View
                            style={{
                                height: 100,
                                width: 100,
                                borderRadius: 15,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <ImageBackground
                                source={{
                                    uri: image,
                                }}
                                style={{ height: 100, width: 100 }}
                                imageStyle={{ borderRadius: 15 }}>
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
                    <Text style={{ marginTop: 10, fontSize: 18, fontWeight: 'bold' }}>
                        Sai Garage
                    </Text>
                </View>


                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: wp('4%') }}>
                    <View style={{ flexDirection: 'column', elevation: 1, borderRadius: 10, marginHorizontal: 5, width: '45%', height: '110%', alignItems: 'center' }}>
                        <Image
                            source={{
                                uri: 'https://cdn3.vectorstock.com/i/1000x1000/80/92/construction-man-icon-flat-style-vector-23298092.jpg',
                            }}
                            style={{ height: 65, width: 65, borderRadius: 25, marginTop: wp('3%') }}
                        >
                        </Image>
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Total Workers</Text>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', }}>2</Text>
                    </View>
                    <View style={{ flexDirection: 'column', elevation: 1, borderRadius: 10, marginHorizontal: 5, width: '45%', height: '110%', alignItems: 'center' }}>
                        <Image
                            source={{
                                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdkdNwT7cbhxE1hghV-shnaEgblsfba2c14UmJQRhtrTdUoSlhOgsr0IHSUMw73Ql_08k&usqp=CAU',
                            }}
                            style={{ height: 65, width: 65, borderRadius: 25, marginTop: wp('3%') }}
                        >
                        </Image>
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Available Workers</Text>
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>2</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: wp('5%') }}>
                    <View style={{ flexDirection: 'column', elevation: 1, borderRadius: 10, marginHorizontal: 5, width: '45%', height: '110%', alignItems: 'center' }}>
                        <Image
                            source={{
                                uri: 'data:image/png;base64,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',
                            }}
                            style={{ height: 65, width: 65, borderRadius: 25, marginTop: wp('3%') }}
                        />

                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Total Service</Text>
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>2</Text>
                    </View>
                    <View style={{ flexDirection: 'column', elevation: 1, borderRadius: 10, marginHorizontal: 5, width: '45%', height: '110%', alignItems: 'center' }}>
                        <Image
                            source={{
                                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-AihLj3Zq5iDT8TC_sZ8RK2gSb2PpMwkUCCCr79qdW8vGZVw_Mh3hGHFd6nYYt_rdTI0&usqp=CAU',
                            }}
                            style={{ height: 65, width: 65, borderRadius: 25, marginTop: wp('3%') }}
                        />
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Happy clients</Text>
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>1</Text>
                    </View>
                </View>


                <View style={{ borderRadius: 10, alignItems: 'center', marginTop: wp('3%') }}>

                    <AirbnbRating
                        showRating
                        onFinishRating={ratingCompleted}
                        style={{ paddingVertical: 10 }}
                    />
                </View>

                {/* <View style={{ flexDirection: 'column', elevation: 1, borderRadius: 10, marginVertical: 5, width: '50%', height: '10%', alignSelf: 'center', marginTop: wp('1%') }}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'center', alignSelf: 'center', marginTop: wp('1%') }}>Review</Text>
                    <Text style={{ fontSize: 15, fontWeight: 'bold', justifyContent: 'center', textAlign: 'center' }}>3</Text>
                </View> */}


            </View>
            <View style={{
                flexDirection: 'row',
                marginTop: wp('10%')
            }}>
                <TouchableOpacity
                    onPress={() => null}
                    style={{
                        alignSelf: 'center',
                        marginHorizontal: 12,
                        backgroundColor: colors.primary,
                        height: hp('6%'),
                        width: wp('25%'),
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10,
                    }}>
                    <Text style={{
                        color: '#FFFFFF',
                        fontSize: 18,
                    }}>Call</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    alignSelf: 'center',
                    marginHorizontal: 10,
                    backgroundColor: colors.primary,
                    height: hp('6%'),
                    width: wp('30%'),
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                }}>
                    <Text style={{
                        color: '#FFFFFF',
                        fontSize: 18,
                    }}>Book</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    alignSelf: 'center',
                    marginHorizontal: 10,
                    backgroundColor: colors.primary,
                    height: hp('6%'),
                    width: wp('30%'),
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                }}>
                    <Text style={{
                        color: '#FFFFFF',
                        fontSize: 18,
                    }}>Grab</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default GarageProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});