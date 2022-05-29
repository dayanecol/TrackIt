import { BrowserRouter,Routes,Route } from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";
import SignUpPage from "./components/SignUpPage/SignUpPage";
import HabitsPage from "./components/HabitsPage/HabitsPage";
import TodayPage from "./components/TodayPage/TodayPage";
import HistoryPage from "./components/HistoryPage/HistoryPage";
import { useState } from "react";
import UserContext from "../src/contexts/UserContext";
import PercentageProgressbarContext from "../src/contexts/PercentageProgressBarContext";
import isUserLoggedContext from "../src/contexts/isUserLoggedContext";


export default function App(){
    // const [token,setToken] = useState(null);
    const [userData,setUserData] = useState({
        image:"",
        name:"",
        token:"",
    });

    const [percentage,setPercentage] = useState(0);
    const [isUserLogged,setIsUserLogged] = useState(false);
   
    return (
        <UserContext.Provider value={{userData,setUserData}}>
        <isUserLoggedContext.Provider value= {{isUserLogged,setIsUserLogged}}>
        <PercentageProgressbarContext.Provider value={{percentage,setPercentage}}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage  />} />
                <Route path="/cadastro" element={<SignUpPage />} />
                <Route path="/habitos" element={<HabitsPage />}  />
                <Route path="/hoje" element={<TodayPage  />} />
                <Route path="/historico" element={<HistoryPage />} />
            </Routes> 
        </BrowserRouter>
        </PercentageProgressbarContext.Provider>
        </isUserLoggedContext.Provider>
        </UserContext.Provider >
        
    );
}
