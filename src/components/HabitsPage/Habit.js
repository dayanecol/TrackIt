import styled from "styled-components";
import trash from "../../assets/img/trash.svg";


export default function Habit ({id,name,days,removeHabit}){
    const nameDays = ['D','S','T','Q','Q','S','S'];
    const buttonDays = nameDays.map((day,index)=>{
        const clicked = days.some(day => day === index);
        const BGColor = clicked ? "#CFCFCF" : "#FFF";
        const borderColor = clicked ? "#CFCFCF" : "#D5D5D5";
        const textColor = clicked ? "#FFF" : "#DBDBDB";
        return <ButtonDay key={id} background={BGColor} color={textColor} border={borderColor}>{day}</ButtonDay>
    });

    
    return (
        <Container>
            <Description>
                <p>{name}</p>
                <ButtonTrash onClick={()=> removeHabit(id)}>
                    <img src={trash} alt="trash" />
                </ButtonTrash>
                
            </Description>
            <Boxes>{buttonDays}</Boxes>
        </Container>
        
    );
}

const Container = styled.div`
    margin-top:30px;
    margin-bottom: 10px;
    width: calc(100vw - 36px);
    padding: 11px 10px 15px 15px;
    height: 91px;
    background-color: #FFF;
    border-radius: 5px;
   
`;

const Boxes = styled.div`
    width:234px;
    margin-top:10px;
    display:flex;
    justify-content:space-between;

`;

const ButtonDay = styled.div`
    width: 30px;
    height: 30px;
    background-color: ${props => props.background};
    border: 1px solid ${props => props.border};
    border-radius: 5px;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: ${props => props.color};
    display:flex;
    align-items:center;
    justify-content:center;

`;

const Description = styled.div`

    display:flex;
    justify-content:space-between;
    p{

        font-size: 20px;
        line-height: 25px;
        color: #666666; 
    }
    
`;

const ButtonTrash = styled.div`
    cursor:pointer;
    img{
        width:14px;
        height:16px;
    }
`;