import React from 'react';
import BottomView from '../bottomView';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
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
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;
class InitDataSellSrceen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const link = 'https://daitheky.r.worldssl.net';
        const { params } = this.props.navigation.state
        const images = params.data.images
        const tableTypeTitle = ['Loại tin rao', 'Hướng nhà', 'Hướng ban công', 'Số phòng', 'Đường vào', 'Mặt tiền', 'Số tầng', 'Số toilet']
        const tableTypeData = [params.data.type, params.data.houseDirection, params.data.balconyDirection, params.data.rooms, params.data.wayIn, params.data.streetFace, params.data.floors, params.data.toilets]
        const tableInfoTitle = ['Tên', 'Địa chỉ', 'Tỉnh thành', 'Điện thoại', 'Email']
        const tableInfoData = [params.data.sender, params.data.senderAddress, params.data.senderProvince, params.data.senderPhone, params.data.senderEmail]
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.title}>{params.data.title}</Text>
                <Text style={styles.location}>Địa điểm:     {params.data.location}</Text>
                <View style={{ flexDirection: 'row', marginTop: 7, marginLeft: 6 }}>
                    <Text style={{ color: 'gray' }}>Giá:{params.data.price}</Text>
                    <Text style={{ marginLeft: width - width / 1.4, color: 'gray' }}>Ngày đăng tin:{params.data.timeStamp}</Text>
                </View>
                <View style={{ flexDirection: 'row', marginLeft: 6, marginTop: 5 }}></View>
                <Text style={{ marginLeft: 6, color: 'gray' }}>Diện tích:{params.data.acreage}</Text>

                <View
                    style={{
                        marginTop: 20,
                        borderBottomColor: 'green',
                        borderBottomWidth: 2,
                    }}
                />
                <Text style={{ marginTop: 5, fontSize: 20, marginLeft: 3, fontWeight: 'bold' }}>Thông tin mô tả</Text>
                <Text style={styles.description}>{params.data.description}</Text>
                <Text style={{ marginTop: 5, fontSize: 20, marginLeft: 3, fontWeight: 'bold' }}>Hình ảnh</Text>
                <ScrollView
                    horizontal
                    pagingEnabled
                    style={{ borderWidth: 2, borderColor: 'gray', marginTop: 10 }}
                >
                    {images.filter(function (img) {
                        if (img == "" || img == null) {
                            return false;
                        }
                        return true;
                    }).map(image => (
                        <View>
                            <Image
                                key={image}
                                source={{ uri: link + image }}
                                style={{ width: width, height: 350, }}
                            />
                        </View>
                    ))}
                </ScrollView>
                <View style={styles.circleDiv}>
                    {images.filter(function (img) {
                        if (img == "" || img == null|| img == undefined) {
                            return false;
                        }
                        return true;
                    }).map(image => {
                        return (
                            <View
                                key={image}
                                style={[styles.whiteCircle]}
                            >

                            </View>
                        )
                    })}
                </View>
                <Text style={{ marginTop: 15, fontSize: 20, marginLeft: 3, fontWeight: 'bold' }}>Đặc điểm bất động sản</Text>
                <View style={styles.table}>
                    <Table borderStyle={{ borderWidth: 1 }}>

                        <TableWrapper style={styles.wrapperTable}>
                            <Col data={tableTypeTitle} style={styles.titleTable} heightArr={[28, 28]} textStyle={styles.textTable1} />
                            <Col data={tableTypeData} style={styles.titleData} heightArr={[28, 28]} textStyle={styles.textTable2} />
                        </TableWrapper>
                    </Table>
                </View>

                <Text style={{ marginTop: 15, fontSize: 20, marginLeft: 3, fontWeight: 'bold' }}>Liên hệ</Text>
                <View style={styles.table}>
                    <Table borderStyle={{ borderWidth: 1 }}>

                        <TableWrapper style={styles.wrapperTable}>
                            <Col data={tableInfoTitle} style={styles.titleTable} heightArr={[28,28]} textStyle={styles.textTable1} />
                            <Col data={tableInfoData} style={styles.titleData} heightArr={[28, 28]} textStyle={styles.textTable2} />
                        </TableWrapper>
                    </Table>
                </View>
                    
                <BottomView />
            </ScrollView >
        );
    }
}

let styles = StyleSheet.create({
    container: {
        backgroundColor: '#ede6e6',
        width: width,
        height: height
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'left',
        fontSize: 25,
        color: 'black'
    },
    underline: {
        textDecorationLine: 'underline'
    },
    location: {
        marginTop: 5,
        fontSize: 15,
        color: 'blue',
        textDecorationLine: 'underline',
        fontStyle: ('normal', 'italic'),
    },
    description: {
        fontSize: 17,
        color: '#46135f',

    },
    circleDiv: {
        marginTop: -15,
        height: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    whiteCircle: {
        width: 5,
        height: 5,
        borderRadius: 3,
        margin: 5,
        backgroundColor: "#fff"
    },
    table: {
        flex: 1,
        padding: 16,
        paddingTop: 15,
        backgroundColor: '#ede6e6',
    },
    headTable: {
        height: 40,
        backgroundColor: '#ede6e6'
    },
    wrapperTable: {
        flexDirection: 'row'
    },
    titleTable: {
        flex: 0.65,
        backgroundColor: '#ede6e6',

    },
    titleData: {
        flex: 1,
        backgroundColor: '#ede6e6',

    },
    rowTable: {
        height: 28
    },
    textTable1: {
        marginLeft: 4,
        fontWeight: 'bold',
        textAlign: 'left',
        color: 'blue'
    },
    textTable2: {
        marginLeft: 4,
        textAlign:'left',
        fontSize:12
    }


})
export default InitDataSellSrceen;


