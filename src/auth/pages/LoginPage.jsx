import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const LoginPage = () => {
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  const onLogin = () => {
    login('Lucas Perez')
    navigate('/', {
      replace: true
    })  
  }

  return (
    <>
      <h1>LoginPage</h1>
      <hr />

      <button
        className="btn btn-primary"
        onClick={onLogin}
      >
        Login
      </button>
    </>
  )
}

export default LoginPage
