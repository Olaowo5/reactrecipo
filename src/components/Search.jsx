
import React,{useEffect, useState} from 'react'
import styled from "styled-components";
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Search() {
    const [input, setInput] = useState("");
    const navigate = useNavigate();
    const [searchByIngredient, setIngredient] = useState(true); // Initial search mode


   
    const submitHandler = (e) =>{
        e.preventDefault();

       
        if(searchByIngredient)
        {
            //let filter the ingredients
            
            // Split by commas or spaces
            const formattedInput = input.split(/\s*,\s*|\s+/).filter((term) => term.trim() !== "")  // Remove empty terms
            .map((term) => `${term.trim()}+`)  // Add '+' after each term
            .join("");
          

            //search by ingredients
            navigate('/searching/'+formattedInput);
        }
        else{
        navigate('/searched/'+input);
        //search by food name
        }
    };

    const toggleSearchMode = () => {
        setIngredient(!searchByIngredient);
        setInput(""); // Clear the input field when toggling search mode
      };
  return (
    <div>
    <FormStyle onSubmit={submitHandler}>
        <div>
        
            <FaSearch></FaSearch>
            <input type="text" 
            placeholder={
                searchByIngredient
                ? 'Find Recipes by Ingredients (use space btwn)'
                : 'Search for Food by Name'
            }
            onChange={(e)=> setInput(e.target.value)}
            value ={input}/>
        </div>
    </FormStyle>
    <ToggleButton onClick={toggleSearchMode}>
    {searchByIngredient ? 'Switch to Food Name' : 'Switch to Ingredient'}
    </ToggleButton>
 </div>
  )
}

const FormStyle = styled.form`
    margin: 0rem 20rem;
    position: relative;
    div{
        width:100%;
        position: relative;
    }
    width: 100%;
    input{
        border:none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 0.9rem;
        color: white;
        padding: 1rem 3rem;
        border:none;
        border-radius: 1rem;
        outline: none;
        width: 50%;

    }
    input::placeholder {
        color: #f0f8ff; 
        font-style: italic; 
        font-weight: 500;
        
      }
    svg{
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
    }
    `;

 const ToggleButton = styled.button`
    background-color: #555555;
    color: white;
    font-weight: 500;
    border: none;
    border-radius: 5px;
    padding: 0.5rem 0.5rem;
    cursor: pointer;
    margin: 1rem 25rem 0.4rem;
    position: relative;
    transition: background-color 0.3s ease; // Add a transition for the background color

    &:hover {
        background: linear-gradient(to right,
            #9933ff, #e94047);
    }
    
  `;

export default Search
