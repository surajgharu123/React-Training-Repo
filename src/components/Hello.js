import React from "react";
import PropsType from 'prop-types';

export class HelloComponent extends React.Component {

    state = {
        count : 5,
        fname : this.props.firstName
    }
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         count : 5,
    //         fname : this.props.firstName
    //     }
    // }
    render() {
        //Return JSX CODE
        return (
            <div>
                <h1>Hello World, Welcome in React Specially {this.state.fname} {this.props.lastName}</h1>
                <br></br>
                <p>Count : {this.state.count}</p>
                <input type="button" value="Submit"></input>
            </div>
            
        );
    }

}


HelloComponent.defaultProps = {firstName:'Suraj'}
HelloComponent.propTypes = {
    //firstName : PropsType.string,
    firstName : function(props,propName, componentName){
        if(props[propName].length < 3)
        {
            return Error(`In ${componentName} ,  Less Length of String`);
        }
        console.log("The type is ", typeof(props[propName]));
        if(typeof(props[propName]) != 'string'){
            return Error(`In ${componentName} ,  Props is not String`);
        }
    },
    lastName : PropsType.string
} 
//module.exports = HelloComponent;