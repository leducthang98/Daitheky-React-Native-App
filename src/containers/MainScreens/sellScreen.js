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
import Icon from 'react-native-vector-icons/FontAwesome';
import { getSellData } from '../../actions/sellScreenAction'
import { connect } from 'react-redux'

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;
class SellScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        this.props.getSellData();

    }
    render() {
        const DATA = [
            {
                houseImageUri: 'https://daitheky.r.worldssl.net/upload/photo/201912/20/624x476/9325_20191220152611_0.jpg',
                title: 'Bán nhà 6 tầng ở phố Đội Cấn, Q Ba Đình, mặt tiền 5.9m, ô tô vào nhà, ngõ thông, lô góc, hơn 12 tỷ',
                description: 'Khu vực: Đường Đội Cấn - Phường Ngọc Hà - Quận Ba Đình - Hà Nội'
            },
            {
                houseImageUri: 'https://daitheky.r.worldssl.net/upload/photo/201912/20/624x476/9325_20191220144929_0.jpg',
                title: 'Ở ngay, bán nhà ở phố Thụy Khuê, quận Tây Hồ, xây 5 tầng, hơn 2 tỷ!',
                description: 'Khu vực: đường Thụy Khuê - Phường Bưởi - Quận Tây Hồ - Hà Nội'
            },
            {
                houseImageUri: 'https://daitheky.r.worldssl.net/upload/photo/201912/20/624x476/9325_20191220111202_0.jpg',
                title: 'Nhà đẹp, bán nhà ở đường Võ Chí Công, quận Tây Hồ, 55m2 x 5 tầng, ô tô, mặt tiền 4.8m, 4.2 tỷ!',
                description: 'Khu vực: Đường Võ Chí Công - Phường Nhật Tân - Quận Tây Hồ - Hà Nội'
            },
            {
                houseImageUri: 'https://daitheky.r.worldssl.net/upload/photo/201912/19/624x476/9735_20191219161140_0.jpg',
                title: 'Đầu tư sinh lời cực tốt 40tr/ tháng, nhà Khâm Thiên, Đống Đa 6.5 tỷ.',
                description: 'Khu vực: Phố Khâm Thiên - Phường Khâm Thiên - Quận Đống Đa - Hà Nội'
            },
            {
                houseImageUri: 'https://daitheky.r.worldssl.net/upload/photo/201912/16/624x476/12965_20191216192922_0.jpg',
                title: 'Bán nhà mặt phố Kim Đồng, quận Hoàng Mai, nhà 5 tầng, 21.5 tỷ',
                description: 'Khu vực: Đường Kim Đồng - Phường Giáp Bát - Quận Hoàng Mai - Hà Nội'
            },
        ];

        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', }}>
                    <Image style={styles.logoImage}


                    />
                    <View style={styles.search}>

                        <Icon name="search" size={24} color="black" style={styles.searchIcon}
                        />
                    </View>
                </View>
                <TextInput
                    style={styles.title}
                    placeholder="Tiêu đề"
                    placeholderTextColor="gray"
                ></TextInput>
                <TextInput
                    style={styles.content}
                    placeholder="Nhập nội dung..."
                    placeholderTextColor="gray"
                    multiline={true}
                />

                <View style={{ flexDirection: 'row-reverse' }}>
                    <View style={{ backgroundColor: '#F0F0CC' }}>
                        <Text style={styles.buttonUpload}>
                            Đăng</Text>
                    </View>
                    <Icon name="image" size={32} color="#646464" style={styles.addImage} />
                </View>
                {/* BÀI ĐĂNG Ở CHỖ NÀY */}
                <FlatList
                    style={styles.data}
                    keyExtractor={item => item.id}
                    data={this.props.sellData}
                    renderItem={({ item }) =>
                        <FormatDataSellScreen
                            {...this.props}
                            id={item.id}
                            houseImageUri={item.houseImageUri}
                            title={item.title}
                            description={item.description}
                        />
                    }

                />


            </View>
        );
    }
}
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
        marginLeft: -15,
        marginTop: 4,
        resizeMode: 'contain',
        // marginTop: '20%',
        // marginLeft: '25%',
        backgroundColor: '#F0F0CC'
    },
    search: {
        backgroundColor: '#C3BABA',
        width: 36,
        height: 36,
        marginLeft: 198,
        borderRadius: 18,
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
        sellData:store.sellReducer.sellData
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getSellData: () => {
            dispatch(getSellData())
        },

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SellScreen);
