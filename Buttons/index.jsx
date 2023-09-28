import React, {useContext, useState} from 'react';
import {ThemeContext} from "../context/themeContext.jsx";


function Button(props) {
    const{handelToggle,isDarkTheme} = useContext(ThemeContext)
    console.log(handelToggle,isDarkTheme)

    return (
        <>
            <button className="btn btn-primary">Hello</button>
        </>
    );
}

export default Button;