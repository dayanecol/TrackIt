import { useContext, useState } from "react"; 
import UserContext from "../../contexts/UserContext";
import AddHabitContext from "../../contexts/AddHabitContext";
import isUserLoggedContext from "../../contexts/isUserLoggedContext";
import styled from "styled-components";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Habit from "./Habit";
import AddHabit from "./AddHabit";

export default function Habits(){
    const [loading,setLoading] = useState(false);
    const {userData} =useContext (UserContext);
    const {setIsUserLogged} = useContext(isUserLoggedContext);
    const navigate = useNavigate();
    const [habits,setHabits] = useState([]);
    const [isAddHabitClicked,setIsAddHabitClicked] = useState(false);
    const [addName,setAddName] = useState ('');
    const [addDays,setAddDays] = useState([]);

    const config ={
        headers: {
            Authorization: `Bearer ${userData.token}`
        }
    }
    console.log(config);
    useEffect (()=>{
        
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
        const promise= axios.get(URL,config);

        promise
            .then(response=>{
                const { data } = response;
                console.log(data);
                setHabits(data);
                setIsUserLogged(true);
            })
            .catch(err=>{
                console.log(err.response.message);
                setIsUserLogged(false);
                navigate("../")
            });
    },[]);

    function removeHabit(id){
        const userIsSure = window.confirm("Tem certeza que deseja apagar o hábito?");
        if (!userIsSure){
            return (
                <>
                </>
            );
        }
        
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`;
        axios.delete(URL,config);
        const newListHabits =habits.filter((habit)=>{
            if(habit.id===id){
                return false;
            }
            else{
                return true;
            }
        });
        
        setHabits(newListHabits);
        
    }


    function HabitsList(){
        if (habits.length>0){
            return habits.map((habit,index) =>{
                const {id,name,days} = habit;
                return (
                     <Habit 
                     key={index+1}
                     id={id}
                     name={name}
                     days={days}
                     removeHabit={(idHabit)=>{
                         removeHabit(idHabit);
                     }}
                      />
                );
            }); 
        }
        else{
            return(
                <StyleNoHabits>
                    <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                </StyleNoHabits>  
            );
        }
    }

    function toggleFormAddHabit(isOpen){
        setIsAddHabitClicked(isOpen);
    }

    function saveHabit(habitData){
        setLoading(false);
        const URL="https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
        const promise = axios.post(URL,habitData,config);

        promise
            .then(response=>{
                const {data} = response;
                habitData.id=data.id;
                toggleFormAddHabit(false);
                setHabits([...habits,habitData]);
            })
            .catch(err=>{
                setLoading(true);
                alert("Algo inesperado aconteceu, insira os dados novamente!");
            });

    }
    
    function openHabitForm(){
        if (isAddHabitClicked){
            return (
                <AddHabitContext.Provider value={{addName, setAddName, addDays, setAddDays}}>
                    <AddHabit toggleFormAddHabit= {(isOpen)=>toggleFormAddHabit(isOpen)} 
                        saveHabit={(habitdata)=>{
                            saveHabit(habitdata);
                        }}
                        loading={loading}
                        setLoading={setLoading}
                    />

                </AddHabitContext.Provider>
            );
        }else{
            return (
                <>
                </>
            );
        }
    }

    return (
        <Container>
            <HabitsTitle>
                <h2>Meus hábitos</h2>
                <button onClick={()=>toggleFormAddHabit(true)}>+</button>
            </HabitsTitle>
            <HabitsItems>
                {openHabitForm()}
                {HabitsList()}
            </HabitsItems>
            
        </Container>
    );
}

const StyleNoHabits = styled.div`
    flex-wrap:wrap;
    margin-top:30px;
    margin-bottom: 10px;
    width: calc(100vw - 36px);
    
    p{
        font-size: 17.976px;
        line-height: 22px;
        color: var(--color-text);
    }
`;

const Container = styled.div`
    margin-top: 98px;

`;

const HabitsTitle = styled.div`
    width: calc(100vw - 36px);
    display:flex;
    justify-content: space-between;
    h2{
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }
    button{
        width: 40px;
        height: 35px;
        background: #52B6FF;
        border-radius: 4.63636px;
        border:none;
        color:#FFF;
        cursor:pointer;
        font-size: 26.976px;
        line-height: 34px;
    }

`;

const HabitsItems = styled.div`
    margin-bottom:101px;
`;