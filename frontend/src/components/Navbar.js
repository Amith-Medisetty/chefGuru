
// import { useContext } from "react"
// import { Link } from "react-router-dom" 
// import { ThemeContext } from "../contexts/ThemeContext"
// import { useLogout } from "../hooks/useLogout";
// import { useAuthContext } from "../hooks/useAuthContext";

// const Navbar = () =>{
//     const { isLightTheme, light, dark, toggleTheme } = useContext(ThemeContext);
//     const theme = isLightTheme ? light : dark;

//     const {user} = useAuthContext()

//     const {logout} = useLogout()
//     const handleClick = () => {
//         logout()
//     }
//     console.log(user)

//     return(        
//         <header>
//             <div className="container"  > 
//                 <Link to="/home" >
//                     <h1><small>The Chef</small></h1>
//                 </Link>
               
//                 <div className="container-components">
//                     {user && (
//                         <div>
//                             <span className="container-tags">{user.username}</span>
//                             <div onClick={handleClick} className="container-tags">Logout</div>
//                         </div>
//                     )}

//                     <Link to="/" className="container-tags" >
//                         <p>Help</p>
//                     </Link>
                    
//                     <button onClick={toggleTheme}>Theme</button>
//                 </div>               
//             </div>
//         </header>
//     )
// }
// export default Navbar






// import { useContext, useState, useEffect } from "react";
// import { Link } from "react-router-dom"; 
// import { ThemeContext } from "../contexts/ThemeContext";
// import { useLogout } from "../hooks/useLogout";
// import { useAuthContext } from "../hooks/useAuthContext";

// const Navbar = () => {
//     const { isLightTheme, light, dark, toggleTheme } = useContext(ThemeContext);
//     const theme = isLightTheme ? light : dark;

//     const { user } = useAuthContext();
//     const { logout } = useLogout();
//     const handleClick = () => {
//         logout();
//     };
//     console.log(user);

//     const [scrolled, setScrolled] = useState(false);

//     const handleScroll = () => {
//         const offset = window.scrollY;
//         if (offset > 50) {
//             setScrolled(true);
//         } else {
//             setScrolled(false);
//         }
//     };

//     useEffect(() => {
//         window.addEventListener('scroll', handleScroll);
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     return (
//         <header id="navbar" className={scrolled ? 'scrolled' : ''}>
//             <div className="container">
//                 <Link to="/home">
//                     <h1 className={scrolled ? 'scrolled' : ''}>BUJJI<small>-The Chef</small></h1>
//                 </Link>

//                 <div className="container-components">
//                     {user && (
//                         <div className="container-tags">
//                             <span className="container-tags">{user.username}</span>
//                             <div onClick={handleClick} className="logout">Logout</div>
//                         </div>
//                     )}
                    
                    
//                     {!user && (
//                         <div className="container-tags">
//                             <Link to="/" className="container-tags">
//                                 <p>Help</p>
//                             </Link>
//                             <Link to="/" className="container-tags">
//                                 <p>Login</p>
//                             </Link>
//                             <Link to="/signup" className="container-tags">
//                                 <p>Signup</p>
//                             </Link>
//                         </div>
//                     )}
                    
                
                    
//                 </div>
//             </div>
//         </header>
//     );
// };

// export default Navbar;






import { useContext, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; 
import { ThemeContext } from "../contexts/ThemeContext";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
    const { isLightTheme, light, dark, toggleTheme } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    const { user } = useAuthContext();
    const { logout } = useLogout();
    const handleClick = () => {
        logout();
    };

    const location = useLocation();
    const isHomePage = location.pathname === '/home';

    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        if (isHomePage) {
            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        } else {
            setScrolled(false); // Reset scrolled state for other pages
        }
    }, [isHomePage]);

    return (
        <header id="navbar" className={`${scrolled ? 'scrolled' : ''} ${isHomePage ? 'home' : 'solid'}`}>
            <div className="container">
                <Link to="/home">
                    <h1 className={scrolled ? 'scrolled' : ''}><small>BUJJI-The Chef</small></h1>
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

export default Navbar;

