import { useContext, useEffect, useState } from "react"
import Header from "./Components/Layout/Header.jsx"
import Home from './Pages/Home/Home.jsx'
//Theme Context
import { ThemeContext } from "./Context/ThemeContext.jsx";
function App() {

    //Setting THEME
    const [theme,setTheme] = useState('dark');
    useEffect(()=>{
        setTheme(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark')
    },[])

    //
    return (
        <>
        <ThemeContext.Provider value={{theme,setTheme}}>
            <div className={`${theme} ${theme == 'dark' ? 'bg-[#121212]' : null} min-h-[100vh]`}>
                <Header />
                <Home />
                <div className="">Hello workd</div>
            </div>

        </ThemeContext.Provider>
        </>
    )
}

export default App
