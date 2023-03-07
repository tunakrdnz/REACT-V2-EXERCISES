import { useState } from "react";
import { DisplayLanguage } from "./displayLanguage";
import { LanguageContext } from "./languageContext";

export function App() {
    const[language, setLangauge] = useState("English");

    const handleLanguageChange = (event) => {
        setLangauge(event.target.value)
    }

    return(
        <div>
            <select value={language} onChange={handleLanguageChange}>
                <option value='English'>English</option>
                <option value='Turkish'>Turkish</option>
            </select>
            <LanguageContext.Provider value={language}>
                <DisplayLanguage/>
            </LanguageContext.Provider> 
        </div>
    )
}