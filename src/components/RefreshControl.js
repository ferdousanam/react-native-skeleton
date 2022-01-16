import React, {Component} from 'react';
import {RefreshControl as RefreshControlReactNative} from 'react-native';
import {COLORS} from '@constants';

class RefreshControl extends Component {
    render() {
        return <RefreshControlReactNative colors={[COLORS.primary]} {...this.props} />;
    }
}

export default RefreshControl;
