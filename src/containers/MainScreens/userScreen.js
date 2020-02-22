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
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;
class UserScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}></View>
        <View style={styles.body}>
          <TouchableOpacity style={styles.avatar}>
          </TouchableOpacity>
          <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 8 }}>
            <Text style={styles.userName}>Lê Đức Thắng</Text>
          </View>
          <View style={{ flexDirection: 'row', borderBottomWidth: 0.25, height: 40, alignItems: 'center' }}>
            <Text style={{ fontSize: 16, marginLeft: 5, fontWeight: 'bold' }}>Họ tên</Text>
            <Text style={{ fontSize: 18, marginLeft: 38 }}>Lê Đức Thắng</Text>
          </View>

          <View style={{ flexDirection: 'row', borderBottomWidth: 0.25, height: 40, alignItems: 'center' }}>
            <Text style={{ fontSize: 16, marginLeft: 5, fontWeight: 'bold' }}>Username</Text>
            <Text style={{ fontSize: 16, marginLeft: 10 }}>134534562341341</Text>
          </View>

          <View style={{ flexDirection: 'row', borderBottomWidth: 0.25, height: 40, alignItems: 'center' }}>
            <Text style={{ fontSize: 16, marginLeft: 5, fontWeight: 'bold' }}>Email</Text>
            <Text style={{ fontSize: 16, marginLeft: 46 }}>leducthang98@gmail.com</Text>
          </View>

          <View style={{ flexDirection: 'row', borderBottomWidth: 0.25, height: 40, alignItems: 'center' }}>
            <Text style={{ fontSize: 16, marginLeft: 5, fontWeight: 'bold' }}>Điện thoại</Text>
            <Text style={{ fontSize: 16, marginLeft: 13 }}>0394827798</Text>
          </View>

          <View style={{ flexDirection: 'row', borderBottomWidth: 0.25, height: 40, alignItems: 'center' }}>
            <Text style={{ fontSize: 16, marginLeft: 5, fontWeight: 'bold' }}>Địa chỉ</Text>
            <Text style={{ fontSize: 16, marginLeft: 37 }}>Hà Nội</Text>
          </View>

          <View style={{ flexDirection: 'row', borderBottomWidth: 0.25, height: 40, alignItems: 'center' }}>
            <Text style={{ fontSize: 16, marginLeft: 5, fontWeight: 'bold' }}>Tỉnh thành</Text>
            <Text style={{ fontSize: 16, marginLeft: 10 }}>Hà Nội</Text>
          </View>

        </View>
      </View>
    );
  }
}
let styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    backgroundColor: '#fafafe',
  },
  top: {
    width: width,
    height: height / 3.6,
    backgroundColor: 'black'
  },
  body: {
    width: width,
    height: height - (height / 3.4),
    backgroundColor: '#fafafe'
  },
  avatar: {
    width: 110,
    height: 110,
    backgroundColor: 'gray',
    marginTop: -55,
    marginLeft: '35%',
    borderRadius: 55,
    borderWidth: 3,
    borderColor: 'green'
  },
  userName: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold'
  }
})
export default UserScreen;