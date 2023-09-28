import {createContext, useEffect, useState} from "react";

const themes={
    dark:{
        backgroundColor:"#000000",
        color: "#ffffff"
    },
    light:{
        backgroundColor :"#ffffff",
    color:"#000000"
    }
}
const initialState={
    theme : themes.light,
    handelToggle:()=>{},
    isDarkTheme:false
}
const ThemeContext = createContext(initialState)

const ThemeProvider=({childern})=>{
    const [isDarkTheme,setDarkTheme] = useState(false)
    useEffect(()=>{
        const extractDarkTheme = JSON.stringify(localStorage.getItem('isDarkTheme'))
        setDarkTheme(extractDarkTheme)
    },[])
    const handelToggle=()=>{
        const updateIsDarkTheme = !isDarkTheme
        localStorage.setItem('isDarkTheme',JSON.stringify(updateIsDarkTheme))
        setDarkTheme(updateIsDarkTheme)
    }
    const theme =  isDarkTheme?themes.dark:themes.light
    return(
        <>
        <ThemeContext.Provider value={{theme,handelToggle,isDarkTheme }}>
            {childern}
        </ThemeContext.Provider>
        </>
    )
}
export {ThemeContext,ThemeProvider}