import logo from "../assets/logo.png"

export default function ({setURL}) {
    const handleCategory = (e) => {
        setURL(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${e.target.innerText}`)
        // setCategory(e.target.innerText)
        // console.log(e.target.innerText);
    }
    
    const handleArea = (e) => {
        setURL(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${e.target.innerText}`)
        // setArea(e.target.innerText)
        // console.log(e.target.innerText);
    }

    return (
        <nav>
            <div className="flex justify-between items-center bg-green-300 h-20 w-screen">
                <div>
                    <img src={logo} className="w-10 h-10"/>
                </div>
                <div className="flex">
                    <span className="dropdown mr-3">
                        <a className="btn  dropdown-toggle bg-blue-300" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            Categories
                        </a>

                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <li><a className="dropdown-item" href="#" onClick={handleCategory}>Beef</a></li>
                            <li><a className="dropdown-item" href="#" onClick={handleCategory}>Breakfast</a></li>
                            <li><a className="dropdown-item" href="#" onClick={handleCategory}>Chicken</a></li>
                        </ul>
                    </span>
                    <span className="dropdown mr-3">
                        <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            Area
                        </a>

                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <li><a className="dropdown-item" href="#" onClick={handleArea}>American</a></li>
                            <li><a className="dropdown-item" href="#" onClick={handleArea}>British</a></li>
                            <li><a className="dropdown-item" href="#" onClick={handleArea}>Canadian</a></li>
                        </ul>
                    </span>
                    <div className="w-20 h-9 mr-5 bg-slate-600 flex justify-center items-center rounded-md">
                    <span name="feeling lucky" className="bg-blue-300 rou">Random</span>
                    </div>
                </div>
            </div>
        </nav>
    )
}