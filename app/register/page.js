const Register = () => {
  return (
    <main>
      <div>
        <div>
          <h1>Sign Up</h1>
          <p>
            Already have an account?
          </p>
          <div>
            <span>
              Login with Google
            </span>
          </div>
          <form>
            <div>
              <label>Name</label>
              <input type="text" required />
            </div>
            <div>
              <label>Email</label>
              <input type="email" required />
            </div>
            <div>
              <label>Password</label>
              <input type="password" required />
            </div>
            <button>Sign Up</button>
          </form>
        </div>
      </div>
    </main>
  )
}

export default Register
