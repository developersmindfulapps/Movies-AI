import { auth } from "../../utils/firebase";
import { signOut } from "firebase/auth";

const Headerin = () => {

  const signOutFn = async () => {
    await signOut(auth)
      .then(() => {})
      .catch((err) => console.log("in err", err));
  };

  return (
    <div>
      <button onClick={signOutFn}>Sign out</button>
    </div>
  );
};

export default Headerin;
