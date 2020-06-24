import React, { useState, useEffect } from 'react';
import './App.css';
import Recipe from "./Recipe"

function App() {
  
  let APP_ID=`b28aa31f`
  let APP_KEY=`833122d4360f36f8c28f156d22572849`
  const [recipes,setRecipes]=useState([])
  const [query,setQuery]=useState('')
  const [food,setFood]=useState('carrot')

  useEffect(()=>{
    getRecipes()
  },[food])

  async function getRecipes(){
    let data=await fetch(`https://api.edamam.com/search?q=${food}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    let info = await data.json()
    console.log("API results",info.hits)
    setRecipes(info.hits)
    setQuery('')
  }



  
  return (
    <div className="App">
      <form className='searchForm'>
        <input className='searchBar' value={query} type='text' onChange={(e)=> setQuery(e.target.value)}></input>
        <button className='searchButton' onClick={(e)=>{e.preventDefault();setFood(query)}}>Search</button>
      </form>

      <div class='cards'>
      {recipes.map((recipe)=>{
        return <Recipe key={recipe.recipe.uri} label={recipe.recipe.label} image={recipe.recipe.image} ingredients={recipe.recipe.ingredientLines} calories={recipe.recipe.calories}/>
      })}
      </div>

    </div>
  );
}

export default App;
