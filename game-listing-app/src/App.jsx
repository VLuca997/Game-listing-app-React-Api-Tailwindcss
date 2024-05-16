import { useState } from "react"
import Header from "./Components/Layout/Header.jsx"

function App() {

    //LIGHTMODE
    const [theme,setTheme] = useState('light');
    return (
        <>
            <div className={`${theme} ${theme == 'dark' ? 'bg-[#121212]' : null}`}>
                <Header />
                <div className="">Hello workd</div>
            </div>
        </>
    )
}

export default App
