import React from "react";




export class ClockComponent extends React.Component {

    
    constructor(props) {
        super(props);
        this.state = {
            hours : new Date().getHours().toFixed(),
            minutes : new Date().getMinutes().toFixed(),
            seconds : new Date().getSeconds().toFixed()
        }
    }

    // boolean shouldComponentUpdate(nextProps, nextState){
    //     return true;
    // }

    componentDidMount = () => {

        setInterval(() => {
            if(this.state.seconds == 60)
                {
                    this.setState({minutes : new Date().getMinutes().toFixed()});
                }  
                if(this.state.minutes == 60) {
                    this.setState({hours : new Date().getHours().toFixed()});
                }
                this.setState({seconds : new Date().getSeconds()});
        }, 1000);

    }

    render() {
        //Return JSX CODE
        return (
            <div>
                <h1>currenttime is type {this.state.hours} : {this.state.minutes} : {this.state.seconds}</h1>
            </div>
            
        );
    }

    static getDerivedStateFromProps(nextProps, prevState){
        console.log("static getDerivedStateFromProps(nextProps, prevState)")
        return prevState;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("getSnapshotBeforeUpdate(prevProps, prevState)");
        return prevProps;
    }


    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate(prevProps, prevState)");
        return prevProps;
    }

    componentWillUnmount(){
        console.log("componentWillUnmount()");
    }


}

