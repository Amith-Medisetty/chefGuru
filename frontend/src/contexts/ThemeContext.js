import { createContext , useState } from "react";

export const ThemeContext = createContext()

export const ThemeContextProvider = ({children}) => {

    // const state = {
    //     isLightTheme : false,
    //     light : {syntax:"#555", ui:"#ddd", bg:"#eee"},
    //     dark : {syntax:"#ddd", ui:"#333", bg:"#555"}
    // }

    const [isLightTheme, setIsLightTheme] = useState(true);
    const light = { syntax: "#121212", ui: "white", bg: "#121212" };
    const dark = { syntax: "white", ui: "#121212", bg: "#121212" };
    const toggleTheme = () => {
        setIsLightTheme(prevTheme => !prevTheme);
    };

    return (
        <ThemeContext.Provider value={{ isLightTheme, light, dark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}