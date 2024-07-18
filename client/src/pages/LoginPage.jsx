import React from 'react'
import Login from '../components/Login'
import SignUp from '../components/SignUp'

export default function LoginPage() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center',  marginTop: '10%'}}>
        <Login />
        <SignUp />
    </div>
  )
}
