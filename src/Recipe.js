import React from "react";
import style from "./recipe.module.css";

function Recipe({label,image,ingredients,calories}){
    return(
        <div className={style.recipe}>
            <h1>{label}</h1>
            <img className={style.image} alt='food' src={image}></img>
            <h2>Calories: {calories}</h2>
            <h3>Ingredients: </h3>
            <ol>{ingredients.map((ingrendient)=>{
                return <li>{ingrendient}</li>
            })}</ol>
        </div>
    )
}


export default Recipe