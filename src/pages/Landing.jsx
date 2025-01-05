import axios from 'axios';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Card } from "../components/Aceternity/Cards/Card.tsx"
import { useNavigate } from 'react-router-dom';
import { BackgroundBeamsDemo } from '../components/Aceternity/BackgroundBeam/BackgroundBeamComponent.tsx';


export default function Landing() {
    const [meals, setMeals] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const navigate = useNavigate()
    const [url, setURL] = useState("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")


    useEffect(() => {
        axios.get(url)
            .then((res) => {
                setMeals(res.data.meals)
            })
            .catch((err) => {
                console.error("error while fetching meals data: ", err);
            })
    }, [url])

    const handleMeal = (e) => {
        navigate(`/recipe/${e.currentTarget.id}`)
    }

    const handleSearch = () => {
        setURL(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
    }


    return (
        <div className="w-screen bg-slate-950 h-screen overflow-y-scroll">
            <Navbar setURL={setURL} />
            <BackgroundBeamsDemo searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearch={handleSearch}/>
            <div className='w-screen h-full flex justify-center border-t border-white bg-neutral-950'>
                <div className='w-11/12 h-full flex flex-wrap justify-evenly gap-5 mt-10 '>
                    {
                        meals.map((meal) => (

                            <div 
                             key={meal.idMeal} 
                             id={meal.idMeal}
                             className='w-full sm:w-[calc(33.333%-1rem)] md:w-[calc(25%-1rem)] flex flex-col mt-2'
                             onClick={handleMeal}
                             >
                                <Card name={meal.strMeal} img={meal.strMealThumb} />
                            </div>
                        ))

                    }
                </div>
            </div> 
        </div>
    )
}