


import { useState } from "react";
import About from "./About";
import { Link } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {signup, isLoading, error} = useSignup()  

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(username, email, password)
  };

  return (
    
      
    <div className="intro">
    <div className="introduction">

        
    
    <form className="create" onSubmit={handleSubmit}>
    <Link to="/home">
                <h1 className="bujji-title">BUJJI<small>-The Chef</small></h1>
            </Link>
      <div className="create-login">
      <h2 className="typing">Welcome to BUJJI</h2>
        <h4>Save time and discover new dishes with our Bujji.</h4>

      {/* <label htmlFor="username">Username</label> */}
      <input
        type="text"
        id="username"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        placeholder="USERNAME"
      />

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

      <button disabled={isLoading}>SIGN UP</button>
      {error && <div className="error">{error}</div>}

      <p>
        Already have an account? <Link to="/">LOGIN</Link>
      </p>
      </div>
    </form>
    <About />
    </div>
    </div>
  );
};

export default Signup;