import React,{useEffect, useState} from 'react'
import styled from "styled-components";
import {Link, useParams} from "react-router-dom";

function Searched() {

    const [searchRec, setSearched] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);

    let params = useParams();

    const getSearched =  async(name)=>{

      try{
        const data = 
        await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`);
       
        if(data.ok){
        const recipes = await data.json();

        setSearched(recipes.results);
        }
        else{
          const errorData = await data.json();
          setErrorMessage(errorData.message);
        }
      }catch(error){
        console.error("Error fetching data:", error);
      }
    };

    useEffect(()=>{
        getSearched(params.search);
    },[params.search]); //from the pages /;search


    if (errorMessage) {
      return (
      <ErrorDiv>
          <h2>Sorry Error Api Limits exceeded</h2>
      <div><errormess>
          {errorMessage}</errormess></div>
          </ErrorDiv>
      )
    }
  return (
    <Grid>
      {searchRec.map((item)=>{
        return(
            <Card key={item.id}>
                <Link to={"/recipe/"+item.id}>
                <img src={item.image} alt="" />
                <h4>{item.title}</h4>
                </Link>
            </Card>
        )
      })};
    </Grid>
  )
}


const ErrorDiv = styled.div`
background-color: #fff;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
max-width: 600px;
margin: 0 auto;
padding: 20px;
border-radius: 5px;
text-align: center;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

h2 {
  font-size: 24px;
  background: linear-gradient(to right, #9933ff, #e74c3c);
  -webkit-background-clip: text; 
  color: transparent; 
}

p {
  font-size: 16px;
}

`;

const errormess = styled.div`
padding: 20px;

`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr)); /* Corrected "minimax" to "minmax" */
  grid-gap: 3rem; 
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }

  a {
    text-decoration: none; 
  }

  h4 {
    text-align: center;
    padding: 1rem;
  }
`;


export default Searched
