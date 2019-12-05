import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";
import { Platform } from 'react-native'


const baseUrl = Platform.OS === "ios" ? "http://127.0.0.1:4000" : "http://10.0.2.2:4000";

const getToken = async () => {
  return AsyncStorage.getItem("TOKEN_KEY");
};

class ClientConnect {
  methods = ["get", "post", "put", "delete"];
  constructor() {
    this.axios = token =>
      axios.create({
        baseURL: baseUrl,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token || ""}`
        }
      });

    this.methods.forEach(method => {
        ClientConnect.prototype[method] = async (url, data = {}) => {
        const token = await getToken();
        return this.axios(token)[method](url, data);
      };
    });
  }
}

export const axiosWithToken = new ClientConnect();
