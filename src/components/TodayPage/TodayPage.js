import { useContext } from "react"; 
import UserContext from "../../contexts/UserContext";
import { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Header from "../../shared/Header";
import Footer from "../../shared/Footer";



export default function TodayPage (){
    const {userData} =useContext (UserContext);
    const config ={
        headers: {
            Authorization: `Bearer ${userData.token}`
        }
    }
    useEffect (()=>{
        

        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
        const promise = axios.get(URL,config);

        promise
            .then(response=>{
                const {data}=response;
                console.log(data);
                
            })
            .catch(err=> console.log(err.response));

    },[]);

    return (
        <>
            <Header />
            <Today>
                <h2>Meus hábitos</h2>
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            </Today>
            <Footer />
        </>
    );
}




const Today = styled.div`
    display:flex;
    justify-content:flex-start;
    align-items:center;
    margin: 98px 18px 101px 18px;
    flex-wrap:wrap;
    h2{
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
    padding-bottom: 28px;
    }
    p{
        font-size: 17.976px;
        line-height: 22px;
        color: var(--color-text);
    }
`;

