import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonActions} from '@react-navigation/native';
import * as RootNavigation from '@/navigations/RootNavigation';

class FCMService {
    register = () => {
        this.foregroundNotification();
        this.createNotificationListeners();
    };

    unRegister() {
        this.notificationOpenedListener();
    }

    requestUserPermission = async () => {
        const authStatus = await messaging().requestPermission();
        const enabled = authStatus === messaging.AuthorizationStatus.AUTHORIZED || authStatus === messaging.AuthorizationStatus.PROVISIONAL;

        if (enabled) {
            console.log('Authorization status:', authStatus);
        }
    };

    checkUserPermission = async () => {
        const enabled = await messaging().hasPermission();
        if (enabled) {
            await this.getToken();
        } else {
            await this.requestUserPermission();
        }
    };

    getToken = () => {
        return new Promise(async (resolve, reject) => {
            const fcmToken = await AsyncStorage.getItem('fcmToken');
            if (fcmToken) {
                resolve(fcmToken);
                return;
            }

            messaging()
                .getToken()
                .then((fcmToken) => {
                    if (fcmToken) {
                        AsyncStorage.setItem('fcmToken', fcmToken);
                        resolve(fcmToken);
                        console.log('Your Firebase Token is:', fcmToken);
                    } else {
                        reject('Failed', 'No token received');
                        console.log('Failed', 'No token received');
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        });
    };

    onNotification(remoteMessage) {
        // Override this hook where this class is initialized
    }

    localNotification({notification, data}) {
        // const icon = notification.android.imageUrl;
        // const route = data.route ? JSON.parse(data.route) : undefined;
        // NotifeeService.displayNotification({
        //     title: notification.title,
        //     body: notification.body,
        //     android: {
        //         largeIcon: icon,
        //         bigPicture: icon,
        //         bigLargeIcon: icon,
        //     },
        //     route,
        // });
    }

    foregroundNotification() {
        return messaging().onMessage((remoteMessage) => {
            this.onNotification(remoteMessage);
            this.localNotification(remoteMessage);
        });
    }

    getInitialNotification() {
        // Check whether an initial notification is available
        return messaging()
            .getInitialNotification()
            .then((remoteMessage) => {
                if (remoteMessage) {
                    this.onNotification(remoteMessage);
                    this.localNotification(remoteMessage);
                }
            });
    }

    createNotificationListeners() {
        this.notificationOpenedListener = messaging().onNotificationOpenedApp((remoteMessage) => {
            this.onNotification(remoteMessage);
            const {route} = remoteMessage.data;
            if (route) {
                RootNavigation.dispatch(CommonActions.navigate(JSON.parse(route)));
            }
        });
        // Register background handler
        messaging().setBackgroundMessageHandler(async (remoteMessage) => {
            console.log('Message handled in the background!', remoteMessage);
        });

        this.getInitialNotification();
    }
}

export default new FCMService();
