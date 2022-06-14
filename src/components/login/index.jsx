import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthCotext } from "../../context/authContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Alert ,Snackbar } from "@mui/material";
import 'react-toastify/dist/ReactToastify.css';
import { auth } from "../../firebase";
import "./styles.css";

function LogIn() {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);
  const navigate =useNavigate();
  const { dispatch } =useContext(AuthCotext)

  const handeleLog = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword (auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({type:"LOGIN", payload:user})
        navigate('/home')
      })
      .catch((error) => {
       setError(true)
      });
  };


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setError(false);
  };

  return (
    <div className="login">
      <img
        src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png"
        alt="logo"
        className="logo-login-img"
      />
      <form className="login-form" onSubmit={handeleLog}>
        <label className="label-login">Email</label>
        <input
          type="email"
          className="input-login"
          placeholder="mike@email.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="label-login">Passowrd</label>
        <input
          type="password"
          className="input-login"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="login-btn">
          LogIn
        </button>
        {error ? 
         <Snackbar open={error} autoHideDuration={4000} onClose={handleClose}>
           <Alert onClose={handleClose} severity="error" sx={{ width: '100%' , display: 'flex' ,justifyContent: 'center'}}>
             Email or Password Worng !!!
           </Alert>
         </Snackbar>
         : null}
      </form>

      <Link to="/singup">
          <span className="sing-up-link">Sing Up</span>
      </Link>
    </div>
  );
}

export default React.memo(LogIn);
