import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    FlatList,
    View,
    Text,
    Image,
    StatusBar,
    Dimensions,
    Button
} from 'react-native';
import FormatDataSellScreen from './formatDataSellScreen';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome'
import { getRentData } from '../../actions/sellScreenAction'
import { connect } from 'react-redux'
import BottomView from '../bottomView'
import RNPickerSelect from 'react-native-picker-select'
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;
class RentScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            filter: undefined
        }
    }
    componentDidMount() {
        this.props.getRentData();
    }
    render() {
        let dataRent = this.props.rentData
        let dataRender
        let count = 0
        if (dataRent) {
            dataRender = dataRent.map((data, index) => {
                data = dataRent[dataRent.length - 1 - index];
                count = count + 1;
                return (
                    <FormatDataSellScreen
                        {...this.props}
                        data={data}
                    />
                )
            })


        }

        return (
            <ScrollView style={styles.container}>
                <View style={{ flexDirection: 'row', }}>
                    <Image style={styles.logoImage}
                        source={require('AppDaiTheKy/image/logo.png')}
                    />
                    <TextInput
                        style={styles.search}
                        placeholder="Tìm kiếm"
                        placeholderTextColor="gray"
                        justifyContent='center'

                    />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ marginTop: 10, fontSize: 15, color: 'green', fontWeight: '800', marginLeft: 4, fontStyle: ('normal', 'italic') }}>Tìm thấy {count} kết quả.</Text>

                    <RNPickerSelect
                        style={{ ...pickerSelectStyles }}
                        placeholder={{
                            label: 'Sắp xếp',
                            value: null,
                            color: 'gray'
                        }}

                        onValueChange={(value) => {
                            this.setState({
                                filter: value,
                            });

                        }}
                        items={[
                            { label: 'Thông thường', value: 'normal', color: 'green' },
                            { label: 'Ngày đăng', value: 'date', color: 'green' },
                            { label: 'Giá tăng', value: 'priceUp', color: 'green' },
                            { label: 'Giá giảm', value: 'priceDown', color: 'green' },
                            { label: 'Diện tích tăng', value: 'acreageUp', color: 'green' },
                            { label: 'Diện tích giảm', value: 'acreageDown', color: 'green' },
                        ]}
                    />
                </View>
                {dataRender}


            </ScrollView>
        );
    }
}
const pickerSelectStyles = StyleSheet.create({
    viewContainer: {
        marginTop: 10,
        backgroundColor: 'green',
        color: 'white',
        borderRadius: 11,
        width: 100,
        height: 25,
        justifyContent: 'center',
        paddingLeft: 10,
        marginLeft: 110

    },
    headlessAndroidContainer: {
        backgroundColor: 'black',
        flex: 1,

    }
});
let styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        backgroundColor: '#F0F0CC',
    },
    searchBar: {
        width: width / 1.05,
        height: 30,
        marginTop: 7,
        marginLeft: 8,
        borderRadius: 19,
        backgroundColor: '#F3EBEB',
        alignItems: 'center',
        borderWidth: 0.7,
        borderColor: 'gray'
    },
    title: {
        width: width / 1.03,
        height: height / 16,
        justifyContent: 'center',
        marginLeft: 6,
        marginTop: 10,
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14,
        fontStyle: ('normal', 'italic'),
        fontSize: 12,
        backgroundColor: '#F9F9F9',
        borderWidth: 0.7,
        borderColor: 'gray'
    },
    content: {
        width: width / 1.03,
        height: height / 6.5,
        marginLeft: 6,
        fontSize: 15,
        textAlignVertical: 'top',
        alignItems: 'baseline',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: '#F9F9F9',
        borderWidth: 0.7,
        borderColor: 'gray'
    },
    addImage: {
        marginTop: 5,
        marginRight: 3,
        height: '100%',


    },
    buttonUpload: {
        width: '80%',
        height: 29,
        borderWidth: 1,
        marginLeft: '8%',
        borderColor: 'gray',
        backgroundColor: '#C5A3C9',
        marginTop: 5,
        textAlign: 'center',
        justifyContent: 'center',
        paddingTop: 6,
        borderRadius: 5,
        fontSize: 13,
        color: 'white',
        fontWeight: 'bold'
    },
    logoImage: {
        width: 130,
        height: 40,
        marginLeft: -24,
        marginTop: 4,
        resizeMode: 'contain',
        // marginTop: '20%',
        // marginLeft: '25%',
        backgroundColor: '#F0F0CC'
    },
    search: {
        backgroundColor: '#C3BABA',
        width: width * 0.7,
        height: 30,
        marginLeft: -15,
        borderRadius: 15,
        marginTop: 8,
    },
    searchIcon: {
        width: '100%',
        height: '100%',
        marginTop: 4,
        textAlign: 'center',
    },
    postStyle: {
        width: width / 1.04,
        height: height / 3.9,
        backgroundColor: 'red',

    },
    data: {
        borderWidth: 0.3,
        borderColor: 'gray'

    }


})
const mapStateToProps = (store) => {
    return {
        rentData: store.rentReducer.rentData
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getRentData: () => {
            dispatch(getRentData())
        },

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RentScreen);
