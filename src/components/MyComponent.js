import React from "react";

class MyComponent extends React.Component{
state ={
    name: 'Dat',
    address: 'Dat Dev',
    age: 22
};

    render(){
        return(
            <div>
                My name is {this.state.name}
                <button>Click me</button>
            </div>
        );
    

    }
}
export default MyComponent;