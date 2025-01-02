import axios from 'axios';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Meal from './Meal.jsx';

export default function Landing() {
    const [meals, setMeals] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    // const [category, setCategory] = useState("")
    // const [area, setArea] = useState("")
    const [id, setId] = useState("")
    const [url, setURL] = useState("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")

    // console.log(searchTerm);
    

    
    useEffect(() => {
        axios.get(url)
        .then((res) => {
            console.log(res.data.meals)
            setMeals(res.data.meals)
        })
        .catch((err) => {
            console.error("error while fetching meals data: ", err);
        })
    }, [url])

    const handleMeal = (e) => {
        setId(e.target.id)        
    }

    const handleSearch = () => {
        setURL(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
        console.log(url);
        
    }


    return (
        <div className="w-screen h-screen bg-orange-300">
            <Navbar setURL={setURL}/>
            <div>
                <div>
                    <input
                        type='text'
                        placeholder='search...'
                        className=''
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button onClick={handleSearch}>Search</button>
                </div>
            </div>
            <div>
                {
                    meals.map((meal) => (
                        <div key={meal.idMeal} id={meal.idMeal} onClick={handleMeal}>
                            <span>{meal.strMeal}</span>
                        </div>
                    ))
                }
            </div>
            <Meal id={id}/>
          <h1>hello</h1>
        </div>
    )
}