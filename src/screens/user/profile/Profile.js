import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Avatar, List, Title} from 'react-native-paper';
import Spinner from 'react-native-loading-spinner-overlay';
import Animated from 'react-native-reanimated';
import {connect} from 'react-redux';
import Styles from '@styles';
import styles from './styles';
import {COLORS, SIZES} from '@constants';
import {RefreshControl} from '@components';
import Header from '@components/inc/Header';
import {loadProfile} from '@actions/userAction';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spinner: false,
            refreshing: false,
            user: {},
        };
    }

    getAvatarLabel(name) {
        let label = '';
        if (name) {
            const names = name.split(' ');
            names.forEach((item) => {
                label += item.charAt(0);
            });
        }
        return label;
    }

    onRefresh = () => {
        this.setState({refreshing: true});
        this.props
            .loadProfile()
            .then(() => this.setState({refreshing: false}))
            .catch(() => this.setState({refreshing: false}));
    };

    render() {
        const {refreshing} = this.state;
        const {authUser} = this.props;
        return (
            <View style={Styles.container}>
                <Header navigation={this.props.navigation} title="Profile" />

                <Spinner visible={this.state.spinner} textContent={'Loading...'} />

                <Animated.ScrollView style={[Styles.topContainer]} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={this.onRefresh} />}>
                    {authUser && (
                        <View style={{marginBottom: 20}}>
                            <View style={{alignItems: 'center'}}>
                                <View style={{alignItems: 'center'}}>
                                    {authUser.image_url ? (
                                        <Avatar.Image size={100} source={{uri: authUser.image_url}} />
                                    ) : (
                                        <>
                                            <Avatar.Text size={100} label={this.getAvatarLabel(authUser.name)} />
                                        </>
                                    )}
                                </View>
                                <View>
                                    <Title style={{fontSize: SIZES.h2}}>{authUser.name}</Title>
                                    <View style={styles.badge}>
                                        <Text style={{fontSize: SIZES.h5, color: COLORS.white}}>{authUser.verification_status === 2 ? 'Verified' : 'Unverified'}</Text>
                                    </View>
                                </View>
                            </View>

                            <List.Section>
                                <List.Item style={Styles.listBorder} title={authUser.mobile} left={() => <List.Icon color="#000" icon="phone" />} />
                                <List.Item style={Styles.listBorder} title={authUser.email} left={() => <List.Icon color="#000" icon="email" />} />
                            </List.Section>
                        </View>
                    )}
                </Animated.ScrollView>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.userReducer && state.userReducer.token,
        authUser: state.userReducer && state.userReducer.authUser,
    };
};

export default connect(mapStateToProps, {loadProfile})(Profile);
