import React,{useEffect, useState} from 'react'
import {Link, useParams} from "react-router-dom";
import styled from "styled-components";


function Recipe() {

    const [theRecipe, setRecipe] = useState([]);
    const [activetab, setActiveTab] = useState("instructions");

    let params = useParams();
    const getrecipe =  async()=>{
        const data = 
        await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
       
        const TheData = await data.json();

        setRecipe(TheData);
    };

    useEffect(()=>{
        getrecipe(params.name);
    },[params.name]); //from the pages /;search
  return (
    <DetailWrapper>
        <div>
        <h2>  {theRecipe.title}</h2>
            <img src={theRecipe.image} alt="" />
        </div>
        <Info>
            <Button onClick={()=> setActiveTab("instructions")}
            className={activetab === 'instructions'?'active':''}>
                Instructions</Button>
            <Button onClick={()=> setActiveTab("ingredients")}
            className={activetab === 'ingredients'?'active':''}>
                Ingredients</Button>
        {activetab === "instructions" && (
             <div>
             <h3 dangerouslySetInnerHTML=
             {{__html:theRecipe.summary}}>
              </h3>
              <h3 dangerouslySetInnerHTML=
             {{__html:theRecipe.instructions}}>
              </h3>
          </div>
        )}
        {activetab === "ingredients" && (
        
        <ul>
        {theRecipe.extendedIngredients.map((ingredient)=>(
            <li key={ingredient.id}>{ingredient.original}</li>
        ))}
    </ul>
        )}
               
              
        </Info>
    
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
    margin-top: 10rem;
    margin-bottom: 5rem;
    display: flex;
    .active{
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
    }
    h2{
        margin-bottom: 2rem;
    }
    h3{
        font-size: 0.9rem;
    }
    li{
        font-size: 0.9rem;
        line-height: 2.5rem;
    }
    ul{
        margin-top: 2rem;
    }
`;

const Button = styled.button `
    padding: 1rem 2rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    margin-right: 2rem;
    font-weight: 600;
`;

const Info = styled.div`
    margin-left: 10rem;
    `;

export default Recipe
