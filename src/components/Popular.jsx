import React, { useEffect } from "react";

function Popular()
{
    useEffect(()=>{
        getPopular();
    },[]);

    const getPopular = async () => {
        //console.log(process.env.REACT_APP_API_KEY);
       // console.log(process.env.REACT_APP_ENV);
        //// https://api.spoonacular.com/recipes/random?apiKey=5fcf68e0307d4e7791a3fae5f872c765&number=9
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
        const data = await api.json();
        console.log(data);
    }

    return(
        <div>Popular Pick</div>
    )
}
export default Popular;