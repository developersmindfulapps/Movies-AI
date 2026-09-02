import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useRef, useState } from "react";
import { auth } from "../utils/firebase";

const Bodyout = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [validationMsg, setValidationMsg] = useState("");

  const displayName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const changeForm = () => {
    setValidationMsg("");
    setSignInForm(!isSignInForm);
  };

  const handleFormSubmission = async () => {
    const message =
      !email.current.value || !password.current.value
        ? "Invalid Form Details"
        : "";
    if (message) {
      setValidationMsg(message);
      return;
    }

    if (!isSignInForm) {
      try {
        await createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value,
        );
        updateProfile(auth.currentUser, {
          displayName: displayName.current.value,
          photoURL: "https://example.com/jane-q-user/profile.jpg",
        })
          .then(() => {
          })
          .catch((error) => {
            setValidationMsg(error.message);
          });
      } catch (error) {
        setValidationMsg(error.message);
      }
    } else {
        await signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value,
        ).then().catch((error) => {
          console.log(error)
          setValidationMsg(error.message);
        });
    }
  };

  return (
    <div className="relative min-h-[calc(100vh-141px)] flex items-center justify-center">
      <img
        className="fixed inset-0 w-full h-full object-cover -z-10"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/a00fdfd7-4916-4f12-b5ff-c05b9d7b4d07/web/IN-en-20260824-TRIFECTA-perspective_26443db2-0249-420d-bb73-77cfeea330e5_large.jpg"
        alt=""
      />
      <div className="z-2 w-full p-2 mx-2 sm:w-[75%] lg:rounded-[70px] lg:w-[50%] m-auto min-h-max opacity-90 relative bg-[#441519] bg-[linear-gradient(236deg,rgba(68,21,25,1)_0%,rgba(10,1,2,1)_100%)]">
        <form
          action={handleFormSubmission}
          className="flex flex-col gap-4  py-20 w-[50%] m-auto"
        >
          <div>
            <h1 className="font-bold text-xl text-white">
              Enter your info to Sign In
            </h1>
            <h4 className="font-medium  text-white pb-4">
              Or Sign Up for a new account
            </h4>
          </div>
          {!isSignInForm && (
            <input
              ref={displayName}
              className="input-style "
              type="text"
              placeholder="Name"
            />
          )}
          <input
            ref={email}
            className="input-style "
            type="email"
            placeholder="Email"
          />
          <input
            ref={password}
            className="input-style "
            type="password"
            placeholder="Password"
          />

          <button
            type="submit"
            className="bg-[rgb(229,9,20)] text-white text-xl px-6 py-3 w-fit rounded-3xl cursor-pointer duration-300 ease-linear"
          >
            <span>{isSignInForm ? "Sign In" : "Sign Up"}</span>
          </button>

          {validationMsg && (
            <h5 className="text-red-800 font-bold italic">{validationMsg}</h5>
          )}

          {isSignInForm ? (
            <span className="mt-2 text-white font-extralight">
              New to Netflix?{" "}
              <span
                onClick={changeForm}
                className="cursor-pointer font-semibold"
              >
                Sign Up
              </span>
            </span>
          ) : (
            <span className="mt-2 text-white font-extralight">
              Already a user?{" "}
              <span
                className="cursor-pointer font-semibold"
                onClick={changeForm}
              >
                Sign In
              </span>
            </span>
          )}
        </form>
      </div>
    </div>
  );
};

export default Bodyout;
