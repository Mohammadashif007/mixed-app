import React from "react";
import { useLoaderData } from "react-router-dom";

const Show_foods = ({ meal }) => {
    
    const { strMealThumb, strMeal, idMeal } = meal;

    return (
        <div className="border p-3 rounded">
            <img src={strMealThumb} alt="" />
            <p className="text-2xl mt-5">{strMeal}</p>
            <button className="text-xl rounded border border-cyan-800 px-5 py-2 my-5 hover:bg-cyan-800 hover:text-white">Details</button>
        </div>
    );
};

export default Show_foods;
