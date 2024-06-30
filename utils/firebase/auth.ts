import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "./config";
import Cookies from "js-cookie";

export const signUp = async (
  email: string,
  password: string,
  username: string
) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    await updateProfile(user, { displayName: username });

    return user;
  } catch (error) {
    console.error("Error signing up:", error);
  }
};

export const login = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user: any = userCredential.user;

    console.log("User logged in:", userCredential.user);
    Cookies.set("token", user.accessToken);
    Cookies.set(
      "data",
      JSON.stringify({
        name: user.displayName,
        email: user.email,
      })
    );

    return user;
  } catch (error) {
    console.error("Error logging in:", error);
  }
};
