import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    Button,
    FlatList,
    StyleSheet,
    ScrollView
} from 'react-native';
import MultiSelect from 'react-native-multiple-select';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const items = [
    // name key is must. It is to show the text in front
    { id: 1, name: 'Digital Meter Repair' },
    { id: 2, name: 'Clutch' },
    { id: 3, name: 'Break' },
    { id: 4, name: 'Accelator' },
    { id: 5, name: 'AC' },
    { id: 6, name: 'Lock' },
    { id: 7, name: 'Engine' },
    { id: 8, name: 'Puntcure' },
    { id: 9, name: 'Denting & Painting' },
    { id: 10, name: 'Lights' },
    { id: 11, name: 'Battery' },
    { id: 12, name: 'Washing' },
    { id: 13, name: 'Periodic Service' },
];
const ServiceAll = ({ navigation }) => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [notes, setnotes] = useState('');
    const onSelectedItemsChange = (selectedItems) => {
        // Set Selected Items
        setSelectedItems(selectedItems);
    };
    return (

        <View style={{
            flex: 1,
            backgroundColor: 'white',
            padding: 10,
        }}>
            <MultiSelect
                hideTags
                items={items}
                uniqueKey="id"
                onSelectedItemsChange={onSelectedItemsChange}
                selectedItems={selectedItems}
                selectText="Pick Items"
                searchInputPlaceholderText="Search Items..."
                onChangeInput={(text) => console.log(text)}
                tagRemoveIconColor="#CCC"
                tagBorderColor="#CCC"
                tagTextColor="#CCC"
                selectedItemTextColor="#CCC"
                selectedItemIconColor="#CCC"
                itemTextColor="#000"
                displayKey="name"
                searchInputStyle={{ color: '#CCC' }}
                submitButtonColor="#48d22b"
                submitButtonText="Submit"
            />
            <View style={{ alignSelf: 'center', flexDirection: 'row', marginTop: wp('25%'), }}>
                <Text style={{ fontSize: 20, alignSelf: 'center', marginHorizontal: 10 }}>Notes:</Text>
                <TextInput
                    style={{
                        borderColor: '#0d0d0d',
                        borderRadius: 20,
                        borderWidth: 0.5,
                        backgroundColor: '#FFFFFF',
                        height: 60,
                        width: 300
                    }}
                    placeholder={'Notes'}
                    placeholderTextColor={'black'}
                    onChangeText={(text) => setnotes(text)}
                    value={notes}
                    numberOfLines={10}
                    multiline={true}
                />
            </View>
            <TouchableOpacity style={{
                alignSelf: 'flex-end',
                marginVertical: 10,
                marginHorizontal: 10,
                backgroundColor: '#2e64e5',
                height: hp('6%'),
                width: wp('30%'),
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
            }}
                // onPress={() => navigation.navigate('RadiusDetails')}
                onPress={() => navigation.navigate('RadiusDetails')}
            >
                <Text style={{
                    color: '#FFFFFF',
                    fontSize: 18,
                }}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
}

export default ServiceAll;
