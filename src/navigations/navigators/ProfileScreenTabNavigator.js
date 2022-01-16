import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '@constants';
import Profile from '@screens/user/profile/Profile';
import EditProfile from '@screens/user/profile/Edit';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {bottomTabBarOptions} from '@/navigations/navigators/NavigatorOptions';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const ProfileScreenMainStack = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Profile" component={ProfileScreenTabNavigator} />
        </Stack.Navigator>
    );
};

const ProfileScreenTabNavigator = () => {
    return (
        <Tab.Navigator backBehavior={'initialRoute'} tabBarOptions={bottomTabBarOptions}>
            <Tab.Screen
                name="ViewProfile"
                component={Profile}
                options={{
                    unmountOnBlur: true,
                    tabBarLabel: 'View Profile',
                    tabBarIcon: ({focused}) => <Icon name="account" color={focused ? COLORS.black : COLORS.white} size={26} />,
                }}
            />

            <Tab.Screen
                name="UpdateProfile"
                component={EditProfile}
                options={{
                    unmountOnBlur: true,
                    tabBarLabel: 'Update Profile',
                    tabBarIcon: ({focused}) => <Icon name="square-edit-outline" color={focused ? COLORS.black : COLORS.white} size={26} />,
                }}
            />
        </Tab.Navigator>
    );
};

export default ProfileScreenMainStack;
