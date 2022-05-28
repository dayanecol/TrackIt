import { useContext } from "react"; 
import UserContext from "../contexts/UserContext";
import styled from "styled-components";
import HeaderLogo from "./HeaderLogo";

export default function Header(){
    const {userData} =useContext (UserContext);

    return (
        <HeaderWrapper>
            <HeaderLogo />
            <img src={userData.image} alt="usuario" />
        </HeaderWrapper>
    );
}

const HeaderWrapper = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width: 100%;
    height: 70px;
    background-color: var(--background-header);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    padding:18px;
    color: var(--white);
    font-size: 38.982px;
    line-height: 49px;
    position:fixed;
    top:0;
    right:0;
    left:0;
    img{
        width: 51px;
        height: 51px;
        border-radius: 98.5px;
    }
`;
