import React from 'react';

export class Welcome extends React.Component {
    render() {
        return <p>Welcome, {this.props.name}</p>;
    }
}

//nothing happen if there is no props for name, the page still works
//ye we can set a default value for name prop,it will show on the page
//if there is no name prop value
Welcome.defaultProps={
    name:"Tuna"
}