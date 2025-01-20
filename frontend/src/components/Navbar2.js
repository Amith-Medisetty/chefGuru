
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import { ThemeContext } from "../contexts/ThemeContext";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar2 = () => {
    const { isLightTheme, light, dark, toggleTheme } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    const { user } = useAuthContext();
    const { logout } = useLogout();
    const handleClick = () => {
        logout();
    };
    console.log(user);

    return (
        <header  >
            <div className="container">
                <Link to="/home">
                    <h1 >BUJJI<small>-The Chef</small></h1>
                </Link>

                <div className="container-components">
                    {user && (
                        <div className="container-tags">
                            <span className="container-tags">{user.username}</span>
                            <div onClick={handleClick} className="logout">Logout</div>
                        </div>
                    )}
                    
                    
                    {!user && (
                        <div className="container-tags">
                            <Link to="/" className="container-tags">
                                <p>Help</p>
                            </Link>
                            <Link to="/" className="container-tags">
                                <p>Login</p>
                            </Link>
                            <Link to="/signup" className="container-tags">
                                <p>Signup</p>
                            </Link>
                        </div>
                    )}                    
                </div>
            </div>
        </header>
    );
};

export default Navbar2;