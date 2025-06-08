import { Routes, Route} from "react-router-dom";
import { HomePage } from "../pages/homepage/home";
import { About } from "../pages/about/about";

export function Rotas(){
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
    )
}