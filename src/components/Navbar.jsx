import axios from "axios"
import logo from "../assets/logo.png"
import { useNavigate } from "react-router-dom"

export default function ({setURL}) {
    const navigate = useNavigate()

    const handleCategory = (e) => {
        navigate("/")
        setURL(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${e.target.innerText}`)
    }
    
    const handleArea = (e) => {
        navigate("/")
        setURL(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${e.target.innerText}`)
    }

    const handleRandom = () => {
        axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
        .then((res) => {
            navigate(`/recipe/${res.data.meals[0].idMeal}`)  
        })
        
    }

    return (
        <nav>
            <div className="flex justify-between items-center bg-black  h-20 w-screen">
                <div>
                    <img src={logo} className="w-16 h-16 ml-3 cursor-pointer" onClick={() => navigate("/")} />
                </div>
                <div className="flex">
                    <span className="dropdown mr-3 [@media(max-width:420px)]:mr-1 ">
                        <a className="btn dropdown-toggle bg-neutral-900 text-white [@media(max-width:580px)]:text-xs" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            Categories
                        </a>

                        <ul className="dropdown-menu bg-neutral-900 [@media(max-width:580px)]:text-xs" aria-labelledby="dropdownMenuLink">
                            <li><a className="dropdown-item text-white " href="#" onClick={handleCategory}>Beef</a></li>
                            <li><a className="dropdown-item text-white" href="#" onClick={handleCategory}>Breakfast</a></li>
                            <li><a className="dropdown-item text-white" href="#" onClick={handleCategory}>Chicken</a></li>
                            <li><a className="dropdown-item text-white" href="#" onClick={handleCategory}>Dessert</a></li>
                            <li><a className="dropdown-item text-white" href="#" onClick={handleCategory}>Pasta</a></li>
                            <li><a className="dropdown-item text-white" href="#" onClick={handleCategory}>Vegetarian</a></li>
                            <li><a className="dropdown-item text-white" href="#" onClick={handleCategory}>Starter</a></li>
                            <li><a className="dropdown-item text-white" href="#" onClick={handleCategory}>Side</a></li>
                        </ul>
                    </span>
                    <span className="dropdown mr-3 [@media(max-width:420px)]:mr-1">
                        <a className="btn dropdown-toggle bg-neutral-900 text-white [@media(max-width:580px)]:text-xs" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            Cuisine
                        </a>

                        <ul className="dropdown-menu bg-neutral-900 [@media(max-width:580px)]:text-xs" aria-labelledby="dropdownMenuLink">
                            <li><a className="dropdown-item text-white" href="#" onClick={handleArea}>American</a></li>
                            <li><a className="dropdown-item text-white" href="#" onClick={handleArea}>British</a></li>
                            <li><a className="dropdown-item text-white" href="#" onClick={handleArea}>Canadian</a></li>
                            <li><a className="dropdown-item text-white" href="#" onClick={handleArea}>Chinese</a></li>
                            <li><a className="dropdown-item text-white" href="#" onClick={handleArea}>French</a></li>
                            <li><a className="dropdown-item text-white" href="#" onClick={handleArea}>Indian</a></li>
                            <li><a className="dropdown-item text-white" href="#" onClick={handleArea}>Italian</a></li>
                            <li><a className="dropdown-item text-white" href="#" onClick={handleArea}>Mexican</a></li>
                        </ul>
                    </span>
                    <button name="feeling lucky" className="text-white bg-neutral-900 [@media(max-width:580px)]:text-xs mr-5 rounded-md p-2" onClick={handleRandom}>Random</button>
                </div>
            </div>
        </nav>
    )
}