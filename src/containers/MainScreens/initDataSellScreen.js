import React from 'react';
import BottomView from '../bottomView';
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
        const images = [
            'https://daitheky.r.worldssl.net/upload/photo/201912/20/624x476/9325_20191220152611_0.jpg',
            'https://daitheky.r.worldssl.net/upload/photo/201912/16/624x476/12965_20191216192922_0.jpg',
            'https://daitheky.r.worldssl.net/upload/photo/201912/20/624x476/9325_20191220111202_0.jpg',
        ]
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.title}>Bán nhà mặt tiền ở Hoàng Mai</Text>
                <Text style={styles.location}>Địa điểm: Hoàng Mai, Quận Hai Bà Trưng, Hà Nội</Text>
                <View style={{ flexDirection: 'row', marginTop: 7, marginLeft: 6 }}>
                    <Text style={{ color: 'gray' }}>Giá: 12.2 Tỷ</Text>
                    <Text style={{ marginLeft: width - width / 1.4, color: 'gray' }}>Diện tích: 40 m2</Text>
                </View>
                <View style={{ flexDirection: 'row', marginLeft: 6, marginTop: 5 }}>
                    <Text style={{ color: 'gray' }}>                     </Text>
                    <Text style={{ marginLeft: width - width / 1.4, color: 'gray' }}>Ngày đăng tin: 27/12/2019</Text>
                </View>
                <View
                    style={{
                        marginTop: 20,
                        borderBottomColor: 'green',
                        borderBottomWidth: 2,
                    }}
                />
                <Text style={{ marginTop: 5, fontSize: 20, marginLeft: 3, fontWeight: 'bold' }}>Thông tin mô tả</Text>
                <Text style={styles.description}>+ Chủ nhà định sang Mỹ định cư nên cần bán gấp nhà Phố 8/3, quận Hai Bà Trưng. Diện tích 40m2, 5 tầng, mặt tiền 4m. giá yêu thương chỉ 3.1 tỷ có ngay nhà thuộc khu víp quận Hai Bà Trưng.
+ Nhà nằm tại vị trí đẹp nhất phố 8/3, cách đường 8/3 hơn 100m, ngõ xe ba gác tránh xe máy, thông ra Ngõ Quỳnh. Trước cửa có khoảng ngõ rộng để được nhiều xe máy.
+ Khu vực đang phát triển từng ngày, rất hiếm nhà bán, an ninh đảm bảo, đời sống dân trí cao, hàng xóm hiền lành thân thiện. Nhà nằm tại trung tâm quận Hai Bà Trưng nên hưởng trọn vẹn các tiện ích như TTTM, khu vui chơi giải trí, trường học các cấp.
+ Nhà chủ tự thiết kế rất chắc chắn, kiên cố. Xây trên diện tích 40m2, 5 tầng, mặt tiền 4m. Tổng 4 PN+WC. Hiện tại chủ mới sơn sửa lại để người mua chỉ việc đến ở luôn.
+ Sổ đỏ chính chủ, sẵn sàng giao dịch. Giá 3.1 tỷ, có thương lượng.
LH: Mr CHUNG, 0978144961. Chuyên BĐS thổ cư Hà Nội, tư vấn hỗ trợ các thủ tục pháp lý nhanh gọn dễ dàng. Khách xem nhà không mất bất kì khoản phí dịch vụ nào.
                </Text>
                {/* <Image style={{ width: width, height: 350, marginTop: 10 }}
                    source={{ uri: 'https://daitheky.r.worldssl.net/upload/photo/201912/20/624x476/9325_20191220152611_0.jpg' }}
                /> */}
                {/* <FlatList
                    keyExtractor={item => item.id}
                    data={images}
                    renderItem={({ item }) =>
                        <View>
                            <Image
                                style={{ width: width, height: 350, marginTop: 20 }}
                                source={{ uri: item }}
                            />
                        </View>
                    }
                >

                </FlatList> */}
                <Text style={{ marginTop: 5, fontSize: 20, marginLeft: 3, fontWeight: 'bold' }}>Hình ảnh</Text>
                <ScrollView
                    horizontal
                    pagingEnabled
                    style={{ borderWidth: 2, borderColor: 'gray', marginTop: 10 }}
                >
                    {images.map(image => (
                        <View>
                            <Image
                                key={image}
                                source={{ uri: image }}
                                style={{ width: width, height: 350, }}
                            />
                        </View>
                    ))}
                </ScrollView>
                <View style={styles.circleDiv}>
                    {images.map(image => (
                        <View
                            key={image}
                            style={[styles.whiteCircle]}
                        >

                        </View>
                    ))}
                </View>
                <Text style={{ marginTop: 5, fontSize: 20, marginLeft: 3, fontWeight: 'bold' }}>Liên hệ</Text>
                <BottomView />
            </ScrollView >
        );
    }
}

let styles = StyleSheet.create({
    container: {
        backgroundColor: '#fafad2',
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
        fontSize: 15,
        color: '#46135f',
        fontStyle: ('normal', 'italic'),
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
    }


})
export default InitDataSellSrceen;


