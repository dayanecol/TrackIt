import { useContext, useState } from "react"; 
import UserContext from "../../contexts/UserContext";
import PercentageProgressBarContext from "../../contexts/PercentageProgressBarContext";
import { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Header from "../../shared/Header";
import Footer from "../../shared/Footer";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { ThemeProvider } from "styled-components";
import check from "../../assets/img/check.png";

export default function TodayPage (){
    const {userData} = useContext (UserContext);
    const {percentage, setPercentage} = useContext(PercentageProgressBarContext);
    const [todayHabits, setTodayHabits] = useState([]);
    const [reload,setReload] = useState(false);

    dayjs.locale("pt-br");
    require("dayjs/locale/pt-br");
    let today = dayjs(dayjs()).locale("pt-br").format("dddd,DD/MM");
    let upToday = today[0].toUpperCase()+today.slice(1);

    useEffect (()=>{
        const config ={
            headers: {
                Authorization: `Bearer ${userData.token}`
            }
        }

        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
        const promise = axios.get(URL,config);

        promise
            .then(response=>{
                const {data}=response;
                setTodayHabits(data);
                percentageData();
            })
            .catch(err=> console.log(err.response));

    },[reload]);

    function percentageData(){
        const habitsDone = todayHabits.filter(item=>item.done===true);
        let value=0;
        if(todayHabits.length>0){
            value = Math.round((habitsDone.length/todayHabits.length)*100)
        }
        setPercentage(value);
    }

    function statusHabit(id,done){
        const URL= done ?`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`:`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`;

        const config ={
            headers: {
                Authorization: `Bearer ${userData.token}`
            }
        }
    
        const promise = axios.post(URL, "",config);

        promise
            .then(() =>{
                setReload(!reload);
            })
            .catch((err)=>{
                alert("Houve um problema!");
            });
    }
       
    function TodayList(){
        return todayHabits.map((habit)=>{
            const {id, name, done, currentSequence, highestSequence} = habit;
            return <Task key={id}>
                <div>
                    <h2>{name}</h2>
                    <Sequence>
                        <p>
                            Sequência atual:
                            <StyleCurrentSequence selected={done}>
                                {currentSequence}
                                {currentSequence !== "0" && currentSequence !== "1" ? ' dia' : ' dias'}
                            </StyleCurrentSequence>
                        </p>
                        <p>
                            Seu recorde:
                            <StyleHighestSequence currentSeq={currentSequence} highestSeq={highestSequence} >
                                {highestSequence}
                                {highestSequence !== "0" && highestSequence !== "1" ? ' dia' : ' dias'}
                            </StyleHighestSequence>
                        </p>
                    </Sequence>
                </div>
                <ThemeProvider theme={done? clickedTheme : defaultTheme}>
                    <CheckBox onClick={()=>statusHabit(id,done)}>
                        <img src={check} alt="icone" /> 
                    </CheckBox>
                </ThemeProvider>

            </Task>
        });
    }
    percentageData();
    return (
        <>
            <Header />
            <Today>
                <TodayInfo>
                    <h2>{upToday}</h2>
                        {(percentage)?
                            <h3>{percentage}% dos hábitos concluídos</h3>
                            :
                            <p>Nenhum hábito concluído ainda</p>
                        }
                </TodayInfo>
                <StyleTodayList>
                        {TodayList()}
                </StyleTodayList>
            </Today>
            <Footer />
        </>
    );
}


function currentDaysColor(props) {
    const { selected } = props;
    if (selected) {
        return "#8FC549";
    } else {
        return "#666";
    }
}

function highestDayColor(currentSequence, highestSequence){
    if (highestSequence !== 0) {
        if (currentSequence === highestSequence) {
            return "#8FC549";
        } else {
            return "#666";
        }
    } 
}


const Today = styled.div`
    width: calc(100vw - 36px);
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

const Task = styled.div`

    width: calc(100vw - 36px);
    padding:13px 13px 12px 15px;
    height: 94px;
    background-color: #FFF;
    border-radius: 5px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:10px;
    color: #666666;

    :first-child{
    margin-top:28px;
    }

    h2{
        font-size: 19.976px;
        line-height: 25px;    
    }
    p{
        font-size: 12.976px;
        line-height: 16px; 
    }
`;
const Sequence = styled.div`
    margin-bottom:13px;

`;

const CheckBox = styled.div`
    width:69px;
    height: 69px;
    border-radius: 5px;
    background-color:${props => props.theme.dfColor};
    border: 1px solid #D4D4D4;
    cursor: pointer;
    position:relative;

    img{
        width: 35px;
        height: 28px;
        top:20px;
        left:15px;
        position:absolute;
    }
`;
const TodayInfo = styled.div`
    font-size: 17.976px;
    line-height: 22px;
    h3{
        color: #8FC549;
    }
    p{
        color: #BABABA;
    }
    h2{
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
        padding-bottom:0;
    }
`;
const StyleTodayList = styled.div`
    width: calc(100vw - 36px);
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-item:center;

    h2{
        padding-bottom:7px;
    }

`;

const defaultTheme = {
    dfColor: '#EBEBEB'
};

const clickedTheme = {
    dfColor: '#8FC549'
};

const StyleHighestSequence = styled.span`
    color: ${(props) => highestDayColor(props.currentSeq, props.highestSeq)}
`;

const StyleCurrentSequence = styled.span`
    color: ${(selected) => currentDaysColor(selected)}
`;


