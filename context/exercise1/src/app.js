import React from "react";
import { DisplayLanguage } from "./displayLanguage";
import { LanguageContext } from "./languageContext";

export class MyApp extends React.Component {
    state = {
        language: 'en'
    }
    handleLanguageChange = (event) => {
        this.setState({
            language:event.target.value
        })
    }

    render() {
        return(
            <div>
                <select value={this.state.language} onChange={this.state.handleLanguageChange}>
                    <option value='en'>English</option>
                    <option value='tur'>Turkish</option>
                </select>
                <LanguageContext.Provider value={this.state.language}>
                    <DisplayLanguage/>
                </LanguageContext.Provider>
            </div>
        )
    }
}
