import { BrowserRouter,Routes,Route } from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";
import SignUpPage from "./components/SignUpPage/SignUpPage";
import HabitsPage from "./components/HabitsPage/HabitsPage";
import TodayPage from "./components/TodayPage/TodayPage";
import HistoryPage from "./components/HistoryPage/HistoryPage";
import { useState } from "react";
import UserContext from "../src/contexts/UserContext";


export default function App(){
    const [token,setToken] = useState(null);
    const [userData,setUserData]=useState({
        image:"",
        name:"",
    });

   
    return (
        <UserContext.Provider value={{userData}}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage saveToken={(token)=> setToken(token)} saveData={(userData)=> setUserData(userData)} />} />
                <Route path="/cadastro" element={<SignUpPage />} />
                <Route path="/habitos" element={<HabitsPage />} />
                <Route path="/hoje" element={<TodayPage token={token}  />} />
                <Route path="/historico" element={<HistoryPage />} />
            </Routes>
            
        </BrowserRouter>
        </UserContext.Provider >
        
    );
}