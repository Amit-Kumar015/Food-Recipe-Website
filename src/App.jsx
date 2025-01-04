import { Route, Routes, BrowserRouter } from "react-router-dom";
import Landing from "./pages/Landing";
import Meal from "./pages/Meal";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/recipe/:id" element={<Meal/>}/>
      </Routes>
    </BrowserRouter>
  )
}
