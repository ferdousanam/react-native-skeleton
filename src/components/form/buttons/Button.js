import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '@constants';

const ButtonText = (props) => {
    return <Text style={{...styles.buttonText, ...props.style}}>{props.children}</Text>;
};

class Button extends Component {
    render() {
        const {disabled, containerStyle} = this.props;
        return (
            <TouchableOpacity disabled={disabled} onPress={this.props.onPress} style={this.props.style}>
                <View style={{...styles.container, ...containerStyle, opacity: disabled ? 0.5 : 1}}>{this.props.children}</View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: COLORS.purple,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: COLORS.white,
        textTransform: 'uppercase',
    },
});

Button.Text = ButtonText;

export default Button;
