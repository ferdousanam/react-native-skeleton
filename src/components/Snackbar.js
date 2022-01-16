import React from 'react';

import {Snackbar as PaperSnackbar} from 'react-native-paper';

const Snackbar = (props) => {
    return (
        <PaperSnackbar
            onDismiss={props.onDismiss}
            action={{
                label: 'Dismiss',
                onPress: props.onDismiss,
            }}
            {...props}>
            {props.children}
        </PaperSnackbar>
    );
};

export default Snackbar;
