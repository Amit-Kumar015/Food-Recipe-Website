import axios from "axios"
import { useEffect, useState } from "react"


export default function Meal({id}) {
    const [meal, setMeal] = useState({})
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
            <h1>meal</h1>
            <div>
                <h1>{meal.strMeal}</h1>
                <p>{meal.strInstructions}</p>
            </div>
        </div>
    )

}
