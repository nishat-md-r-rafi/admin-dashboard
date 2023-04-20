import "./login.scss"
import { signInPopup } from '../../utils/firebase/firebase.utils';

const Login = () => {
  const logGoogleUser = async () => { 
    const response = await signInPopup();
    console.log(response)
  }
  return (
    <div>
      <button onClick={logGoogleUser}>Sign In with Google</button>
      <form></form>
    </div>
  )
}

export default Login