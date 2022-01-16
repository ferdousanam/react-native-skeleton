import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '@constants';

class Footer extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={{color: COLORS.gray, fontSize: 11}}>By signing up you have agreed to our</Text>
                    <TouchableOpacity>
                        <Text style={{fontSize: 11}}>Terms of Use & Privacy Policy</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // height: 150,
        justifyContent: 'flex-end',
    },
    textContainer: {
        alignItems: 'center',
        marginVertical: 10,
    },
});

export default Footer;
