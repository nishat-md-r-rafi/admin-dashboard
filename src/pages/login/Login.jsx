import "./login.scss"
import { signInPopup } from '../../utils/firebase/firebase.utils';

const Login = () => {
  const logGoogleUser = async () => { 
    const response = await signInPopup();
    console.log(response)
  }
  return (
    <div className="login">
      {/* <button onClick={logGoogleUser}>Sign In with Google</button> */}
      <div className="formWrapper">
        
        <h1 style={{textAlign:"center"}}>Login</h1>
        <form className="loginForm">
          <label className="labelStyle">Name</label>
          <input className="inputStyle" placeholder={` Name...`}/>

          <label className="labelStyle">Email</label>
          <input className="inputStyle" placeholder=" Email..."/>

          <label className="labelStyle">Password</label>
          <input className="inputStyle" placeholder=" Password..."/>
          <p className="forget">forgot password?</p>
          <button className="loginButton">Login</button>
        </form>
  
       <p className="signText">Or SignUp using</p>
        <div className="icons">
          <GoogleIcon className="icon"/>
          <TwitterIcon className="icon"/>
        </div>
       <p className="signText">don't have an account? sign up!</p>
      </div>


    </div>
  )
}

export default Login