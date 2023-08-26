import './register.css'
import {useContext, useRef} from "react";
import {AuthContext} from "../../context/AuthContext";
import {loginCall} from "../../apiCalls";
import axios from "axios";
import {useNavigate } from "react-router";

export default function Register() {
    const username = useRef()
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const {user, isFetching, error, dispatch} = useContext(AuthContext);
    const history=useNavigate();

    const handleClick = async (e) => {
        e.preventDefault();
        console.log('here');
        if (passwordAgain.current.value !== password.current.value) {
            passwordAgain.current.setCustomValidity('Passwords don\'t match');
        }
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value
            }
            try {
                const res = await axios.post('/auth/register', user);
                console.log('here');
                history('/login', {replace: true})
            } catch (e) {
                console.log('error ', e);
            }


    }
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
                    <form onSubmit={handleClick} className="loginBox">
                        <input placeholder="Username" required className="loginInput" ref={username}/>
                        <input type='email' placeholder="Email" required className="loginInput" ref={email}/>
                        <input type='password' minLength='6' placeholder="Password" required className="loginInput"
                               ref={password}/>
                        <input type='password' minLength='6' placeholder="Password again" required
                               className="loginInput" ref={passwordAgain}/>
                        <button className="loginButton" type='submit'>Sign Up</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">Log into Account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
