import React, { useState, useRef } from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom'
import './Login.css'

import Hero from '../../Hero/Hero'

function Login() {
  const history = useHistory()
  // Reference input fields
  const emailRef = useRef()
  const passwordRef = useRef()

  const handleFormSubmit = (event) => {
    event.preventDefault()
    // HANDLE SIGN IN AND AUTHENTICATION PROCESS.

    const checkLogin = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }

    if (emailRef.current.value && passwordRef.current.value) {
      fetch('/getuser', {
        method: 'POST',
        body: JSON.stringify(checkLogin),
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json(res))
        .then((retrievedUser) => {
          if (retrievedUser) {
            // console.log(retrievedUser)
            emailRef.current.value = ''
            passwordRef.current.value = ''
            ////////////////////////////////////////
            const location = {
              pathname: './userprofile',
              state: retrievedUser,
            }
            history.push(location)
            ////////////////////////////////////////
          } else {
            console.log('User not found.')
          }
        })
    } else {
      console.log('INPUT INFO')
    }
  }

  return (
    <div className="wrapper">
      <div className="row">
        <div className="col">
          <Hero />
        </div>
        <div className="col">
          <form onSubmit={(event) => handleFormSubmit(event)}>
            <div className="form-group">
              <label for="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                ref={emailRef}
              ></input>
            </div>

            <div className="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
                ref={passwordRef}
              ></input>
              <button type="submit" className="btn btn-primary">
                Sign In
              </button>
            </div>

            <div className="form-group">
              <small id="redirectSignin" className="form-text text-muted">
                Don't have an account yet?
              </small>
              <Link to="/signup">
                <button type="submit" className="btn btn-primary">
                  Sign Up
                </button>
              </Link>
            </div>
            <Link to="/quiz">
              <button type="submit" className="btn btn-primary">
                GO TO QUESTIONS
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login