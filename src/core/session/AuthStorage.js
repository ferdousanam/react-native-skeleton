import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
    static async store(key, value) {
        try {
            await AsyncStorage.setItem(key, value);
        } catch (e) {
            console.log('Error Storing Data', e);
        }
    }
    static async get(key) {
        try {
            return await AsyncStorage.getItem(key);
        } catch (e) {
            console.log('Error retrieving Data', e);
        }
    }
    static async remove(key) {
        try {
            await AsyncStorage.removeItem(key);
        } catch (e) {
            console.log('Error occurred', e);
        }
    }
}

export default AuthStorage;
