import React, { useState } from "react";
// import ImSearch from 'react-icons/im';
import { FiSearch } from "react-icons/fi";
import Show_foods from "../Show_foods/Show_foods";
import { useLoaderData } from "react-router-dom";

const Foods = () => {

    const foods = useLoaderData();
    const [inputValue, setValue] = useState('')
    // console.log(inputValue)

    const inputField = (name) => {
        const inputField = document.getElementById('inputField');
        const inputValue = inputField.value;
        setValue(inputValue);

        inputField.innerText = '';
    }

    return (
        <div>
            <h1>Find Your Favorite deash.</h1>
            <div className="flex mt-10">
                <input
                    id="inputField"
                    type="text"
                    placeholder="Search"
                    className="w-full border py-3 px-2"
                />
                <button className="border px-6" onClick={()=>inputField(inputValue)}>
                    <FiSearch className="text-2xl" />
                </button>
            </div>
            <div className="grid grid-cols-3 gap-5 mt-10">
                {foods.meals.map((meal) => (
                    <Show_foods key={meal.idMeals} meal={meal}></Show_foods>
                ))}
            </div>
        </div>
    );
};

export default Foods;
