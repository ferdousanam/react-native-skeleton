import React, {useEffect, useState} from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';
import AuthStorage from '@/core/session/AuthStorage';
import {connect} from 'react-redux';
import {COLORS} from '@constants';
import {Snackbar} from '@components';
import {isMountedRef, navigationRef} from './RootNavigation';
import InitialLoader from './InitialLoader';
import {AfterAuth, BeforeAuth} from './mainNavigators';
import {loadProfile, setToken} from '@actions/userAction';
import {setSnackbarVisible} from '@actions/snackbarActions';
import FirebaseNotification from '@components/PushNotifications/FirebaseNotification';

const AppTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: COLORS.white,
    },
};

const Main = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        AuthStorage.get('token').then((token) => {
            if (token) {
                props.setToken(token);
                props
                    .loadProfile()
                    .then(() => setIsLoading(false))
                    .catch((error) => {
                        setIsLoading(false);
                        if (error.response.status === 401) {
                            props.setToken(null);
                        }
                    });
            } else {
                setIsLoading(false);
            }
        });
    }, []);

    useEffect(() => {
        isMountedRef.current = true;

        return () => (isMountedRef.current = false);
    }, []);

    if (isLoading) {
        return <InitialLoader />;
    }

    return (
        <>
            <FirebaseNotification />
            <NavigationContainer ref={navigationRef} theme={AppTheme}>
                {props.token == null ? <BeforeAuth /> : <AfterAuth />}
            </NavigationContainer>

            <FlashMessage position="top" />
            <Snackbar visible={props.snackbar.visible} onDismiss={() => props.setSnackbarVisible(false)}>
                {props.snackbar.text}
            </Snackbar>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        token: state.userReducer.token,
        authUser: state.userReducer.authUser,
        snackbar: state.snackbarReducer,
    };
};

export default connect(mapStateToProps, {setSnackbarVisible, setToken, loadProfile})(Main);
