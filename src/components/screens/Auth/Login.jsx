import './auth.css'

const Login = () => {
  return (
    <div className='authMain'>
      <h3>Login</h3>
      <form action="">
        <div className="formControl">
          <label htmlFor="user">Username</label>
          <input type="text" id="user"/>
        </div>
        <div className="formControl">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
      </form>
    </div>
  )
}

export default Login