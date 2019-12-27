import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../containers/loginPage';
import MainTabNavigator from './mainTabNavigator';
import InitDataSellScreen from '../containers/MainScreens/initDataSellScreen'

const Navigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    },
  },
  Main: {
    screen: MainTabNavigator,
    navigationOptions: {
      header: null
    },
  },
  ClickSellScreen: {
    screen: InitDataSellScreen,
    navigationOptions: {
      header: null
    },
  }
},
  {
    initialRouteName: 'Login'
  });

const RootNavigator = createAppContainer(Navigator);

export default RootNavigator;