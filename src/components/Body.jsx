import userSignInStatus from "../store/userlogstatus";
import Bodyout from "./Bodyout";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import Browse from "./Browse";

const Body = () => {
  const isSignedIn = userSignInStatus((state) => state.isSignIn);
  const signIn = userSignInStatus((state) => state.signInuser);
  const signOut = userSignInStatus((state) => state.signOutUser);
  const userDetails = userSignInStatus((state) => state.addUserDetails)
  const clearStore = userSignInStatus((state) => state.removeUserDetails);

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        userDetails(user)
        signIn()
        navigate("/browse");
      } else {
        signOut()
        clearStore()
        navigate('/');
      }
    })
    return () => unsubscribe
    ;
  }, []);

  return <div>{isSignedIn ? <Browse /> : <Bodyout />}</div>;
};

export default Body;
