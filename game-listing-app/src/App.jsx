import { useContext, useState } from "react"
import Header from "./Components/Layout/Header.jsx"
import Home from './Pages/Home/Home.jsx'
//Theme Context
import { ThemeContext } from "./Context/ThemeContext.jsx";
function App() {

    //Setting THEME
    const [theme,setTheme] = useState('light');

    //
    return (
        <>
        <ThemeContext.Provider value={{theme,setTheme}}>
            <div className={`${theme} ${theme == 'dark' ? 'bg-[#121212]' : null} h-[100vh]`}>
                <Header />
                <Home />
                <div className="">Hello workd</div>
            </div>

        </ThemeContext.Provider>
        </>
    )
}

export default App
