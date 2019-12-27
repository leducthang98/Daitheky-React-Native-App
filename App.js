import React from 'react';
import RootNavigator from './src/navigators/rootNavigator';
import rootReducer from './src/reducers/rootReducer';
import rootSaga from './src/sagas/rootSaga';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import InitDataSellScreen from './src/containers/MainScreens/initDataSellScreen'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  Dimensions
} from 'react-native';
const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger))
sagaMiddleware.run(rootSaga)
const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <RootNavigator />
      </View>
    </Provider>
    // <InitDataSellScreen />  
  );
};
const containerW = Dimensions.get('window').width;
const containerH = Dimensions.get('window').height / 1.04;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    width: containerW,
    height: containerH,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fafad2',
    borderBottomWidth: 0.3,
    borderBottomColor: 'gray',
  },
});
export default App;

