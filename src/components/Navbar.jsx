import logo from "../assets/logo.png"
import { useNavigate } from "react-router-dom"

export default function ({setURL}) {
    const navigate = useNavigate()

    const handleCategory = (e) => {
        navigate("/")
        setURL(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${e.target.innerText}`)
        // setCategory(e.target.innerText)
        // console.log(e.target.innerText);
    }
    
    const handleArea = (e) => {
        navigate("/")
        setURL(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${e.target.innerText}`)
        // setArea(e.target.innerText)
        // console.log(e.target.innerText);
    }

    return (
        <nav>
            <div className="flex justify-between items-center bg-black  h-20 w-screen">
                <div>
                    <img src={logo} className="w-14 h-14 ml-3 " onClick={() => navigate("/")} />
                </div>
                <div className="flex">
                    <span className="dropdown mr-3 [@media(max-width:420px)]:mr-1 ">
                        <a className="btn dropdown-toggle bg-gray-700 text-white [@media(max-width:580px)]:text-xs" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            Categories
                        </a>

                        <ul className="dropdown-menu bg-gray-700 [@media(max-width:580px)]:text-xs" aria-labelledby="dropdownMenuLink">
                            <li><a className="dropdown-item text-white" href="#" onClick={handleCategory}>Beef</a></li>
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
                        <a className="btn dropdown-toggle bg-gray-700 text-white [@media(max-width:580px)]:text-xs" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            Cuisine
                        </a>

                        <ul className="dropdown-menu bg-gray-700 [@media(max-width:580px)]:text-xs" aria-labelledby="dropdownMenuLink">
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
                    {/* <div className="w-20 h-9 mr-5 bg-gray-700 flex justify-center items-center rounded-md">
                    </div> */}
                    <button name="feeling lucky" className="text-white bg-gray-700 [@media(max-width:580px)]:text-xs mr-5 rounded-md p-2">Random</button>
                </div>
            </div>
        </nav>
    )
}