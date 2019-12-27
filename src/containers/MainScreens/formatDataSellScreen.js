import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    FlatList,
    Text,
    StatusBar,
    TouchableOpacity,
    Image,
    Dimensions
} from 'react-native';


const itemWidth = Dimensions.get('window').width;
const itemHeigh = Dimensions.get('window').height / 7;

function pressFunction() {


}


export default function FormatDataSellScreen(props) {
    
    return (
        <TouchableOpacity

            style={styles.container}
        >
            <Image style={styles.image}
               source={{ uri:props.houseImageUri }}
                
            />
            <View style={styles.viewData}>
                <View style={styles.title}>
                    <Text style = {{ fontWeight: 'bold',fontSize:15}}>{props.title}</Text>
                </View>
                <View style={styles.description}>
                    <Text style = {{color:'gray'}}>{props.description}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        width: itemWidth,
        height: itemHeigh,
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 0.3,
        borderBottomColor: 'gray'
    },
    image: {
        height: itemHeigh * 0.8,
        width: itemHeigh * 0.8,
        borderRadius: 8,
        marginLeft: 5,
    },
    viewData: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 10,
    },
    title: {
        flex: 1,
        
    },
    description: {
        flex: 1,
        marginTop:15,
    }
})