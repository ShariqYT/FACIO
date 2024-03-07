import React, { useEffect, useState } from 'react'
import './login.css';
import logo from '../../assets/Logo.png'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { auth, googleProvider } from '../../config/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, signInWithPopup } from 'firebase/auth';
import { RingLoader } from 'react-spinners';

function Login() {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)

        return
    }, [])

    const history = useNavigate()

    const [isSignIn, setIsSignIn] = useState(true);
    const toggle = () => {
        setIsSignIn(!isSignIn);
    };


    const handleSignUp = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const cpassword = e.target.cpassword.value;

        if (cpassword === password) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    alert("Your account has been created!");
                })
                .catch((error) => {
                    // console.error("Error creating user:", error);
                    alert(error.code);
                });
        } else {
            alert("Password doesn't match with Confirm Password");
        }
    };




    const handleSignIn = (e) => {
        e.preventDefault();

        const lemail = e.target.lemail.value;
        const lpass = e.target.lpass.value;

        signInWithEmailAndPassword(auth, lemail, lpass)
            .then(data => {
                // console.log(data, "authData");

                if (lemail === 'smartattend@admin.com') {
                    history('/admin');
                } else {
                    history('/staff-student');
                }
            })
            .catch(error => {
                alert(error.code);
            });
    };

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider).then((res) => {
            history('/staff-student')
        }).catch((err) => {
            alert(err)
        })
    }

    document.title = "Sign In / Sign Up - FACIO";

    return (
        <>
            {loading ? <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }} > <RingLoader
                color="#000"
                loading={loading}
                size={200}
                speedMultiplier={1}
            /></div > :

                <div id="container" className={`container ${isSignIn ? 'sign-in' : 'sign-up'}`}>
                    <div className="row">
                        <div className="col align-items-center flex-col sign-up">
                            <div className="form-wrapper align-items-center">

                                <form onSubmit={(e) => handleSignUp(e)}>
                                    <div className="form sign-up">
                                        <div className="input-group">
                                            <i className='bx bx-mail-send'></i>
                                            <input required id="email" name='email' type="email" placeholder="Email"
                                            />
                                        </div>
                                        <div className="input-group">
                                            <i className='bx bxs-lock-alt'></i>
                                            <input required id="passw" name='password' type="password" placeholder="Password"
                                            />
                                        </div>
                                        <div className="input-group">
                                            <i className='bx bxs-lock-alt'></i>
                                            <input required id="cpass" name='cpassword' type="password" placeholder="Confirm password" />
                                        </div>
                                        <input className="btn" type="submit" value="Signup" />
                                        <p>
                                            <span>Already have an account?</span>
                                            <b onClick={toggle} className="pointer text-dec-line">Sign in here</b>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col align-items-center flex-col sign-in">
                            <div className="form-wrapper align-items-center">

                                <form onSubmit={(e) => handleSignIn(e)}>
                                    <div className="form sign-in">
                                        <div className="input-group">
                                            <i className='bx bxs-user'></i>
                                            <input required id="lemail" name='lemail' type="email" placeholder="Email" />
                                        </div>
                                        <div className="input-group">
                                            <i className='bx bxs-lock-alt'></i>
                                            <input required id="lpass" name='lpass' type="password" placeholder="Password" />
                                        </div>
                                        <button type="button" onClick={handleGoogleSignIn} className="login-with-google-btn" >
                                            Sign in with Google
                                        </button>
                                        <input className="btn" type="submit" value="Login" />
                                        <Link to="/reset" id='reset_pass' >Reset password</Link>
                                        <p>
                                            <span>Don't have an account?</span>
                                            <b onClick={toggle} className="pointer text-dec-line">Sign up here</b>
                                        </p>
                                    </div>
                                </form>

                            </div>
                            <div className="form-wrapper"></div>
                        </div>
                    </div>
                    <div className="row content-row">
                        <div className="col align-items-center flex-col">
                            <div className="text sign-in">
                                <h2>Welcome,</h2>
                            </div>
                            <div className="img sign-in">
                                <img className='logo' src={logo} alt="" />
                            </div>
                        </div>
                        <div className="col align-items-center flex-col">
                            <div className="img sign-up">
                                <img className='logo' src={logo} alt="" />
                            </div>
                            <div className="text sign-up">
                                <h2>Join with us</h2>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default Login;
