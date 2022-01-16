require('./src/helpers/Prototypes');
import 'react-native-gesture-handler';
import {enableScreens} from 'react-native-screens';
import React, {Component} from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import Styles from './src/styles';
import Main from './src/navigations/Main';
import store from './src/store';

enableScreens(false);

export default class App extends Component {
    render() {
        return (
            <View style={Styles.container}>
                <Provider store={store}>
                    <Main />
                </Provider>
            </View>
        );
    }
}
