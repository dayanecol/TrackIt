import styled from "styled-components";
import ProgressBar from "./ProgressBar";
import { Link } from "react-router-dom";
import { useContext } from "react";
import PercentageProgressBarContext from "../contexts/PercentageProgressBarContext";

export default function Footer(){
    const { percentage } = useContext (PercentageProgressBarContext);
    
    return (
        <StyleFooter>
            <StyledLink to= "/habitos">
                <p>Habitos</p>
            </StyledLink>
            <StyledLink to= "/hoje">
                <ProgressBar percentage={percentage}/>
            </StyledLink>
            <StyledLink to="/historico">
                <p>Historico</p>
            </StyledLink>
        </StyleFooter>
    );
}

const StyleFooter = styled.div`
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

const StyledLink = styled(Link)`
    text-decoration:none;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    color: #52B6FF;
    cursor:pointer;

`;