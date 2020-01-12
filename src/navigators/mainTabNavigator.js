import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import SellScreen from '../containers/MainScreens/sellScreen';
import UserScreen from '../containers/MainScreens/userScreen';
import RentScreen from '../containers/MainScreens/rentScreen';
import ForumScreen from '../containers/MainScreens/forumScreen';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Image } from 'react-native';
const MainTabNavigator = createBottomTabNavigator({
    Sell: {
        screen: SellScreen,
        navigationOptions: {
            tabBarLabel: "Mua/bán",
            tabBarIcon: ({ tintColor }) => (
                <Icon name="dollar" size={26} color="#7B8184" />
            )
        },
    },
    Rent: {
        screen: RentScreen,
        navigationOptions: {
            tabBarLabel: "Thuê",
            tabBarIcon: ({ tintColor }) => (
                <Icon name="dollar" size={26} color="#7B8184" />
            )
        },
    },
    Forum: {
        screen: ForumScreen,
        navigationOptions: {
            tabBarLabel: "Diễn đàn",
            tabBarIcon: ({ tintColor }) => (
                <Icon name="bullhorn" size={26} color="#7B8184" />
            )
        },
    },
    User: {
        screen: UserScreen,
        navigationOptions: {
            tabBarLabel: "Tài khoản",
            tabBarIcon: ({ tintColor }) => (

                <Icon name="user" size={26} color="#7B8184" />
            ),

        },
    },


},
    {
        tabBarOptions: {
            activeTintColor: '#8DA1AE',
            inactiveTintColor: '#8DA1AE',
            inactiveBackgroundColor: '#E6E6A5',
            activeBackgroundColor: '#FCFCC8',



        },
    }
);
export default MainTabNavigator;
