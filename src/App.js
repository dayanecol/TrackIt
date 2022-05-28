import { BrowserRouter,Routes,Route } from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";
import SignUpPage from "./components/SignUpPage/SignUpPage";
import HabitsPage from "./components/HabitsPage/HabitsPage";
import TodayPage from "./components/TodayPage/TodayPage";
import HistoryPage from "./components/HistoryPage/HistoryPage";
import { useState } from "react";


export default function App(){
    const [token,setToken] = useState(null);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage saveToken={(token)=> setToken(token)} />} />
                <Route path="/cadastro" element={<SignUpPage />} />
                <Route path="/habitos" element={<HabitsPage />} />
                <Route path="/hoje" element={<TodayPage token={token}/>} />
                <Route path="/historico" element={<HistoryPage />} />
            </Routes>
            
        </BrowserRouter>
    );
}