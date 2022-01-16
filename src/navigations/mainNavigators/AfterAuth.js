import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import {connect} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {COLORS} from '@constants';
import {loadProfile, setToken} from '@actions/userAction';
import InitialLoader from '@/navigations/InitialLoader';
import LandingScreen from '@screens/LandingScreen';
import AfterAuthDrawer from './AfterAuthDrawer';

const Stack = createStackNavigator();
class InitialProfileStack extends Component {
    render() {
        return (
            <>
                <Stack.Navigator headerMode="none">
                    <Stack.Screen name="LandingScreen" component={LandingScreen} />
                </Stack.Navigator>
            </>
        );
    }
}

class AfterAuth extends Component {
    render() {
        const {authUser} = this.props;

        if (!authUser) {
            return <InitialLoader />;
        }

        return (
            <>
                <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
                {authUser.name ? <AfterAuthDrawer /> : <InitialProfileStack />}
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.userReducer.token,
        authUser: state.userReducer.authUser,
    };
};

export default connect(mapStateToProps, {setToken, loadProfile})(AfterAuth);
