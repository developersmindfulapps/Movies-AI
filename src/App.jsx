import { Outlet, useNavigate } from "react-router";
import Header from "./components/common/Header";
import userSignInStatus from "./store/userlogstatus";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "./utils/firebase";

function App() {
  // const isSignedIn = userSignInStatus((state) => state.isSignIn);
  const signIn = userSignInStatus((state) => state.signInuser);
  const signOut = userSignInStatus((state) => state.signOutUser);
  const userDetails = userSignInStatus((state) => state.addUserDetails);
  const clearStore = userSignInStatus((state) => state.removeUserDetails);

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        userDetails(user);
        signIn();
        navigate("/browse");
      } else {
        signOut();
        clearStore();
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
