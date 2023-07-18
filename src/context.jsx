import { createContext, useState, useContext, useEffect } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const getInitialDarkMode = () => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    console.log('prefers dark mode: ', prefersDarkMode);
    const storedDarkMode = localStorage.getItem("isDarkTheme") === 'true' // converts string boolean to boolean
    if (storedDarkMode === null) {return prefersDarkMode}; //if storedDarkMode exists
    if (storedDarkMode !== null) {return storedDarkMode}
    // dark mode
    
}

const AppContext = ({children}) => {
    const [ isDarkTheme, setIsDarkTheme ] = useState(getInitialDarkMode());
    const [ searchValue, setSearchValue ] = useState('cat');

    const toggleDarkTheme = () => {
        const newDarkTheme = !isDarkTheme;
        setIsDarkTheme(!isDarkTheme);
    }

    useEffect(() => {
            document.body.classList.toggle('dark-theme', isDarkTheme);
            localStorage.setItem("isDarkTheme", JSON.stringify(isDarkTheme))
    }, [isDarkTheme]) // triggers every time dark theme changes

    

    return (
    <GlobalContext.Provider value={{isDarkTheme, toggleDarkTheme, searchValue, setSearchValue}}>
        {children}
    </GlobalContext.Provider>
    );
};

export default AppContext;