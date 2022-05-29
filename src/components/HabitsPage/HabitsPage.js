import styled from "styled-components";
import Header from "../../shared/Header";
import Footer from "../../shared/Footer";

export default function HabitsPage (){

    return (
        <>
            <Header />
            <Habits>
                <h2>Meus hábitos</h2>
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            </Habits>
            <Footer />
        </>
    );
}

const Habits = styled.div`
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