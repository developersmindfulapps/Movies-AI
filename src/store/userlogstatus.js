import { create } from "zustand";
import { devtools } from 'zustand/middleware'

const userSignInStatus = create(devtools((set) => ({
    isSignIn: false,
    userObject: null,
    addUserDetails: (item) => set({ userObject: item }),
    removeUserDetails: () => set({ userObject: null }),
    signInuser: () => set({ isSignIn: true }),
    signOutUser: () => set({ isSignIn: false })
})))

export default userSignInStatus;