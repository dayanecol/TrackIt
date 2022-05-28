import { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

export default function TodayPage ({token}){

    useEffect (()=>{
        const config ={
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
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
            <Header>
                TrackIt
            </Header>
            <Today>
                <h2>Meus hábitos</h2>
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            </Today>
            <Footer >
                <p>Habitos</p>
                <p>Hoje</p>
                <p>Historico</p>
            </Footer>
        </>
    );
}


const Header = styled.div`
    display:flex;
    justify-content:flex-start;
    align-items:center;
    width: 100%;
    height: 70px;
    background-color: var(--background-header);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    padding:15px;
    color: var(--white);
    font-size: 38.982px;
    line-height: 49px;
    position:fixed;
    top:0;
    right:0;
    left:0;
`;

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

const Footer = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width: 100%;
    padding:36px;
    height: 70px;
    background-color: var(--white);
    position:fixed;
    bottom:0;
    right:0;
    left:0;
`;