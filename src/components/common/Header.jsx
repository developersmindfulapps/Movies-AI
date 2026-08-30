import userSignInStatus from "../../store/userlogstatus"
import Headerout from "./Headerout"
import Headerin from "./Headerin"

const Header = () => {

  const isSignedIn = userSignInStatus(set => set.isSignIn)
  return (
    <div>
      {isSignedIn ? <Headerin /> : <Headerout />}
    </div>
  )
}

export default Header