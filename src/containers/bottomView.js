import React from 'react';
import { Text, View } from 'react-native';
class BottomView extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'gray', height: 70 }}>
                <Text style ={{color:'white'}}>Contact us: www.Daitheky.net</Text>
            </View>
        );
    }
}
export default BottomView;