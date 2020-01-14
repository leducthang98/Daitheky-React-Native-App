import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    FlatList,
    TouchableOpacity,
    View,
    Text,
    Image,
    StatusBar,
    Dimensions,
    Button
} from 'react-native';
import FormatDataSellScreen from './formatDataSellScreen';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome'
import { getSellData } from '../../actions/sellScreenAction'
import { connect } from 'react-redux'
import BottomView from '../bottomView'
import RNPickerSelect from 'react-native-picker-select'
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;
class SellScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            filter: undefined,
            pageIndex: 1,
        }
    }
    componentDidMount() {
        this.props.getSellData(this.state.pageIndex);

    }
    async nextButton() {
        await this.setState({
            pageIndex: this.state.pageIndex + 1,
        });
        this.props.getSellData(this.state.pageIndex);


    }
    async prevButton() {
        if (this.state.pageIndex == 1) {
            await this.setState({
                pageIndex: 1,
            });
        } else {
            await this.setState({
                pageIndex: this.state.pageIndex - 1,
            });
            this.props.getSellData(this.state.pageIndex);
        }

    }
    render() {

        let dataRender
        let count = 0
        if (this.props.sellData) {
            dataRender = this.props.sellData.map((data, index) => {
                let dataOrigin = this.props.sellData[index];
                var imgs = dataOrigin.AlbumMedium.split('|.');
                var type;
                switch (dataOrigin.HangXe) {
                    case '450':
                        type = "Chung cư"
                        break;
                    case '457':
                        type = "Nhà riêng"
                        break;
                    case '553':
                        type = "Biệt thự liền kề"
                        break;
                    case '554':
                        type = "Nhà mặt phố"
                        break;
                }
                console.log("Page " + this.state.pageIndex + ", " + "num " + index + ": " + dataOrigin.contact)

                var data
                if (dataOrigin.contact == null || dataOrigin.contact == "") {
                    var data = {
                        id: dataOrigin.IDMaTin,
                        title: dataOrigin.TieuDe,
                        location: dataOrigin.DongXe,
                        price: dataOrigin.GiaTien,
                        acreage: dataOrigin.NgoaiThat,
                        timeStamp: dataOrigin.NgayDang,
                        description: dataOrigin.ThongTinMota,
                        images: imgs,
                        type: type,
                        houseDirection: dataOrigin.NoiThat,
                        rooms: dataOrigin.HeThongNapNhienLieu,
                        wayIn: dataOrigin.DanDong,
                        streetFace: dataOrigin.HopSo,
                        floors: dataOrigin.NhienLieu,
                        toilets: dataOrigin.MucTieuThu,
                    }
                } else {
                    var contactToJSON = JSON.parse(dataOrigin.contact)
                    var data = {
                        id: dataOrigin.IDMaTin,
                        title: dataOrigin.TieuDe,
                        location: dataOrigin.DongXe,
                        price: dataOrigin.GiaTien,
                        acreage: dataOrigin.NgoaiThat,
                        timeStamp: dataOrigin.NgayDang,
                        description: dataOrigin.ThongTinMota,
                        images: imgs,
                        type: type,
                        houseDirection: dataOrigin.NoiThat,
                        rooms: dataOrigin.HeThongNapNhienLieu,
                        wayIn: dataOrigin.DanDong,
                        streetFace: dataOrigin.HopSo,
                        floors: dataOrigin.NhienLieu,
                        toilets: dataOrigin.MucTieuThu,
                        sender: contactToJSON.HoVaTen,
                        senderAddress: contactToJSON.DiaChi,
                        senderProvince: "",
                        senderPhone: contactToJSON.DienThoai,
                        senderEmail: contactToJSON.Email,
                    }
                }


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
                <View style={{ flexDirection: 'row', marginBottom: 7 }}>
        <Text style={{ marginTop: 10, fontSize: 15, color: 'green', fontWeight: '800', marginLeft: 4, fontStyle: ('normal', 'italic') }}>Page {this.state.pageIndex} of {parseInt(this.props.countSellData/15)}                 </Text>

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
                <View style={styles.pagination}>
                    <TouchableOpacity >
                        <Icon name="chevron-left" size={20} color="black"
                            style={styles.pgnButtonPrev}
                            onPress={() => this.prevButton()}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Icon name="chevron-right" size={20} color="black"
                            style={styles.pgnButtonNext}
                            onPress={() => this.nextButton()}
                        />
                    </TouchableOpacity>
                </View>
            </ScrollView >
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
        marginLeft: 70

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
        backgroundColor: '#fafafe',
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
        backgroundColor: '#fafafe'
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

    },
    pagination: {
        width: '100%',
        height: 40,
        backgroundColor: '#ede6e6',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    },
    pgnButtonPrev: {
        width: 32,
        height: 32,
        borderRadius: 30,
        borderWidth: 0.5,
        borderColor: 'black',
        marginLeft: 10,
        backgroundColor: '#fafafe',
        paddingTop: 6,
        paddingLeft: 7,

    },
    pgnButtonNext: {
        width: 32,
        height: 32,
        borderRadius: 30,
        borderWidth: 0.5,
        borderColor: 'black',
        marginLeft: 10,
        backgroundColor: '#fafafe',
        paddingTop: 6,
        paddingLeft: 9,

    },



})
const mapStateToProps = (store) => {
    return {
        sellData: store.sellReducer.sellData,
        countSellData: store.sellReducer.countSellData
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getSellData: (index) => {
            dispatch(getSellData(index))
        },

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SellScreen);
