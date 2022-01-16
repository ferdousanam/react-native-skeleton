import React, {Component} from 'react';
import {COLORS} from '@constants';
import SpinnerOverlay from 'react-native-loading-spinner-overlay';

class Spinner extends Component {
    render() {
        return <SpinnerOverlay color={COLORS.primary} {...this.props} />;
    }
}

export default Spinner;
