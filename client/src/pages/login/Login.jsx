import './login.css'
import {useContext, useRef} from "react";
import {loginCall} from "../../apiCalls";
import {AuthContext} from "../../context/AuthContext";
import {CircularProgress} from "@mui/material";
import {Link} from "react-router-dom";

export default function Login() {
    const email = useRef();
    const password = useRef();
    const {user, isFetching, error, dispatch} = useContext(AuthContext)
    const handleClick = (e) => {
        e.preventDefault();
        loginCall({email: email.current.value, password: password.current.value}, dispatch)
    }
    console.log('user==> ', user);
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Social</h3>
                    <span className="loginDesc">
                        Connect with friends and the world around on social
                    </span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input placeholder="Email" type='email' className="loginInput" ref={email}/>
                        <input placeholder="Password" type='password' minLength='6' className="loginInput"
                               ref={password}/>
                        <button className="loginButton" type='submit' disabled={isFetching}>{isFetching ?
                            <CircularProgress color="inherit" size="25px"/> : 'Login'}</button>
                        <span className="loginForgot">Forgot Password?</span>
                            <button type='button' className="loginRegisterButton">Create a new account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
