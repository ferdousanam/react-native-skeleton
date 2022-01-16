import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '@constants';
import TextInput from './inputs/TextInput';
import {InputGroupConsumer, InputGroupProvider} from './InputGroupContext';

const FormGroupLabel = (props) => {
    return <Text style={{...styles.labelText, ...props.style}}>{props.children}</Text>;
};

const InputGroup = (props) => {
    return (
        <InputGroupProvider>
            <InputGroupConsumer>
                {({containerStyle}) => <View style={{...styles.InputGroupContainer, ...containerStyle, ...props.style}}>{props.children}</View>}
            </InputGroupConsumer>
        </InputGroupProvider>
    );
};

const FormGroup = (props) => {
    return <View style={{...styles.container, ...props.style}}>{props.children}</View>;
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 15,
    },
    InputGroupContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#CCCCCC',
        padding: 10,
    },
    labelText: {
        color: COLORS.black,
        marginBottom: 10,
        fontSize: 14,
    },
});

FormGroup.Label = FormGroupLabel;
FormGroup.InputGroup = InputGroup;
FormGroup.TextInput = TextInput;

export default FormGroup;
