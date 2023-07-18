import React from 'react'
import { useGlobalContext } from './context'
import { FaMoon, FaSun } from 'react-icons/fa'



const ThemeToggle = () => {
    const { isDarkTheme, toggleDarkTheme } = useGlobalContext();
    return (
        <div className='toggle-container'>
            Toggle Dark/Light Mode:
            <button 
                onClick={toggleDarkTheme}
                className='dark-toggle'
            >
                {isDarkTheme ? <FaMoon className='toggle-icon'/> : <FaSun className='toggle-icon'/>}
            </button>
        </div>
    )
}

export default ThemeToggle

