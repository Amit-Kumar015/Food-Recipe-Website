import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Landing() {
    const [meal, setMeal] = useState([])
    
    useEffect(() => {
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
        .then((res) => {
            console.log(res.data.meals)
            setMeal(res.data.meals)
        })
        .catch((err) => {
            console.error("error while fetching meals data: ", err);
        })
    }, [])


    return (
        <div className="w-screen h-screen bg-orange-300">
          <h1>hello</h1>
        </div>
    )
}