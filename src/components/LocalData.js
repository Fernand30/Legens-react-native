import { AsyncStorage } from 'react-native';

export default {
    getUserData() {
        return AsyncStorage.getItem("@UserData");
    },

    setUserData(data) {
        return AsyncStorage.setItem("@UserData", JSON.stringify(data));
    }
};