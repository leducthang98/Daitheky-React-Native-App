
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    Text,
    Button,
    Image,
    Keyboard,
    Dimensions
} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;
export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image}
                    source={require('AppDaiTheKy/image/logo.png')}
                />
                <TextInput
                    style={[styles.textinput, { marginTop: '10%' }]}
                    placeholder="Tài khoản"
                    placeholderTextColor="gray"
                />
                <TextInput
                    style={[styles.textinput, { marginTop: '5%', }]}
                    placeholder="Mật khẩu"
                    secureTextEntry={true}
                    placeholderTextColor="gray"
                />
                <TouchableOpacity style={{ backgroundColor: '#faffe9' }}
                
                >
                    <Text style={styles.button1}
                    onPress={() => this.props.navigation.navigate('Main')}>
                        Đăng nhập
                     </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: '#faffe9' }}>
                    <Text style={styles.button2}>
                        Quên mật khẩu?
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: '#faffe9' }}>
                    <Text style={styles.button3}>
                        Tạo tài khoản mới
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
let styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        backgroundColor: '#faffe9',
    },
    image: {
        width: '70%',
        height: '30%',
        marginTop: '8%',
        marginLeft: '15%',
        resizeMode: 'contain',
        backgroundColor: '#faffe9'
    },
    textinput: {
        width: '70%',
        height: 30,
        marginLeft: '15%',
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: 'white',
        borderRadius: 9
    },
    button1: {
        width: '85%',
        height: 30,
        borderWidth: 1,
        marginLeft: '8%',
        borderColor: 'gray',
        backgroundColor: '#4fa3fd',
        marginTop: 8,
        textAlign: 'center',
        paddingTop: 4,
        borderRadius: 5,
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold'
    },
    button2: {
        width: '85%',
        height: 30,
        marginLeft: '8%',
        backgroundColor: '#faffe9',
        marginTop: 8,
        textAlign: 'center',
        paddingTop: 4,
        borderRadius: 5,
        fontSize: 15,
        color: '#4fa3fd',
        fontWeight: 'bold'
    },
    button3: {
        width: '95%',
        height: 30,
        marginLeft: '2%',
        backgroundColor: '#d3d9da',
        marginTop: Dimensions.get('window').height / 4.4,
        textAlign: 'center',
        paddingTop: 4,
        borderRadius: 5,
        fontSize: 15,
        color: '#4fa3fd',
        fontWeight: 'bold'
    },
})