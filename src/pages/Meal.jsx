import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Meal() {
    const [meal, setMeal] = useState({})
    const { id } = useParams()
    console.log(id);
    

    useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then((res) => {
                console.log(res.data.meals[0]);

                setMeal(res.data.meals[0])
            })
    }, [id])

    return (
        <div>
            <Navbar/>
            <h1>meal</h1>
            <div>
                <h1>{meal.strMeal}</h1>
                <p>{meal.strInstructions}</p>
            </div>
        </div>
    )

}
