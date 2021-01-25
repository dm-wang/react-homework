import React from "react";

let moment = require('moment-timezone');

class Clock extends React.Component {
    constructor(props){
       super(props) //init a state
       console.log("constructor", props)
       this.state = {
           time: '', //object
           date: ''
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
                time: moment().tz(`${city}`).format("h:mm:ss a"),
                date: moment().tz(`${city}`).format("MMMM Do YYYY")
            })
        },1000)
    };

    componentWillUnmount(){
        console.log('lifecycle-componentWillUnmount')
        clearInterval(this.timer)
    };

    render(){
        const {city} = this.props 
        console.log("render", city);
        return (
            <main>
                <div className="clock__card--city">
                    <h1>{city}</h1>
                    <div className="clock__container">
                        <div className="clock__container--date">
                            <span>Date: {this.state.date}</span>
                        </div>
                        <div className="clock__container--time">
                            <span>Time: {this.state.time}</span>
                        </div>
                    </div>
                </div> 
            </main>
        )
    };
}

export default Clock;