import React from 'react'
import Homes from './Homes'
import Cuisine from "./Cuisine";
import {Route, Routes, useLocation} from 'react-router-dom';
import styled from 'styled-components';
import Searched from './Searched';
import Recipe  from './Recipe';
import { AnimatePresence, motion } from 'framer-motion';

function Pages() {
  const Location = useLocation();
  return (
   
    <AnimatePresence>
    <Routes location={Location} key={Location.pathname}>
      <Route path ="/" element = {<Homes />}/>
      <Route path ="/cuisine/:type" element ={<Cuisine/>}/>
      <Route path="/searched/:search" element={<Searched />}/>
      <Route path="/recipe/:name" element={<Recipe/>}/>
    </Routes>
    </AnimatePresence>
   
  )
}



export default Pages
