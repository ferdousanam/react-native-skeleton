import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {Avatar, Caption, Drawer, Title} from 'react-native-paper';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '@constants';
import NavStyles from '@styles/Nav';
import {logout} from '@actions/userAction';
import HomeScreen from '@screens/user/home/HomeScreen';
import ProfileScreen from '../navigators/ProfileScreenTabNavigator';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const DrawerCreate = createDrawerNavigator();

class AfterAuthDrawer extends Component {
    render() {
        return (
            <DrawerCreate.Navigator backBehavior={'initialRoute'} drawerContent={(props) => <DrawerContent {...props} {...this.props} />}>
                <DrawerCreate.Screen options={{unmountOnBlur: true}} name="HomeScreen" component={HomeScreen} />
                <DrawerCreate.Screen name="ProfileScreen" component={ProfileScreen} />
            </DrawerCreate.Navigator>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        token: state.userReducer.token,
        profile: state.userReducer.authUser,
    };
};
export default connect(mapStateToProps, {logout})(AfterAuthDrawer);

const DrawerContent = (props) => {
    const {profile} = props;
    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <View style={NavStyles.drawerContent}>
                    <View style={[NavStyles.userInfoSection, NavStyles.bottomBorder]}>
                        <View style={{flexDirection: 'row', marginTop: 15, marginBottom: 15}}>
                            {profile && profile.image_url ? (
                                <Avatar.Image source={{uri: profile.image_url}} size={50} />
                            ) : (
                                <FontAwesome name="user-circle-o" size={50} color={COLORS.primary} />
                            )}
                            <View style={{marginLeft: 15, flexDirection: 'column'}}>
                                {profile && (
                                    <>
                                        <Title style={NavStyles.title}>{profile.name}</Title>
                                        <Caption style={NavStyles.caption}>{profile.mobile}</Caption>
                                    </>
                                )}
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={[NavStyles.drawerSection]}>
                        <DrawerItem
                            icon={({color, size}) => <Icon name="home" color={color} size={size} />}
                            label="Home"
                            onPress={() => {
                                props.navigation.navigate('HomeScreen', {screen: 'HomeScreen'});
                            }}
                        />
                        <DrawerItem
                            icon={({color, size}) => <Icon name="account-outline" color={color} size={size} />}
                            label="Profile"
                            onPress={() => {
                                props.navigation.navigate('ProfileScreen', {screen: 'Profile'});
                            }}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={NavStyles.bottomDrawerSection}>
                <DrawerItem icon={({color, size}) => <Icon name="exit-to-app" color={color} size={size} />} label="Sign Out" onPress={() => props.logout()} />
            </Drawer.Section>
        </View>
    );
};
