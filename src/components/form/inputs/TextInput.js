import React, {Component} from 'react';

import {StyleSheet, TextInput as RNTextInput, View} from 'react-native';
import {COLORS} from '@constants';
import {InputGroupContext} from '../InputGroupContext';

class TextInput extends Component {
    static contextType = InputGroupContext;
    setContainerStyle(value) {
        this.context?.setContainerStyle(value);
    }
    render() {
        return (
            <View style={styles.container}>
                <RNTextInput
                    mode="outlined"
                    secureTextEntry={false}
                    placeholderTextColor={COLORS.gray}
                    style={{...styles.textInput, ...this.props.style}}
                    autoCapitalize="none"
                    onPressIn={() => this.setContainerStyle({borderColor: COLORS.purple})}
                    onBlur={() => this.setContainerStyle({})}
                    {...this.props}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textInput: {
        fontSize: 17,
        color: '#05375a',
        paddingVertical: 5,
    },
});

export default TextInput;
