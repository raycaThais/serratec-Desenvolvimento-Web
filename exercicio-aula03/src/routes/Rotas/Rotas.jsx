import { Route, Routes } from "react-router-dom";
import { BoasVindasPage } from "../../pages/BoasVindasPage/BoasVindasPage";
import { CadastroPage } from "../../pages/CadastroPage/CadastroPage";


export function Rotas(){

    return(
    <Routes>
        <Route
        path="/"
        element={<CadastroPage/>}
        />
        <Route
        path="/boasvindas"
        element={<BoasVindasPage/>}
        />
            
     

    </Routes>
)
}