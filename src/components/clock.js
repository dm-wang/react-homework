import React from "react";

class Clock extends React.Component {
    constructor(props){
       super(props) //init a state
       this.state = {
           time: '' //object
       }
       console.log('lifecycle-constructor')
  };

    componentDidUpdate(){
        console.log('lifecycle-componentDidUpdate')  
  };

    componentDidMount(){
     //update state
     console.log('lifecycle-componentDidMount') 
     this.updateTime()
  };

    updateTime = () => {
        this.timer = setInterval(() => {
            this.setState({
                time: new Date().toLocaleTimeString()
            })
        },1000)
    };

    componentWillUnmount(){
        console.log('lifecycle-componentWillUnmount')
        clearInterval(this.timer)
    };

    render(){
       return <h1>current time: {this.state.time}</h1>//jsx
    };
}

export default Clock;