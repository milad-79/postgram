import "./styles.css";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Snackbar } from "@mui/material";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useContext, useState } from "react";
import { AuthCotext } from "../../context/authContext";
import React from "react";

function SingUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthCotext)

  const handeleSingUp = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({type:"SINGING", payload:user})
        navigate("/home");
      })
      .catch((error) => {
        setError(true);
      });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setError(false);
  };

  return (
    <div className="sing-up">
      <img
        src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png"
        alt="logo"
        className="logo-sing-up-img"
      />
      <form className="sing-up-form" onSubmit={handeleSingUp}>
        <label className="label-sing-up">Email</label>
        <input
          type="email"
          className="input-sing-up"
          placeholder="exampel@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="label-sing-up">Passowrd</label>
        <input
          type="password"
          className="input-sing-up"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="sing-up-btn">
          SingUp
        </button>
      </form>

      {error ? (
        <Snackbar open={error} autoHideDuration={4000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="error"
            sx={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            This Email Sing up Before
          </Alert>
        </Snackbar>
      ) : null}

      <Link to="/">
        <span className="sing-up-link">LogIn</span>
      </Link>
    </div>
  );
}

export default React.memo(SingUp);
