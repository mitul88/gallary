import { useRef, useState, useEffect, useContext } from 'react'
import AuthContext from '../../../context/AuthProvider'
import { Link, Navigate } from 'react-router-dom'
import './auth.css'

const Login = () => {
  const {setAuth} = useContext(AuthContext)
  const userRef = useRef()
  const errRef = useRef()

  const [user, setUser] = useState('')
  const [pwd, setPwd] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false)
  
  useEffect(() => {
    userRef.current.focus()
  },[])

  useEffect(() => {
    setErrMsg('')
  },[user, pwd])

  const handleSubmit = async (e) => {
    e.preventDefault();

  }

  return (
    <>
      {success ? (
            // <Navigate to="/" />
            <h2>Signin successful</h2>
      ) : (
        <section className='authMain'>
          <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</p>
          <h3>Login</h3>
          <form onSubmit={handleSubmit}>
            <div className="formControl">
              <label htmlFor="username">Username:</label>
              <input 
                type="text" 
                id="username"
                ref={userRef}
                autoComplete='off'
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
              />
            </div>
            <div className="formControl">
              <label htmlFor="password">Password:</label>
              <input 
                type="password" 
                id="password" 
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
              />
            </div>
            <button>Sign in</button>
          </form>
          <p>
            Don't have an account ? <br />
            <span className='line'>
              <Link to="/register">Register</Link>
            </span>
          </p>
        </section>
      ) }
    </>
  )
}

export default Login