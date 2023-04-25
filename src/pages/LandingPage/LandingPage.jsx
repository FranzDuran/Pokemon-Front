import React from "react";
import { NavLink } from "react-router-dom";
import "./landingPage.css"
import image from "./assets/pokemon.jpg"
import poke from "./assets/pokebola.gif"

const LandingPage = () => {
    return (
        <>
        <div className="landingPage-container">
            <div className="landingPage-container-info">
                <p >Welcome to the</p>
                <h3 >POKEMON APP</h3>
                <NavLink to={"/home"} className="landingPage-button">Lest´s go!</NavLink>
            </div>
            <img src={image} alt="Pokemon" className="landingPage-container-img" />
        </div>
        <div className="landingPage-container-responsive">
        <p className="landingPage-text">Welcome to the</p>
        <h3 className="landingPage-tittle">POKEMON APP</h3>
        <NavLink to={"/home"} className="landingPage-button">Lest´s go!</NavLink>
        <img src={poke} alt="Pokemon" className="landingPage-img" />
    </div></>
        
    )
}
export default LandingPage;