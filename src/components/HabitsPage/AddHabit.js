import { useContext } from "react";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";
import AddHabitContext from "../../contexts/AddHabitContext";

export default function AddHabit({toggleFormAddHabit,saveHabit, loading,setLoading}){
    
    const nameDays = ['D','S','T','Q','Q','S','S'];
    const {addName,setAddName} = useContext(AddHabitContext);
    const {addDays,setAddDays} = useContext(AddHabitContext);
    const buttonDays = nameDays.map((day,index)=>{
        const clicked = addDays.some(day => day === index);
        const BGColor = clicked ? "#CFCFCF" : "#FFF";
        const borderColor = clicked ? "#CFCFCF" : "#D5D5D5";
        const textColor = clicked ? "#FFF" : "#DBDBDB";
        if(!addDays.includes(index)){
            return (
                <ButtonDay onClick={()=> {
                    if(!addDays.includes(index)){
                        addDays.push(index);
                    }else{
                        addDays.sort();
                        addDays.splice(addDays.indexOf(index),1);
                    }
                    addDays.sort();
                    setAddDays([...addDays]);
                }}
                background={BGColor} color={textColor} border={borderColor}
                >{day}</ButtonDay>
            ); 
        }
        else{
            return(
                <ButtonDay onClick={()=>{
                    if(!addDays.includes(index)){
                        addDays.push(index);
                    }else{
                        addDays.sort();
                        addDays.splice(addDays.indexOf(index),1);
                    }
                    addDays.sort();
                    setAddDays([...addDays]);
                }}
                background={BGColor} color={textColor} border={borderColor}
                >{day}</ButtonDay>
            );
        }
    });

    function disable(){
        return loading ? "disable" : "";
    }

    function loadingButton(){
        return loading ? (
            <ThreeDots color="var(--white)" background-color={"var(--background-button"} opacity={0.7} height={80} width={80} />)
            :
            ("Salvar"
        );
    }

    function handleSaveHabit(){
        saveHabit({name:addName,days:addDays});
        setAddName("");
        setAddDays([]);
    }

    return (
        <StyleAddHabit>
            <Input type="text" placeholder="Nome do hábito" value={addName} onChange={e=>setAddName(e.target.value)} disabled={disable()} />
            <Boxes>{buttonDays}</Boxes>
            <AddHabitButtons>
                <Cancel onClick={()=> {
                    toggleFormAddHabit(false);
                    setLoading(false);
                }}>
                    Cancelar
                </Cancel>
                <Save onClick={handleSaveHabit} disabled={disable()}>
                    {loadingButton()}
                </Save>
            </AddHabitButtons>
        </StyleAddHabit>
    );
}

const StyleAddHabit = styled.div`
    width: 100%;
    padding:18px;
    height: 180px;
    background-color: #FFFFFF;
    border-radius: 5px;
    margin-top:20px;
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

const AddHabitButtons = styled.div`
    display:flex;
    justify-content:flex-end;
    align-items:center;
    margin-top:20px;
`;

const Save = styled.button`
    width: 84px;
    height: 35px;
    background-color: var(--background-button);
    border-radius: 4.63636px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: var(--white);
    font-family: 'Lexend Deca', sans-serif;
    padding: 14px;
   
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
`;

const Cancel = styled.button`
    width: 84px;
    height: 35px;
    background-color: var(--white);
    border-radius: 4.63636px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: var(--background-button);
    font-family: 'Lexend Deca', sans-serif;
    padding: 14px;
    margin-right:23px;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
`;

const Input = styled.input`
    width:100%;
    height: 45px;
    background-color: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    padding: 14px;
    margin-bottom: 6px;

    ::placeholder {
        color: var(--input-text);
        font-family: 'Lexend Deca', sans-serif;
      }
`;