import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// ReactDOM.render(
//   <h1>Hello React!!</h1>,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <form>
//     <input name="username" type="text" />
//     <input name="password" type="password" />
//     <button type="submit">Sign in</button>
//   </form>,
//   document.getElementById('root')
// );

// function callback (){
//   ReactDOM.render(
//     <h1>{new Date().toLocaleTimeString()}</h1>,
//     document.getElementById('root')
//   );
// }

// setInterval(callback, 1000);

// function  Welcome(props){
//   console.log(props);
//   return <h1> Hello Welcome {props.name} </h1>;
// }

// ReactDOM.render(
//   <Welcome name="terence" />,
//   document.getElementById('root')
// );

// function StudentCard(props){
//   console.log(typeof props.age)
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <div>Age: {props.age}</div>
//     </div>
//   )
// }

// ReactDOM.render(
//     // <StudentCard name="David" age="13" />,
//     <StudentCard name="Kevin" age={12} />,
//     document.getElementById('root')
// );

// const name = 1;
// const age = 12;
// const str = `${name}${age}`;
// console.log(str);

/* homework */
function Card(props){
    return (
        <div className="card">
            <h2>{props.title}</h2>
            <div className="container">
                <div className="card__img">
                    <img className="img" src={require(`./${props.img}`).default}/>
                </div>
                <h3>{props.subTitle}</h3>
                <p>{props.content}</p>
            </div>
        </div>
    )
}

ReactDOM.render(
    <Card title="Editor's Picks" img="product.png" subTitle="Gifts for Him" content="For Valentine's Day" />,
    document.getElementById('root')
)
/* homework */


{/* If you want to start measuring performance in your app, pass a function
to log results (for example: reportWebVitals(console.log))
or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); */}
