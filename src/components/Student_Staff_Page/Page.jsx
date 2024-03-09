import React, { useEffect, useState } from 'react'
import { auth } from '../../config/firebase';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { RingLoader } from 'react-spinners';

const Page = () => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)

    return
  }, [])

  const history = useNavigate()

  const handleClick = () => {
    signOut(auth).then(val => {
      // console.log(val, "val")
      history('/FACIO/sign-in')
    })
  }
  document.title = "Staff/Student - SmartAttend";

  return (
    <>
      {loading ? <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }} > <RingLoader
        color="#000"
        loading={loading}
        size={200}
        speedMultiplier={2.1}
      /></div > :
        <div>
          Staff/Student Page
          <button onClick={handleClick}>SignOut</button>
        </div>
      }
    </>
  )
}

export default Page