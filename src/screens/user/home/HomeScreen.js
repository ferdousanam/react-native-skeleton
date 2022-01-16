import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import Styles from '@styles';
import Header from '@components/inc/Header';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spinner: false,
            refreshing: false,
        };
    }

    render() {
        return (
            <View style={Styles.container}>
                <Header navigation={this.props.navigation} title="Home" />

                <Spinner visible={this.state.spinner} textContent={'Loading...'} />

                <View style={Styles.centerMiddleContainer}>
                    <Text>Home Screen</Text>
                </View>
            </View>
        );
    }
}

export default HomeScreen;
