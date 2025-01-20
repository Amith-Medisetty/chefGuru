
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {login, isLoading, error} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password)
  }

  return (
    <form className="create" onSubmit={handleSubmit}>
      <Link to="/home">
                <h1 className="bujji-title">BUJJI<small>-The Chef</small></h1>
            </Link>
      <div className="create-login">

        <h2 className="typing">Welcome to BUJJI</h2>
        <h4>Save time and discover new dishes with our Bujji.</h4>

        {/* <label htmlFor="email">Email</label> */}
        <input
          type="text"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="EMAIL"
        />

        {/* <label htmlFor="password">Password</label> */}
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="PASSWORD"
        />

        <button disabled={isLoading}>LOGIN</button>
        {error && <div className="error">{error}</div>}

        <p>
          Don't have an account? <Link to="/signup">SIGN UP</Link>
        </p>
      </div>
    </form>
  );
};

export default Login;
