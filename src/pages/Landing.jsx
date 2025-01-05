import axios from 'axios';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Card } from "../components/Aceternity/Cards/Card.tsx"
import { useNavigate } from 'react-router-dom';

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
        console.log(url);

    }


    return (
        <div className="w-screen bg-slate-950 h-screen overflow-y-scroll">
            <Navbar setURL={setURL} />
            <div className='bg-slate-950 w-screen h-52 mb-4 flex justify-center items-center'>
                <div className='flex'>
                    <div className='sm:w-60'>

                        <input
                            type='text'
                            placeholder='Search Recipe...'
                            className='pl-2 h-8 w-full rounded-tl-md rounded-bl-md'
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className='bg-slate-700 w-17 pr-3 pl-3 rounded-tr-md rounded-br-md cursor-pointer'>
                        <button onClick={handleSearch} className='text-white'>Search</button>
                    </div>
                </div>
            </div>
            <div className='w-screen h-full flex justify-center border-t border-white'>
                <div className='w-11/12 h-full flex flex-wrap justify-evenly gap-5 mt-10'>
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