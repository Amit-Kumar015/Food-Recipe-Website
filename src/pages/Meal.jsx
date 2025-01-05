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
            <Navbar />

            <div className="w-screen h-screen flex justify-center bg-stone-900 overflow-y-scroll mt-6">
                <div className="w-11/12 flex flex-col justify-center mt-3 sm:flex-row" >
                    <div className="w-6/12 max-w-80 min-w-44 sm:mid mr-5 mt-6">
                        <img className="rounded-lg" src={meal.strMealThumb} />
                    </div>
                    <div className="w-full mt-6 ml-3 font-serif text-white">
                        <div className="text-xl font-bold ">Meal Name: </div>
                        <p className="ml-2 text-lg">{meal.strMeal}</p>
                        {/* <h1>{meal.strMeal}</h1> */}
                        <div className="text-xl font-bold">Category: </div>
                        <p className="ml-2 text-lg xs:text-base">{meal.strCategory}</p>
                        <div className="text-xl font-bold">Cuisine: </div>
                        <p className="ml-2 text-lg xs:text-base">{meal.strArea}</p>
                        <div className="text-xl font-bold">Recipe to follow: </div>
                        <p className="ml-2 text-lg xs:text-base">{meal.strInstructions}</p>
                        <div className="text-xl font-bold">Youtube tutorial: </div>
                        <div className=" ">
                            <a href={meal.strYoutube} className="ml-2 text-lg">{meal.strYoutube}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
