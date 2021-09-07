import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
class ModelCar extends Component {
    render() {
        return (
            <View style={{
                flexDirection: 'column',
                height: 140,
                width: 300,
                marginLeft: 20,
                borderColor: '#dddddd',
                // shadowColor: '#ccc',
                // shadowOffset: { width: 0, height: 3 },
                // shadowOpacity: 0.5,
                // shadowRadius: 5,
                // elevation: 10,
            }}>

                <Image source={this.props.imageUri}
                    style={{
                        // flex: 1,
                        height: 150,
                        width: "100%",
                        resizeMode: 'cover',
                        marginTop: wp('4%'),
                    }}
                />
                <Text style={{ fontWeight: 'bold', alignSelf: 'center', fontSize: 20 }}>{this.props.name}</Text>
            </View>
            // 
            //             <View style={{
            //                 position: 'absolute',
            //                 marginTop: Platform.OS === 'ios' ? 40 : 15,
            //                 backgroundColor: 'yellow',
            //                 flexDirection: "row",
            //                 backgroundColor: '#fff',
            //                 width: '92%',
            //                 alignSelf: 'center',
            //                 borderRadius: 10,
            //                 padding: 10,
            //                 shadowColor: '#ccc',
            //                 shadowOffset: { width: 0, height: 3 },
            //                 shadowOpacity: 0.5,
            //                 shadowRadius: 5,
            //                 elevation: 10,
            //             }}>
            //                 <Image
            //                     source={this.props.imageUri}
            //                     style={{
            //                         height: 150,
            //                         width: "100%",
            //                         resizeMode: 'cover',
            //                         marginTop: wp('4%'),
            //                     }}
            //                 />
            //                 <Text>{this.props.name}</Text>
            // 
            //             </View>



        );
    }
}
export default ModelCar;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});