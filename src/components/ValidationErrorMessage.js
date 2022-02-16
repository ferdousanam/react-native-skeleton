import React from 'react';

import {Text} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Styles from '@styles';

const ValidationErrorMessage = (props) => {
    const errorLength = Object.keys(props.errors).length;
    return (
        <>
            {errorLength > 0 && (
                <>
                    {props.errors[props.errorKey] && (
                        <Animatable.View animation="fadeInLeft" duration={500} style={props.style}>
                            <Text style={Styles.errorMsg}>{props.errors[props.errorKey]}</Text>
                        </Animatable.View>
                    )}
                </>
            )}
        </>
    );
};

export default ValidationErrorMessage;
