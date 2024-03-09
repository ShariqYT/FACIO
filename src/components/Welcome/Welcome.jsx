import React, {useState, useEffect} from 'react'
import Styles from './Welcome.module.css'
import logo from '../../assets/Logo.png'
import vector from '../../assets/vector.png'
import { Link } from 'react-router-dom';
import { RingLoader } from 'react-spinners'

const Welcome = () => {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    
        return
    }, [])
    

    document.title = "Welcome - FACIO";
    return (
        <>
            {loading ? <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }} > <RingLoader
                color="#000"
                loading={loading}
                size={200}
                speedMultiplier={2.1}
            /></div > :

                <div className={Styles.container}>
                    <div className={Styles.welcome}>
                        <div>
                            <img className={Styles.logo} src={logo} alt="" />
                            <p className={Styles.welcome_desc}>
                                Facial recognition attendance systems are technologies used to track attendance by identifying individuals through facial features. facial recognition attendance systems offer a convenient and efficient way to track attendance, reduce administrative overhead, and enhance security in various settings such as schools, businesses, and government institutions. However, it's essential to address concerns regarding privacy, data security, and potential biases in the technology's algorithms.</p>
                            <Link to="/FACIO/sign-in" >
                                <button id={Styles.welcome_btn}>
                                    Get Started
                                </button></Link>
                        </div>
                        <div>
                            <img src={vector} alt="" className={Styles.vector} />
                        </div>
                    </div>
                </div>
            }</>
    )
}

export default Welcome
