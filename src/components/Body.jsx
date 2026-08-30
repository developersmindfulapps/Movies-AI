import userSignInStatus from "../store/userlogstatus";
import Bodyout from "./Bodyout";
import Bodyin from "./Bodyin";

const Body = () => {
  const isSignedIn = userSignInStatus((state) => state.isSignIn);
  return <div>{isSignedIn ? <Bodyin /> : <Bodyout />}</div>;
};

export default Body;
