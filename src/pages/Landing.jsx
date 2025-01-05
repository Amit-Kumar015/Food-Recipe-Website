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
        <div className="w-screen bg-slate-950 overflow-y-scroll">
            <Navbar setURL={setURL} />
            <div className='bg-slate-950 w-screen h-52 mb-4 flex justify-center items-center'>
                <div className='flex'>
                    <div className=''>

                        <input
                            type='text'
                            placeholder='Search Recipe...'
                            className='pl-2 h-7 rounded-tl-md rounded-bl-md'
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className='bg-slate-700 w-17 pr-3 pl-3 rounded-tr-md rounded-br-md cursor-pointer'>
                        <button onClick={handleSearch} className='text-white'>Search</button>
                    </div>
                </div>
            </div>
            <div className='w-screen flex justify-center border-t border-white'>
                <div className='w-11/12 row justify-content-between mt-4'>
                    {
                        meals.map((meal) => (

                            <div key={meal.idMeal} id={meal.idMeal} className='col-md-3 m-3' onClick={handleMeal}>
                                {/* <span>{meal.strMeal}</span> */}
                                <Card name={meal.strMeal} img={meal.strMealThumb} />
                            </div>
                        ))

                    }
                </div>
            </div>
        </div>
    )
}