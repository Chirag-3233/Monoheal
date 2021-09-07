
import React, { useContext, useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    FlatList,
    StyleSheet,
    ScrollView
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { CommonActions, useNavigation, useRoute } from '@react-navigation/native';

const ModelScreen = (props) => {
    const navigation = useNavigation()
    const route = useRoute()
    const company = route.params.company
    const screen = route.params.screen
    console.log("companyname===>>>>", route.params.company)
    const [selectedItem, setSelectedItem] = useState('');

    return (
        <View>
            <View style={{
                position: 'absolute',
                marginTop: Platform.OS === 'ios' ? 40 : 15,
                flexDirection: "row",
                backgroundColor: '#fff',
                width: '92%',
                alignSelf: 'center',
                borderRadius: 10,
                padding: 10,
                shadowColor: '#ccc',
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.5,
                shadowRadius: 5,
                elevation: 10,
            }}>
                <Ionicons style={{ marginTop: 0 }} name="ios-search" size={25} />
                <TextInput
                    placeholder="Search Car model"
                    placeholderTextColor="grey"
                    autoCapitalize="none"
                    style={{ flex: 1, padding: 0, marginLeft: 10 }}
                />
            </View>



            <ScrollView>
                {screen == 'tesla' ?
                    <View style={styles.categoryContainer}>
                        <TouchableOpacity
                            style={styles.categoryBtn}
                            onPress={() => { navigation.navigate('FuelTypeScreen', { company: company, screen: 'tesla', model: 'Tesla Model M', screen: 'tesla' }) }
                            }
                        >
                            <View style={styles.categoryIcon}>
                                <Image
                                    source={require('../images/tesla-m.jpg')}
                                    style={{
                                        height: 62,
                                        width: '90%',
                                        resizeMode: 'cover',
                                    }}
                                />
                            </View>
                            <Text style={styles.categoryBtnTxt}>Tesla Model M</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.categoryBtn}
                            onPress={() => navigation.navigate('FuelTypeScreen', { company: company, model: 'Tesla Model S', screen: 'tesla' })}>
                            <View style={styles.categoryIcon}>
                                <Image
                                    source={{ uri: 'https://www.motortrend.com/uploads/sites/10/2015/11/2015-tesla-model-s-sedan-angular-front.png' }}
                                    style={{
                                        height: 62,
                                        width: '90%',
                                        resizeMode: 'cover',
                                    }}
                                />
                            </View>
                            <Text style={styles.categoryBtnTxt}>Tesla Model S</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.categoryBtn}
                            onPress={() => navigation.navigate('FuelTypeScreen', { company: company, model: 'Tesla Model B', screen: 'tesla' })}
                        >
                            <View style={styles.categoryIcon}>
                                <Image
                                    source={require('../images/tesla-s.png')}
                                    style={{
                                        height: 62,
                                        width: '90%',
                                        resizeMode: 'cover',
                                    }}
                                />
                            </View>
                            <Text style={styles.categoryBtnTxt}>Tesla Model B</Text>
                        </TouchableOpacity>
                    </View>
                    :
                    <>
                        <View style={styles.categoryContainer}>
                            <TouchableOpacity
                                style={styles.categoryBtn}
                                onPress={() => { navigation.navigate('FuelTypeScreen', { company: company, model: 'City TVTEC' }) }
                                }
                            >
                                <View style={styles.categoryIcon}>
                                    <Image
                                        source={{ uri: 'https://imgd.aeplcdn.com/0x0/n/cw/ec/40535/all-new-city-exterior-right-front-three-quarter.jpeg' }}
                                        style={{
                                            height: 62,
                                            width: '90%',
                                            resizeMode: 'cover',
                                        }}
                                    />
                                </View>
                                <Text style={styles.categoryBtnTxt}>City TVTEC</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.categoryBtn}
                                onPress={() => { navigation.navigate('FuelTypeScreen', { company: company, model: 'Amaze' }) }}>
                                <View style={styles.categoryIcon}>
                                    <Image
                                        source={{ uri: 'https://cdn.autoportal.com/img/new-cars-gallery/honda/amaze/colors/2688f0228dbbe61378ed721d41e90d96.jpg' }}
                                        style={{
                                            height: 62,
                                            width: '90%',
                                            resizeMode: 'cover',
                                        }}
                                    />
                                </View>
                                <Text style={styles.categoryBtnTxt}>Amaze</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.categoryBtn}
                                onPress={() => { navigation.navigate('FuelTypeScreen', { company: company, model: 'City' }) }}
                            >
                                <View style={styles.categoryIcon}>
                                    <Image
                                        source={{ uri: 'data:image/jpeg;base64,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' }}
                                        style={{
                                            height: 62,
                                            width: '90%',
                                            resizeMode: 'cover',
                                        }}
                                    />
                                </View>
                                <Text style={styles.categoryBtnTxt}>City</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.categoryContainer, { marginTop: 10 }]}>
                            <TouchableOpacity style={styles.categoryBtn} onPress={() => { navigation.navigate('FuelTypeScreen', { company: company, model: 'Brio' }) }}>
                                <View style={styles.categoryIcon}>
                                    <Image
                                        source={{ uri: 'https://s3.india.com/auto/wp-content/uploads/2016/11/9b8e7f0b20f81b37092975f4d04f4fad_251X188_1.jpg' }}
                                        style={{
                                            height: 62,
                                            width: '90%',
                                            // borderRadius: 25,
                                            // resizeMode: 'cover',
                                            // marginTop: wp('4%'),
                                        }}
                                    />
                                </View>
                                <Text style={styles.categoryBtnTxt}>Brio</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.categoryBtn} onPress={() => { navigation.navigate('FuelTypeScreen', { company: company, model: 'Jazz' }) }}>
                                <View style={styles.categoryIcon}>
                                    <Image
                                        source={{ uri: 'https://imgd.aeplcdn.com/0x0/n/cw/ec/46891/jazz-bs6-exterior-left-front-three-quarter.jpeg?v=637329212373338383' }}
                                        style={{
                                            height: 62,
                                            width: '90%',
                                            resizeMode: 'cover',
                                        }}
                                    />
                                </View>
                                <Text style={styles.categoryBtnTxt}>Jazz</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.categoryBtn} onPress={() => { navigation.navigate('FuelTypeScreen', { company: company, model: 'Civic' }) }}>
                                <View style={styles.categoryIcon}>
                                    <Image
                                        source={{ uri: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWEhgVFhYZGRgZGhUcGBwaGBkZHBgaGRgZHRocGBocJC4lHR4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjQsJSw0NDQ0NDQ2MTQ0NDE0MTQ0NDQ0NDY2ND80PTRANDQxNTQxMTQ/NDQ0NDQ1NzQ/NDQxNP/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcCAQj/xAA+EAACAQIDBAgDBgYCAQUAAAABAgADEQQSIQUxQVEGIjJhcYGhsRNCkQdScpLB0RRigsLh8KKyIxUWJEPx/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAECAwQF/8QAKxEAAgEDBAEDBAIDAQAAAAAAAAECAxEhBBIxQVETFJEiMmFxUoFCodEF/9oADAMBAAIRAxEAPwDs0REAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBET4TAF4kdiNsUE7VQX5DrH6C8j63SlB2adRvJVHqb+ki6NI0py4TLAYE5ptLalR8Q1ZVZQURMufQZSxzDdY6j6b5lpdLMUqhcqNbixDMfGzC/0ld6Oj2NVpNfB0aJzZ+l2M+6B4Jf8AeYH6YYsbzbxQD3EepEn2FbwjqETln/vPFffH5V/afR00xP3x+Vf2keoh7Ct+DqcTmC9N8QN5U+K/tM6dP6o7SUz+YfrJ3oq9FWXR0iJRKH2hL81E+Ktf0I/WSuG6bYVt5ZPxKfdbyVJeTKWmqx5iyzRNTB4+nVF6bqw/lYG3iOE25Yyaa5PsREECIiAIiIAiIgCIiAIiIAiIgCIiAIiIB8iJpY7adGiL1aiIP53Vfc6wSk3wbsw166opZ2CqN5JAA8zKbtn7QqKDLhx8Z+eqoveWIufAfUSibR6QVKzZqrl2B6qgWVfwqNPPU98q5JHRS0s5ZlhHR8d0vTVaIv8AztcD+ld7ennK7i9umq1rtUPLTKPIEKD5lu6UnCYp61XKeqgBL775d/D23czLBsnb1LDUkzU+uRctv0YkgAcBaw05R+xOcIYpr+2TVDCV34qg77sfTJNxdhOd9f6Bx/fI7DdNEZgABqbb7EX7jJf/ANYQfd9TCt4MnWqvsjtobOakqsauYE2t1wdxJN89uHKaC0XdwinXLmNyN9wAOyefpPfSHa4d1UWsqk6aauwH9vrMWwcZapUf8CjusCT/ANhLqMWuCY6qtHhnqrsvEJuW/wCE/wCR/wBZrHE1UOoZT3gj2ysfoZaP4vNvMzKFbQgMp3gi4I8DKukujoh/6VRfck0V/DbfI7ahhzIG/wDEBv7iPObqdIqBNsuvLLr4T5tvYAVTVo7vmXfpzHMeo4cpXKNdqZLpxFmUgEi36i/mPKUSs7SOyVRVqTnRWVyv+FtTaKNuonzAAmc0wRf4KAHiSP2lWw2JJ1vv485NUHcU3JvYWIvpu32m21HlPVVOmbT7MRt60vyXmGp0YRuCDwBHsZjpYw237pM4OpdAQb3hxj4I91W/kyu4noo6jNSfI43HrH9QRJDZG1MdSFqgGIUb1sQ6jmra5v6tZYKb3nqpQB13HmNDIsikqk5cu/7NvZW1qVdbodR2lbRlPJl4SRnPNqbJqI/x6LMHHG9yfM+x0kx0c6VrVIpVrJV3Dgrkcr7m/llb+SUk1dFsifJ9kkCIiAIiIAiIgCIiAIiIAiIgCIiAQ3SHb1HB0viVmIBOVQASWa17ADw37hOE0abVWZ3JLE3YneSdSTfhOg/ast6uHvuC1LX55kvb6CUBa9je55eQv+5mUnd2PT0kVGO7tmVsI+5QLdx3+MLs+p9wnw8/3npMcRxHnN2jtdhwB8DaVO3dFqzIpaWVKgZbPdctxrfcbT3VBdQDoQAPpJ6nt1CcrDXl1T6TJnwr7wo8inqLTTcjzpaL+LKi2HmZajBe0w14E7rSznZNB+w1vBg3vea9bo+eDA+II9rxuRnLSVVwrkCcWRcEk9nUnXXWSmzMeVd1I6oINwdSbW/SaFfYdYOdAwuD1W4a232hcM6FiykZjc6Eeu6XcsYMJUJx5iyyU9oBjo9u46GSWF2gV5Ef7ulNGo5z4ruvZYjz09dJG9mW3JfaO3baGRGLZPiFk0VtSOXO3hqfDMOAkXQcg2dwSba3UDyOt5v/AMMpXqVFDAgi7La47+EiUlLB6NDT16NqiX9X6PWDAV8pGhJt3HiPA7xJr4rfDZd9wQO7ThK7Tqq6Eg9k2YX1XcRbwOg/DJXB4nMN+o0Pf3275aEr4fJlrqCi1VisP/TPNCrY2O4g+0k9mbQCgqx0vpxkbUw44aT4lK2+a2POuW3D4xDuYe3vJGjVB4ym0HA//ZIUsUn3gPMStiUyyugIlS6S7Fv10HW4j71uXJuRkxT2oijrOB4nT1mHE7YoMCpq07/iW49ZDVyyusoreD6X4pAq5lZV0u63Jt94gg3H6c9DfujW2BiqHxMuUhmRgDcZltcqeKm4M5x0mZEvVCqQ3bBawe/FbA3Phv8AGanRPpnUwwdRSz0i2YKSQwvYGzkamwG8a24Siunk6N2+KW3Pldnap9lU2f06wlTRmNI8nFh+YXHtLLhsSjrmR1Yc1YMPqITT4KShKP3KxniIklRERAEREAREQBERAEREA5N9qe0s+ITDi2WmuZued9wJ32ChTbjm7hKMacnum1ErtHEE8XB8iiEehEhV3TOXJ6FHEVY1jSM9KrAad/6TG+1qYNrk94Gk2cNiFcXQg8+Y8RKuLN41YvCZhKksCVTubrBh/uvGbgM+QDILs9ZpkTHOu5mHmfYzFefLwFI3KW2nF7kHXiO4Dh4TYobeVuANt+VgfSRKbvNvczXSg17sEvzUEE/75wWVRrsswxWHftAX/mT9RMi7Oovqj68AHv8A8TK18OMxHOLtEtRlykzdxvR+oWuERvO39shtpbLqJ1mpgKPmDLlHpeSNPaVROy5HdczJisa9amUfrA23EA6EEe0smYzpY+lv5IvZuMNJg6EONQRrYi27utvlqR3uGTqn7raaHheVvB4REcXLZQRcFPA+EuNPalJ/mHnIbzdG1JKNPZLK7ueqeIZlBZzTPegK9/WG7WY6uEqEXWoWHME/23mTNvKMNdbdoX9xNd2G/LY80Nj+n6y3qSM3oaMuFY1aocHKAGPElj/0PWmo2FxD/wD2EDkhVfcX9ZKfxzbswYfdca+usGpTPaQr3qTb6SHOT7LrR048JMh02e6G+Qs3FmIcn814dqg+Vh4Lb2En6KKexV8nAP7GbiIeKg96G/obH6XkZfZfZCP+K+CnNWPEnz/zArS6inTO8em7xB3T5/6dQbeq/QRYb4+CmF77xMuGxTocyOyHmrFD9Rv87y1t0eoHdp4E/vMD9FUPZdh5395FmRvg8H3ZvTfFJYF1rD7tQZW8mW1/O8tezftAw7nLWVqDcc3WX8wFx5gSkVeib/K4PiP2mrV2VXQZaiZ0HI9Zfwk+26WTkjCdChPjD/B22hXV1DIwZTqCCCCO4iZpxbo9tKpgayvdmoObOLEc7Eqey4t5i/jOyYesHRXU3VgGU8wwuPSaJ3PNrUvTla9zNERJMhERAEREAREQDlf2gYQfxpb76I3oU/snPukr5KaoNM1yfAcP95Tp32gdHqr1f4lHYjKqsDqEy8rblNyeOpM5TtUl66K3yjX+m7frKW+o6VJKnya2B2YWtdSzEaKL+w1My1cA1NsyXR14G+vcQfadB2ZsxkwhCaValKo+a2oYqDTQngCDp33kfj6Sfw1H475S1KklMEdY1cuZi2mbUsFN9Bpxl7nMnbKIOk4emHUW4MPusN49vqJkSjeamyny1mQ7nUm38ycvFb/QSWrU3TUKGXu1+omUlZnqUam6N2eFw09jDTzQ2ku5l8x/mb1KsjbmHgdDKl7kd/C6eZ9zPLYaS609PM+8+fBgXIZqJmNkPKTfwZ4bDiBcg2QTE1OTb4WatbBwWUiPpVHXceJm/htpLuqIrDnYTW+CRYRVpBRdiFHMm3vBKnZZJ+kmHcXTTwJHsYbDsOy7eBs37SrLikB6tRb+NpJ4fazpyYd/7xY0hVg+CQqU6lj1Fcdxyn6HT1mbAYN6t1S2cAXV+o3K43gi/HvE1B0jXilj5zTqbfJqo6i2XvIuOKm2tpMUuyK0qm28Hk38RgailrITlYq2RlbKRqQQDf0m7hKFQrcK552RjbxsNPORr1cO9VqqVPgsSDkqC4J4/wDkF81zfvN5hRKiu7KaLvcAWdgctgRk1A9b3HhNNkejkevrLEkvgm3xaqQGcA8ATY+QOszJVDDtAHncetriQo2xiVOU/GUgHqqzOD35XzXHgBMm0dvtS+GXp0KqPbOHw9MOoO+xUDXLbzIjZbsj31+UTJxAXe6jzvMT7apLvq3/AAj9hJPA7OwWJpK6UaTA/dDqQeKsFYWI5WmcdHsMuq4anfgciH1cMY2lZaxPorlTphSByjM54DMNfK5PpPS9IcS4/wDFhm8SjAHzbKPWbu30qplTDBKbuhI7KgFa1FNDoBcVeW8Dz84XpJh6dNfiV+vqWVQWfebZrDS62NtN8naYS1DfCRp19n4uojPiWFNAAQotcm4tfKLDefmOtp07optGnXwlNqdwFAplTvUoALHysfAico2n0n/iKiIgZaQJzXtmfTUka2HD+ozov2doow9TLuNZj/wpj3UjyjuxE05Q3S84LdERJMBERAEREAREQD4RON9OehVSnXqYqkoNDKWaxAZCbgjKd63Itbge6dkJkP0groaFSmwJDoyG1tMwIv4jfAKDiFZ2oOlTKgosXQHrOGRdV13AqhHI6X1mrtzZtKt1WV3dMzIiuqO6tkzZC3C9uWoM1cF/8nCtg6lU03phlUZR10uTa/GxPZ5ec3Nq00RkxDWz0AUTrEFwUGgA36s4N92+QCj45iuJVgLEVdx7yQR62ljw2Nt1WDLyNjb6yn7VqajXW979/Ob2H2vVJF1BU8eybeF5WUWzooVYxTUix1cNSqbrZuakX85o1tkuOyQ3ofWa42kh7S/UA+u+bFPGoey5X+q/o95WzOpVIvhmuj1Uv2hr4jTTw4Tao7YPzC/hpMyVW4MreIt6i49J5cK3bp+YsfUa+kgvuTNmltFG4gHv0mwHvw9ZDNhaROjFTyP7NrC4SovYe/gbeh0kFsEwSOU8PYiRoxlRO2l/L9RpNini0YGxsRqQeUA8Yx1p0853BR53tYfWUfE13rVL6kncOAHdyEsfSiuPhIgPa1Nv5VH6mamwdms5REAzvrc7lXfcnlYX9JrFYucGom3KxHLss21YT4gqUTdTdeI3qfEcDOhUNhUEazhnT4bvnzlb5St8qrYC2bjeVg00q03ejmKIVDq41UMTlNwLEG2m43ljBNp3RiQLWTOmh4rxB5SPe48p9wVX4FcH5G0bwJ3+R/WTO1dn65l475nJWZ6dCrvjnkr61db3tPpqjkD6eotPtXCsOEzYfZ9wGc5RwGlz+0ku1c9UdoOBZWcd184HgG3fWeqlZ3N2YMdLXFjYcNNJsjCDgLCZEw3dI3Mo6EZdGlSxVakxai702btZWy38eBn2rtHEv28Q57jUb2BkzSwqN2hcAX8+HrJjYWyqTq7OOy6KoDZF1W5zEC8spXOadCMctsqWGxeIC5VqOVvfs5rG4NwWGmqqfEAz7htnO736zMSSTq7EnebLredBbC001TDIx6vaR33lrnMdALL43MwY/aZQ5Wr0aSqxFkdRmUccqXYE3PhYycmN4rhX/ZXqGEVKgULUDaBi9gQTr2QNNDu751ToImVHUbl+Gp/EVLn0dfrOW43b9JsS5QF8zggkZQbZRc314TqX2bnNgi5N2qVKjt46KB+VV+shLN2XrVN0VFdFuiIljnEREAREQBERAPhE1cVglcWIm3EA5v0k6CNUfPSKhuRuL8tRxlPx3RnGp2qL1COIZW9b3neJ4ZAeEA/Nj9HMUWu9F/C09vsquN9Mifop8Gp4TSrbHQ8BAPzxUwbrvUzXZWG8Gd9xPRlG+USHxfQxD8sgm5xgVmG4keBImZNqVF+a/iLzouL6DDgJB4voY43CMFlJrhldTb7/ADID4aehvNmntqkd6snhp/1MYno5UX5TI+rst1+UyNqLqtJdk7R2kjdmqPBrf4M2QQ29UPeDbf8A7zlPfCkbxPtMMvZJHgSI2o0WofaNrpGmVwBuA0+v+BLZ0PwyH4pdsgy00DXsVDE3t+RZTMc7VFXNqy3F+Y0t5i0tXRaqSz01RHapTRlVxcEpe4Hf1j+WWtixzyk222TWz9nV6Yq06rpXDhmplH1ZKlgx1HUAK3A5kz7T2GlKnTw/xsilmZx1c9ZjwN9AmW4tv0GsdHtoYh/ivVVFRGQK+XJamRmdQBrouQ2O43HCa+Oo4eqtGvSqDN10p/EL5XY5wFLEdRuuwAbf46wVKRt3CFCynejFT4glT6iTuza3xMOhOptY+K9U+0jNuoQXBNyDYnfcg2JvxuQT5zY2EX+AAtiLtxsd9/1lZcHVpH9bX4NirREiadL4rOxbKFUsNL6aBR3aa+JmxicRVBsyWU8iCfLXfNQUwePkQR7EyI2XJ0amE5JKKNOnVNr3I+omehjXJsGPmAff95lbDKRaykf1+0DCn5co7tRb6y7cTnjSrx4v8nuvteonVGTne2v0vMdPpFiVDKlQoGN2yhQSbW32vwnwbMLG7ui+dz9Beev4KivaqX/CtveQtq4JlCrL7pI06uPquevUd7/eZj7mYVpk8PLj6SwbOwlB3CCw/mqM+X6IpMv+x+huHNi2JW2nVpU8v/N7n0EbvwUcYL7nf9HNdm7OfMHtYKQbsLDQ3+k7p9nuBNLApm3uzufBjZfqqqfOZ8J0YwYsQgcgg3Zma5HME29JYLRkznKNrRR6iIkmYiIgCIiAIiIAiIgCIiAIiIAnwifYgGI0VPCYXwKnhNuIBEVtjI3ASOxPRhG+UfSWiIBQMX0KQ7h6SDxnQTkJ1q08NSB4QDheL6HOu4GR64GthyHAYMjAq3LmD3fuZ318Cpkfi9gU6gIZd8A56m1aWJpg/ECPldWpvZVJcAFhUJtYW3aHXdIvDfDwuFajnSq5cutrOqdRVBJ3EjKTYce6WbaP2bAktSqFe5lv5BgQQPrIet9n+KXsGm3izD0K/rJIKNtN+HHf+0wYTFOgspsCb2sD7y01ugGMvdlB/qvPB6D4nisnBaLcXdFcqYkv2j9NJgIlmbobXG9T9J9TonW+4fpK2Rr69TyytCmZ6+GZcsN0Qqn5TJOl0KfiIwR6s/LOb/BY85noYMnhOm0eg/MSXwfQ1BvEXKN+Tm2z9nPcWWXXYuzKunCXPB7BRPlkrSwyruEEXNHZ2FZQLyTUT6BPsECIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCfLT7EA85Rynz4Y5T3EAxGivITz/DryEzxAMYpDlPvwxPcQDxkE9AT7EAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAP/9k=" }}
                                        style={{
                                            height: 62,
                                            width: '90%',
                                            // borderRadius: 25,
                                            // resizeMode: 'cover',
                                            // marginTop: wp('4%'),
                                        }}
                                    />
                                </View>
                                <Text style={styles.categoryBtnTxt}>Civic</Text>
                            </TouchableOpacity>

                        </View>



                        <View style={[styles.categoryContainer, { marginTop: 10 }]}>
                            <TouchableOpacity style={styles.categoryBtn} onPress={() => { navigation.navigate('FuelTypeScreen', { company: company, model: 'Br-v' }) }}>
                                <View style={styles.categoryIcon}>
                                    <Image
                                        source={{ uri: "https://cdn.autoportal.com/img/new-cars-gallery/honda/br-v/colors/744c642a5e5cd43a538e8ba4dfbcf815.jpg" }}
                                        style={{
                                            height: 62,
                                            width: '90%',
                                            resizeMode: 'cover',
                                        }}
                                    />
                                </View>
                                <Text style={styles.categoryBtnTxt}>  BR-V</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.categoryBtn} onPress={() => { navigation.navigate('FuelTypeScreen', { company: company, model: 'City-zx' }) }}>
                                <View style={styles.categoryIcon}>
                                    <Image
                                        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLU08VPQZoFG0LITLGIU6O7mia-DVBqif3jA&usqp=CAU' }}
                                        style={{
                                            height: 62,
                                            width: '90%',
                                            resizeMode: 'cover',
                                        }}
                                    />
                                </View>
                                <Text style={styles.categoryBtnTxt}>City Zx</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.categoryBtn} onPress={() => { navigation.navigate('FuelTypeScreen', { company: company, model: 'Nsx' }) }}>
                                <View style={styles.categoryIcon}>
                                    <Image
                                        source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKLU_GSbd-9xgbh9NCZBrOaBZZhTxkP3DrBg&usqp=CAU" }}
                                        style={{
                                            height: 62,
                                            width: '90%',
                                            resizeMode: 'cover',
                                        }}
                                    />
                                </View>
                                <Text style={styles.categoryBtnTxt}>NSX</Text>
                            </TouchableOpacity>

                        </View>
                        {/* <View style={[styles.categoryContainer, { marginTop: 10 }]}>
                            <TouchableOpacity style={styles.categoryBtn} onPress={() => { }}>
                                <View style={styles.categoryIcon}>
                                    <Image
                                        source={{ uri: 'https://w7.pngwing.com/pngs/527/831/png-transparent-logo-car-brand-symbol-kia-motors-car-emblem-text-trademark.png' }}
                                        style={{
                                            height: 60,
                                            width: 110,
                                            // borderRadius: 25,
                                            resizeMode: 'cover',
                                            // marginTop: wp('4%'),
                                        }}
                                    />
                                </View>
                                <Text style={styles.categoryBtnTxt}>  KIA</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.categoryBtn} onPress={() => { }}>
                                <View style={styles.categoryIcon}>
                                    <Image
                                        source={{ uri: 'https://brandslogo.net/wp-content/uploads/2013/07/audi-company-vector-logo-400x400.png' }}
                                        style={{
                                            height: 80,
                                            width: 90,
                                            // borderRadius: 25,
                                            resizeMode: 'cover',
                                            // marginTop: wp('4%'),
                                        }}
                                    />
                                </View>
                                <Text style={styles.categoryBtnTxt}>Audi</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.categoryBtn} onPress={() => { }}>
                                <View style={styles.categoryIcon}>
                                    <Image
                                        source={{ uri: 'data:image/png;base64,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' }}
                                        style={{
                                            height: 65,
                                            width: 90,
                                            // borderRadius: 25,
                                            resizeMode: 'cover',
                                            // marginTop: wp('4%'),
                                        }}
                                    />
                                </View>
                                <Text style={styles.categoryBtnTxt}>Mahindra</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={[styles.categoryContainer, { marginTop: 10 }]}>
                            <TouchableOpacity style={styles.categoryBtn} onPress={() => { }}>
                                <View style={styles.categoryIcon}>
                                    <Image
                                        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlWxDdY43fy12E_KJmoeIckcwTcr6mR--MjqlwpJc7OCZmY_1OeZg88khuKbj3WwCAvWo&usqp=CAU' }}
                                        style={{
                                            height: 60,
                                            width: 80,
                                            // borderRadius: 25,
                                            resizeMode: 'cover',
                                            // marginTop: wp('4%'),
                                        }}
                                    />
                                </View>
                                <Text style={styles.categoryBtnTxt}>  Jaguar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.categoryBtn} onPress={() => { }}>
                                <View style={styles.categoryIcon}>
                                    <Image
                                        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXjWGMFtULhJVTAMrlzUsiG3QkXUC93FXlHJHkS5nDB09LVbJYcbg6DObIsh2nRJZ3mVE&usqp=CAU' }}
                                        style={{
                                            height: 80,
                                            width: 90,
                                            // borderRadius: 25,
                                            resizeMode: 'cover',
                                            // marginTop: wp('4%'),
                                        }}
                                    />
                                </View>
                                <Text style={styles.categoryBtnTxt}>Acura</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.categoryBtn} onPress={() => { }}>
                                <View style={styles.categoryIcon}>
                                    <Image
                                        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpo-pPMA4-yrURAa8-qK1Dfmn_Z3h3SjB84srhuufx8tXL9vIHEfEzS5aZRBwTRLCy1Nc&usqp=CAU' }}
                                        style={{
                                            height: 80,
                                            width: 120,
                                            // borderRadius: 25,
                                            resizeMode: 'cover',
                                            // marginTop: wp('4%'),
                                        }}
                                    />
                                </View>
                                <Text style={styles.categoryBtnTxt}>Chevrolet</Text>
                            </TouchableOpacity> */}

                        {/* </View> */}
                    </>
                }
            </ScrollView>
        </View >
    );
};

export default ModelScreen;

const styles = StyleSheet.create({

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