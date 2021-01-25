import React from "react";
import product from "../product.png";

function Card(props){
        return (
            <div className="card">
                <h2>{props.title}</h2>
                <div className="container">
                    <div className="card__img">
                        <img className="img" src={product}/>
                    </div>
                    <h3>{props.subTitle}</h3>
                    <p>{props.content}</p>
                </div>
            </div>
        )
    }

export default Card;