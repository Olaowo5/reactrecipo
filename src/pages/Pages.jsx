import React from 'react'
import Homes from './Homes'
import Cuisine from "./Cuisine";
import {Route, Routes} from 'react-router-dom';
import styled from 'styled-components';

function Pages() {
  return (
   
    <Routes>
      <Route path ="/" element = {<Homes />}/>
      <Route path ="/cuisine/:type" element ={<Cuisine/>}/>
    </Routes>
   
  )
}



export default Pages
