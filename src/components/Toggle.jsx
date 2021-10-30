import React from 'react'
import ToggleStyle from '../components/Toggle.css'
import Sun from '../Assets/sun.png'
import Moon from '../Assets/moon.png'
import { useContext } from 'react';
import { ThemeContext } from '../Context';

function Toggle() {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    function turnOffDark(){
        theme.dispatch({ type: "LIGHT" });
    }

    function turnOnDark(){
        theme.dispatch({ type: "DARK" });
    }
    return (
        <div className="toggler">
            <img src={Sun} alt="pic" onClick={turnOffDark} style={{opacity: darkMode ? "0.25" : "1"}}/>
            <img src={Moon} alt="pic" onClick={turnOnDark} style={{opacity: !darkMode ? "0.25" : "1"}}/>
        </div>
    )
}

export default Toggle
