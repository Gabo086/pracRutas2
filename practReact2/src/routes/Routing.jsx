import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import FormPag from "../pages/FormPag"
import LoginPag from "../pages/LoginPag"
import AdminPag from "../pages/AdminPag"
import HomePag from "../pages/HomePag"
import FormComponent from "../components/FormComponent"
import AdminDshbrd from "../components/AdminDshbrd"
import Login from "../components/Login"
import HomeLogic from "../components/HomeLogic"

function Routing () {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<FormPag/>}/>
                <Route path="/loginPag" element={<LoginPag/>}/>
                <Route path="/homePag" element={<HomePag/>}/>
                <Route path="/adminPag" element={<AdminPag/>}/>
                <Route path="/registro" element={<FormComponent/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/homeLogic" element={<HomeLogic/>}/>
                <Route path="/adminDshbrd" element={<AdminDshbrd/>}/> 
            </Routes>
        </Router>
    )
}
export default Routing