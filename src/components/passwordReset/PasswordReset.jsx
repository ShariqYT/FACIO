import React, { useEffect, useState } from 'react'
import './passwordReset.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { auth } from '../../config/firebase';
import { sendPasswordResetEmail } from 'firebase/auth';
import { RingLoader } from 'react-spinners';

function PasswordReset() {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)

        return
    }, [])

    const history = useNavigate()

    const handleReset = async (e) => {
        e.preventDefault()
        const reset = e.target.reset.value

        sendPasswordResetEmail(auth, reset).then(data => {
            alert("A link to reset your password will be sent to your Email.")
            history("/FACIO/sign-in")
        }).catch(err => {
            alert(err.code)
        })
    }

    return (
        <>
            {loading ? <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }} > <RingLoader
                color="#000"
                loading={loading}
                size={200}
                speedMultiplier={2.1}
            /></div > :
                <div className="container-reset">

                    <div className="card">
                        <p className="lock-icon"><i className="fas fa-lock"></i></p>
                        <h2>Forgot Password?</h2>
                        <p className='p-text'>You can reset your Password here</p>
                        <form onSubmit={(e) => handleReset(e)} id='reset_form'>
                            <input required type="email" name="reset" className="passInput" placeholder="Email address" />
                            <input className="btn" value="Reset" type='submit' />
                        </form>
                        <Link to="/FACIO/sign-in" className="btn-back">Login</Link>
                    </div>
                </div>
            }
        </>
    );
}

export default PasswordReset;
