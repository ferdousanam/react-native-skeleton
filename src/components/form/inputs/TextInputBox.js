import React, {createRef, useState} from 'react';
import {StyleSheet, TextInput as RNTextInput, View} from 'react-native';
import Styles from '@styles';
import {COLORS} from '@constants';

const TextInputBox = (props) => {
    const [inputs, setInputs] = useState(props.value ? props.value.split('') : []);
    const {numberOfBoxes} = props;
    const arrLength = new Array(numberOfBoxes).length;
    const elRefs = React.useRef([]);

    if (elRefs?.current.length !== arrLength) {
        // add or remove refs
        elRefs.current = Array(arrLength)
            .fill()
            .map((_, i) => elRefs.current[i] || createRef());
    }

    const onKeyPress = (index, nativeEvent) => {
        if (nativeEvent.key === 'Backspace' && index !== 0 && !inputs[index]) {
            elRefs.current[index - 1].current.focus();
        }
    };

    const setInput = (index, value) => {
        const array = [...inputs];
        array[index] = value.numericOnly();
        setInputs(array);
        props.onChangeText(array.join(''));
        if (value.numericOnly() && index < arrLength - 1) {
            elRefs.current[index + 1].current.focus();
        } else if (value.numericOnly()) {
            elRefs.current[index].current.blur();
        }
    };

    return (
        <View style={styles.container}>
            {Array.from(Array(numberOfBoxes).keys()).map((item) => (
                <React.Fragment key={item}>
                    <View style={styles.formGroupBox}>
                        <RNTextInput
                            ref={elRefs.current[item]}
                            maxLength={1}
                            mode="outlined"
                            selectTextOnFocus
                            textAlign="center"
                            autoCapitalize="none"
                            secureTextEntry={false}
                            keyboardType="number-pad"
                            style={Styles.textInputBox}
                            placeholderTextColor={COLORS.gray}
                            value={inputs[item]}
                            onKeyPress={({nativeEvent}) => onKeyPress(item, nativeEvent)}
                            onChangeText={(val) => setInput(item, val)}
                        />
                    </View>
                </React.Fragment>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    formGroupBox: {
        ...Styles.formGroupBox,
        margin: 10,
        width: 40,
    },
});

export default TextInputBox;
