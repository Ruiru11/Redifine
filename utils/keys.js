import AsyncStorage from "@react-native-community/async-storage";

export const setToken = async token => {
  try {
    await AsyncStorage.setItem("TOKEN_KEY", token);
  } catch (error) {
    return null;
  }
};

export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem("TOKEN_KEY");
    return token;
  } catch (error) {
    return null;
  }
};

export const LogOut = async (callback = () => {}) => {
  try {
    await AsyncStorage.removeItem("TOKEN_KEY", () => callback("Login"));
   
  } catch (error) {
    return null;
  }
};



