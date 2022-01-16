import React from 'react';

import {StyleSheet, TextInput, View} from 'react-native';
import {COLORS} from '@constants';

const FilterInputText = (props) => {
    return (
        <View style={[selfStyles.inputBox]}>
            <TextInput
                placeholder={'Type Here...'}
                placeholderTextColor={COLORS.gray}
                style={selfStyles.textInput}
                autoCapitalize="none"
                editable={true}
                autoFocus={true}
                {...props}
            />
        </View>
    );
};

const selfStyles = StyleSheet.create({
    inputBox: {
        flexDirection: 'row',
        margin: 10,
        borderWidth: 0.25,
        borderColor: COLORS.gray,
    },
    textInput: {
        flex: 1,
        padding: 5,
        paddingLeft: 10,
        color: '#05375a',
    },
});

export default FilterInputText;
