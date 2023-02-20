import React from "react";

export class LoginPage extends React.Component{
    state={
        username:"",
        password:"",
        isDisabled:true
    }

    handleInputChange =(event)=>{
        const value= event.target.value;
        const name=event.target.name;
        const disable= (event.target.value) ? false: true;
        this.setState({

           [name]:value,
           isDisabled:disable
        })
      
        
    }
     handleLogin=()=>{
        const user=this.state;
        //console.log(user)
       return user;
    }
        
    render(){
        const user=this.handleLogin()
        const myStyle={
            backgroundColor:user.password.length < 8 ? "red": "green"
        }
        return(
            
                <div>
                 
                <input
                name="username" 
                value={this.state.username}
                onChange={this.handleInputChange }
                />

                <input
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.handleInputChange }
                />
    
                
                <button 
                style={myStyle}
                name="login"
                disabled={this.state.isDisabled}
                onClick={this.handleLogin}
                >Login</button>
            </div>
        )
    }
}

