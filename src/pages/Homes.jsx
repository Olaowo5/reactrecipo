import Veggies from "../components/Veggies";
import Popular from "../components/Popular";
import React from 'react'
import {motion} from "framer-motion";

function Homes() {
  return (
    <motion.div
    animate ={{opacity:1}}
    initial = {{opacity:0}}
    exit={{opacity:0}}
    transition={{duration:0.5}}>
      <Veggies />
      <Popular />
    </motion.div>
  );
}

export default Homes;
