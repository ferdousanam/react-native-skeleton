import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Styles from '@styles';
import {FONTS, images} from '@constants';
import Button from '@components/form/buttons/Button';

const LandingScreen = ({navigation}) => {
    return (
        <ImageBackground source={images.background} resizeMode="cover" style={styles.background}>
            <View style={Styles.centerMiddleContainer}>
                <Animatable.Image animation="fadeInRight" duraton="3000" source={images.logo} style={Styles.logo} resizeMode="stretch" />
                <View style={styles.textContainer}>
                    <Text style={FONTS.h1}>Welcome to</Text>
                    <Text style={FONTS.h1}>React Native Skeleton</Text>
                    <Text style={FONTS.h4}>Preinstalled React Native Navigation, React Native Paper</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Button style={styles.button} onPress={() => navigation.navigate('SignIn')}>
                        <Button.Text>Login</Button.Text>
                    </Button>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    textContainer: {
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 10,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    button: {
        flex: 1,
        margin: 10,
    },
});

export default LandingScreen;
