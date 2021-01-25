import React from "react";

let moment = require('moment-timezone');

class Clock extends React.Component {
    constructor(props){
       super(props) //init a state
       console.log("constructor", props)
       this.state = {
           time: '', //object
           date: '',
           tz: props.tz
       }
       console.log('lifecycle-constructor')
  };

    componentDidUpdate(){
        console.log('lifecycle-componentDidUpdate')  
  };

    componentDidMount(){
     //update state
     console.log('lifecycle-componentDidMount', this.props) 
     this.updateTime()
  };

    updateTime = () => {
        this.timer = setInterval(() => {
            this.setState({
                time: moment().tz(`${this.state.tz}`).format("h:mm:ss a"),
                date: moment().tz(`${this.state.tz}`).format("MMMM Do YYYY")
            })
        },1000)
    };

    componentWillUnmount(){
        console.log('lifecycle-componentWillUnmount')
        clearInterval(this.timer)
    };

    render(){
        const {city} = this.props 
        return (
            <div className="clock__card">
                <div className="clock--city">
                    <h1>{city}</h1>
                </div>
                <div className="clock__container">
                    <div className="clock__container--date">
                        <span>{this.state.date}</span>
                    </div>
                    <div className="clock__container--time">
                        <span>{this.state.time}</span>
                    </div>
                </div>
            </div> 
        )
    };
}

export default Clock;