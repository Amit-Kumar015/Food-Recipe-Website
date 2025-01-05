import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Meal() {
    const [meal, setMeal] = useState({})
    const { id } = useParams()

    useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then((res) => {
                setMeal(res.data.meals[0])
            })
    }, [id])

    return (
        <div className="bg-stone-900 h-screen">
            <Navbar />

            <div className="w-screen flex justify-center bg-stone-900 overflow-y-scroll mt-10">
                <div className="w-11/12 flex flex-col justify-center mt-3 md:flex-row" >
                    <div className="w-full md:w-6/12 max-w-80 min-w-44 md:mr-5 mb-4 md:mb-0">
                        <img className="rounded-lg" src={meal.strMealThumb} alt="Meal Thumbnail" />
                    </div>
                    <div className="w-full mt-6 md:mt-0 ml-3 font-serif text-white">
                        <div className="text-xl font-bold mt-2">Meal Name: </div>
                        <p className="ml-2 text-lg">{meal.strMeal}</p>
                        {/* <h1>{meal.strMeal}</h1> */}
                        <div className="text-xl font-bold mt-2">Category: </div>
                        <p className="ml-2 text-lg xs:text-base">{meal.strCategory}</p>
                        <div className="text-xl font-bold mt-2">Cuisine: </div>
                        <p className="ml-2 text-lg xs:text-base">{meal.strArea}</p>
                        <div className="text-xl font-bold mt-2">Recipe to follow: </div>
                        <p className="ml-2 text-lg xs:text-base">{meal.strInstructions}</p>
                        <div className="text-xl font-bold mt-2">Youtube tutorial: </div>
                        <div className=" ">
                            <a href={meal.strYoutube} className="ml-2 text-lg">{meal.strYoutube}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
