import { create } from "zustand";

const userSignInStatus = create(() => ({
    isSignIn: false
}))

export default userSignInStatus;