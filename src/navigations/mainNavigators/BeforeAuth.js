import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {COLORS} from '@constants';
import LandingScreen from '@screens/LandingScreen';
import SignIn from '@screens/auth/SignIn';

const Stack = createStackNavigator();

class BeforeAuth extends Component {
    render() {
        return (
            <>
                <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
                <Stack.Navigator headerMode="none">
                    <Stack.Screen name="LandingScreen" component={LandingScreen} />
                    <Stack.Screen name="SignIn" component={SignIn} />
                </Stack.Navigator>
            </>
        );
    }
}

export default BeforeAuth;
