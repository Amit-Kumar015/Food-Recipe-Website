import axios from 'axios';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Card } from "../components/Aceternity/Cards/Card.tsx"
// import Meal from './Meal.jsx';
import { useNavigate } from 'react-router-dom';

export default function Landing() {
    const [meals, setMeals] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    // const [category, setCategory] = useState("")
    // const [area, setArea] = useState("")
    // const [id, setId] = useState("")
    const navigate = useNavigate()
    const [url, setURL] = useState("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")

    // console.log(searchTerm);



    useEffect(() => {
        axios.get(url)
            .then((res) => {
                console.log(res.data.meals)
                // console.log(res.data.meals[0].idMeal);

                setMeals(res.data.meals)
            })
            .catch((err) => {
                console.error("error while fetching meals data: ", err);
            })
    }, [url])

    const handleMeal = (e) => {
        navigate(`/recipe/${e.currentTarget.id}`)
        // setId(e.target.id)
        // console.log(e.currentTarget.id);

    }

    const handleSearch = () => {
        setURL(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
        console.log(url);

    }


    return (
        <div className="w-screen h-screen bg-orange-300 overflow-y-scroll">
            <Navbar setURL={setURL} />
            <div className='bg-pink-300 w-screen h-2/5 flex justify-center items-center'>
                <div className='flex'>
                    <div className=''>

                        <input
                            type='text'
                            placeholder='search...'
                            className='pl-1 h-7'
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className='bg-slate-400 w-17 pr-3 pl-3'>
                        <button onClick={handleSearch}>Search</button>
                    </div>
                </div>
            </div>
            <div>
                {
                    meals.map((meal) => (

                        <div key={meal.idMeal} id={meal.idMeal} onClick={handleMeal}>
                            {/* <span>{meal.strMeal}</span> */}
                            <Card name={meal.strMeal} img={meal.strMealThumb}/>
                        </div>
                    ))

                }
            </div>
        </div>
    )
}