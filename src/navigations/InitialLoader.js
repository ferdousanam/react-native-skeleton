import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Spinner from 'react-native-loading-spinner-overlay';
import Styles from '@styles';
import {COLORS, icons} from '@constants';

class ActivityIndicator extends Component {
    render() {
        return (
            <View>
                <Animatable.Image animation="fadeInRight" duraton="3000" source={icons.logo} style={styles.logo} resizeMode="stretch" />
            </View>
        );
    }
}

export default class InitialLoader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
        };
    }

    render() {
        return (
            <View style={Styles.container}>
                <View style={Styles.centerMiddleContainer}>
                    <Spinner visible={true} overlayColor={COLORS.primary} />
                    {/*<Spinner visible={true} customIndicator={<ActivityIndicator />} overlayColor={COLORS.white} />*/}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    logo: {
        alignSelf: 'center',
        width: 250,
        height: 250,
    },
});
