import { React, ReactDOM } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import './card.scss'

export default function Card(props) {
    return(
        <div className="home-card">
            <div className="card-body">
                <img src={props.img} class="card-image" />
                <h2 className="card-title">{props.title}</h2>
                <p className="card-desc">{props.description}</p>
            </div>
                <button className="card-btn">View Recipe</button>
        </div>
    )
}