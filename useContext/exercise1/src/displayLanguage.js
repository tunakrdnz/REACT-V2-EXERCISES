import { useContext } from "react";
import { LanguageContext } from "./languageContext";

export function DisplayLanguage() {
    const language = useContext(LanguageContext);
    return <h3>Current Language: {language}</h3>
}