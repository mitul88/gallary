import { useRef, useState, useEffect, useContext } from 'react'
import AuthContext from '../../../context/AuthProvider'
import axios from '../../../api/axios'
import { Link, Navigate } from 'react-router-dom'
import './auth.css'



const LOGIN_URL = '/api/auth/login'


const Login = () => {
  const {setAuth} = useContext(AuthContext)
  const userRef = useRef()
  const errRef = useRef()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false)
  
  useEffect(() => {
    userRef.current.focus()
  },[])

  useEffect(() => {
    setErrMsg('')
  },[email, password])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await axios.post(LOGIN_URL,
          JSON.stringify({email, password}),
          {
            headers: {'Content-Type': 'application/json'},
            withCredentials: true,
          }
        );
        console.log(JSON.stringify(response?.data))
      setEmail('');
      setPassword('')
      setSuccess(true)
    } catch(err) {
      console.log(err)
    }
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
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </div>
            <div className="formControl">
              <label htmlFor="password">Password:</label>
              <input 
                type="password" 
                id="password" 
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
            </div>
            <button type='submit'>Sign in</button>
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