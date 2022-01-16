import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Appbar} from 'react-native-paper';
import {COLORS} from '@constants';

class Header extends Component {
    onPressBackButton = () => {
        if (this.props.handleBackButton) {
            this.props.handleBackButton();
            return;
        }
        if (this.props.navigation.canGoBack()) {
            this.props.navigation.goBack();
        } else {
            this.props.navigation.navigate('FilterScreenStackNavigator', {screen: 'HomeScreen'});
        }
    };
    render() {
        return (
            <Appbar.Header style={{backgroundColor: COLORS.primary}}>
                {this.props.showBack ? (
                    <Appbar.BackAction onPress={this.onPressBackButton} />
                ) : (
                    this.props.token && <Appbar.Action icon="menu" onPress={() => this.props.navigation.openDrawer()} />
                )}
                <Appbar.Content title={this.props.title ? this.props.title.toTitleCase() : null} subtitle={this.props.subTitle ? this.props.subTitle : ''} />
            </Appbar.Header>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.userReducer.token,
        authUser: state.userReducer.authUser,
    };
};

export default connect(mapStateToProps)(Header);
