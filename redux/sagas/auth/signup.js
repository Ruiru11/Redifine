import Toast from "react-native-toast-native";
import { Platform } from "react-native";
import { put, call, takeEvery } from "redux-saga/effects";
import { SIGNUP } from "../../../constants/auth/signup";
import { signupsuccess, signupfailure } from "../../actions/auth/signup";
import api from "../../../utils/request";

export function* signupAsync({ payload }) {
  try {
    const { navigate } = payload;
    const response = yield call(api.signupUser, payload);
    yield put(signupsuccess());
    Toast.show(
      "Account created check your email to verify your email address",
      Toast.LONG,
      Toast.TOP,
      Successtyle
    );
    navigate("Login");
  } catch (error) {
    Toast.show("An error occured try Again", Toast.LONG, Toast.TOP, Errorstyle);
    yield put(signupfailure({ errors: error.request.response.message }));
  }
}

const Errorstyle = {
  backgroundColor: "black",
  width: 500,
  height: Platform.OS === "ios" ? 50 : 250,
  color: "white",
  fontSize: 15,
  lineHeight: 2,
  lines: 4,
  borderRadius: 15,
  fontWeight: "bold",
  yOffset: 40
};

const Successtyle = {
  backgroundColor: "#0c9c0f",
  width: 500,
  height: Platform.OS === "ios" ? 50 : 300,
  color: "white",
  fontSize: 15,
  lineHeight: 2,
  lines: 4,
  borderRadius: 15,
  fontWeight: "bold",
  yOffset: 40
};

export function* watchSignup() {
  yield takeEvery(SIGNUP, signupAsync);
}
