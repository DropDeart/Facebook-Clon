import React from 'react'
import './Login.css'
import image from '../../img/logo/login_photo.png'
import logo from '../../img/logo/facebook_logo.png'
import { Button } from '@material-ui/core'
import { authentication } from '../auth/firebase'
import {signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { actionTypes } from '../StateProvider/Reducer'
import { useStateValue } from '../StateProvider/StateProvider'

const Login = () => {
    const [state, dispatch] = useStateValue();
  const signIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
    .then ((result) =>{

        dispatch({
            type:actionTypes.SET_USER,
            user:result.user
        })

    })
    .catch ((error) =>{
        console.log(error)
    })

  }
  return (
    <div className="login">
      <div className="login_logo">
        <img src={image} alt="" />
        <img src={logo} alt="" />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  )
}

export default Login
