import React from "react";
import { LanguageContext } from "./languageContext";

export class  DisplayLanguage extends React.Component {
    render(){
        return(
            <LanguageContext.Consumer>{ (language) => (  
               <div>
                  <h1> The current language is {language}</h1>
               </div>
            )}
            </LanguageContext.Consumer>
            )
    }
}