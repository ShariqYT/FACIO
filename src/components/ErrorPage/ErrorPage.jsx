import React, { useEffect, useState } from 'react'
import styles from './ErrorPage.module.css'
import { Link } from 'react-router-dom'
import { RingLoader } from 'react-spinners';

const ErrorPage = () => {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)

        return
    }, [])

    document.title = "Error 404 - FACIO";
    return (
        <>
            {loading ? <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }} > <RingLoader
                color="#000"
                loading={loading}
                size={200}
                speedMultiplier={2.1}
            /></div > :
                <section className={styles.page_404}>
                    <div className={styles.flex}>
                        <div className={styles.four_zero_four_bg}>
                            <h1 style={{ textAlign: 'center' }}>404</h1>
                        </div>
                        <div className={styles.contant_box_404}>
                            <h3 style={{ textAlign: 'center' }} className={styles.h2}>Look like you're lost</h3>
                            <p style={{ textAlign: 'center' }}>the page you are looking for not available!</p>
                            <Link to="/FACIO/" className={styles.link_404}>Go Back</Link>
                        </div>
                    </div>
                </section>
            }
        </>
    )
}

export default ErrorPage
