import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ViewMoreText from 'react-native-view-more-text';
// import SeeMore from 'react-native-see-more-inline';
// const LOREM_IPSUM_MEDIUM =
//     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pellentesque aliquam leo nec venenatis. Vivamus rutrum aliquet ultrices. In vel turpis quis velit consectetur consequat.';

const HelpSupport = (props) => {
    const renderViewMore = (onPress) => {
        return (
            <Text onPress={onPress}>View more</Text>
        )
    };
    const renderViewLess = (onPress) => {
        return (
            <Text onPress={onPress}>View less</Text>
        )
    };
    return (
        <View style={{
            flexDirection: 'column',
            height: wp('35%'),
            width: wp('35%'),
            elevation: 3,
            marginLeft: 12,
            borderColor: '#dddddd',
            borderRadius: 10,
            padding: 10,
        }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>{props.name}</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>{props.text}</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 18, textAlign: 'left', color: 'grey', marginTop: -wp('5%') }}>{props.text1}</Text>
            {/* <View style={{ paddingHorizontal: 10, marginTop: wp('2%') }}>
                <SeeMore numberOfLines={2} linkStyle={{ fontWeight: '500' }}>
                    {LOREM_IPSUM_MEDIUM}
                </SeeMore>
            </View> */}
            {/* <ViewMoreText
                numberOfLines={3}
                renderViewMore={renderViewMore}
                renderViewLess={renderViewLess}
                textStyle={{ textAlign: 'center' }}
            >
                <Text>
                    Lorem ipsum dolor sit amet, in quo dolorum ponderum,onstituto eu. Eum enim tantas sadipscing ne, ut omnes malorum nostrum cum. Errem populo qui ne, ea ipsum antiopam definitionem eos.
                </Text>
            </ViewMoreText> */}
        </View>
    );
}

export default HelpSupport;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});