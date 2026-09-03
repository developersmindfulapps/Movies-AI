import { auth } from "../../utils/firebase";
import { signOut } from "firebase/auth";
import { NETFLIX_LOGO } from "../../constant";

const Headerin = () => {
  const signOutFn = async () => {
    await signOut(auth)
      .then(() => {})
      .catch((err) => console.log("in err", err));
  };

  return (
      <div className="z-10 p-2 flex justify-between items-center relative z-2 bg-linear-to-b from-gray-400 ">
        <img
          src={NETFLIX_LOGO}
          alt="logo"
          className="p-[10px] bg-[radial-gradient(#c3bdbd0f,#ddd7d700)] w-38 h-auto sm: w-46 lg:w-56 rounded-3xl"
        />
        <button className="bg-red-600 text-white p-2 rounded-xl font-bold hover:opacity-75 cursor-pointer" onClick={signOutFn}>Sign out</button>
      </div>
  );
};

export default Headerin;
